# Custom Header Handling

## Status

accepted

## Context

Currently, the header handling is scattered and leads [functional](https://github.com/SAP/cloud-sdk-backlog/issues/404) or [logging](https://github.com/SAP/cloud-sdk-backlog/issues/74) issues.
This ADR discusses possible solutions and if it should be implemented in version 1.0 and/or 2.0.
There are three sources of headers:

1. Custom headers set by the `addCustomHeaders()` on the [odata-request-config.ts](../../packages/core/src/odata-common/request/odata-delete-request-config.ts) or [openapi-request-builder.ts](../../packages/core/src/openapi/openapi-request-builder.ts)
2. Destination related headers. These come in two flavors:
   1. Auth tokens for the target system and proxy headers from the destination and connectivity service [buildAuthorizationHeaders](../../packages/connectivity/src/scp-cf/authorization-header.ts)
   2. Based on destination properties set by the user (see [getAdditionalHeadersAndQueryParameters](../../packages/connectivity/src/scp-cf/destination/destination.ts).
3. SDK related headers like `eTag` (only OData) found in the `headers()` method in the [odata-request.ts](../../packages/core/src/odata-common/request/odata-request.ts).

The problem is also present to a smaller extend for query parameters, which can come from a [custom setting](../../packages/core/src/odata-common/request/odata-request.ts) on request or from [destination properties](../../packages/connectivity/src/scp-cf/destination/destination.ts).

## Solution Header and Parameter

The root problem is that the header object is `Record<string,any>` and once we collect headers on the way it is not clear where they come from.
We have to keep track on the header origin to enforce the right priority.
A cleaner solution could be:

- The `execute()` method of [odata-request.ts](../../packages/core/src/odata-common/request/odata-request.ts) and [openapi-request-builder.ts](../../packages/core/src/openapi/openapi-request-builder.ts) take the [HttpRequestConfig](../../packages/http-client/src/http-client-types.ts) as input.
  This object has a `headers` property in which all headers go.
  This should be changed to make the custom and SDK headers distinguishable (see section below for details).
- The two destination related headers are currently merged together by the `buildHttpRequest()` in the [http-client.ts](../../packages/http-client/src/http-client.ts).
  The resulting `DestinationHttpRequestConfig` should be adjusted to make property and service related headers distinguishable (see section below for details).
- The `HttpRequestConfig` and `DestinationHttpRequestConfig` go down to the final `execute()` in the [http-client.ts](../../packages/http-client/src/http-client.ts).

These two objects contain all the header and parameter and the rest of the http request config.
Merge the two in the following way shortly before the execution:

- Merge header with priority: CustomHeader > DestinationHeader (Properties) > DestinationHeader (Service) > SdkHeader.
- Merge parameter with priority: CustomParameter > DestinationParameter.
- Merge on structured object means: Ignore casing for the keys merging and keep the original casing from object with the highest priority.
  The `mergeLeftIgnoreCase()` method should do the trick.
- Merge the remaining parts (not header, hot parameter) of `getAxiosConfigWithDefaults()`, `HttpRequestConfig` and `DestinationHttpRequestConfig`.
- The priority for this flat merge of the rest is: HttpRequestConfig > DestinationHttpRequestConfig > getAxiosConfigWithDefaults()
- Use the resulting request config to execute the request.

Note: In the `execute()` method also the CSRF token header is filled. This header should consider as SdkHeader from a origin.

### How to make headers distinguishable

We have twice the same problem in the `HttpRequestConfig` and `DestinationHttpRequestConfig`.
Both contain a single `header` property typed `Record<string,any>` or `Record<string,string>` which contains two sources of headers.

- **Option A**: Keep the single property but use a `HeaderValueObject` containing the value but also information on the origin.
  The header map should be `Record<string,string|HeaderValueObject>` so that direct consumers can still pass simple strings if you use the `executeHttpRequest()`.
  If provided as string we set to highest prio origin.
- **Option B**: Add a property `headerSDK` and `headerProperties` to hold different headers.

## Breaking Changes

We investigate the risk of breaking changes:

- Changing the type of the `header` property from `string|any` to something more structured i.e. `string|HeaderValueObject` is possible (Option A).
- Extending the interface with new properties is possible - the custom ones remain where they are (Option B).
- Removing the optional `customHeader` argument for the methods in [authentication-header.ts](<(../../packages/connectivity/src/scp-cf/authorization-header.ts)>) is not possible.
- There is a risk of intrinsic behavior changes.

## Decision

- Should we do it non breaking in v1 and v2?
- What solution should we use: A or B.

## Consequences

The header and parameter handling is clear and the merging of the headers is done shortly before request execution.