import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Destination,
  DestinationNameAndJwt,
  DestinationOptions
} from '@sap-cloud-sdk/connectivity';
import { HttpResponse } from '@sap-cloud-sdk/http-client';
import { Constructable, EntityIdentifiable, EntityBase } from '../entity-base';
import { Selectable } from '../selectable/selectable';
import { ODataGetAllRequestConfig } from '../request/odata-get-all-request-config';
import { ODataGetByKeyRequestConfig } from '../request/odata-get-by-key-request-config';
import { MethodRequestBuilder } from './request-builder-base';

/**
 * @internal
 */
export abstract class GetRequestBuilderBase<
    EntityT extends EntityBase,
    RequestConfigT extends
      | ODataGetAllRequestConfig<EntityT>
      | ODataGetByKeyRequestConfig<EntityT>
  >
  extends MethodRequestBuilder<RequestConfigT>
  implements EntityIdentifiable<EntityT>
{
  readonly _entity: EntityT;

  /**
   * Creates an instance of GetAllRequestBuilder.
   * @param _entityConstructor - Constructor of the entity to create the request for.
   * @param requestConfig - Request config of the get all or get by key request.
   */
  constructor(
    readonly _entityConstructor: Constructable<EntityT>,
    requestConfig: RequestConfigT
  ) {
    super(requestConfig);
  }
  /**
   * Restrict the response to the given selection of properties in the request.
   * @param selects - Fields to select in the request.
   * @returns The request builder itself, to facilitate method chaining.
   */
  select(...selects: Selectable<EntityT>[]): this;
  select(selects: Selectable<EntityT>[]): this;
  select(
    first: undefined | Selectable<EntityT> | Selectable<EntityT>[],
    ...rest: Selectable<EntityT>[]
  ): this {
    this.requestConfig.selects = variadicArgumentToArray(first, rest);
    return this;
  }

  /**
   * Execute request and return an [[HttpResponse]].
   * @param destination - Destination to execute the request against
   * @param options - Options to employ when fetching destinations
   * @returns A promise resolving to an [[HttpResponse]].
   */
  async executeRaw(
    destination: Destination | DestinationNameAndJwt,
    options?: DestinationOptions
  ): Promise<HttpResponse> {
    return this.build(destination, options).then(request => request.execute());
  }
}
