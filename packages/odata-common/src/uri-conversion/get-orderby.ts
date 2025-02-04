import { EntityBase } from '../entity-base';
import { Orderable } from '../order/orderable';
import { OrderLink } from '../order/order-link';
import { Order } from '../order/order';

/**
 * Get an object containing the given order bys as query parameter, or an empty object if none was given.
 * @typeparam EntityT - Type of the entity to order
 * @param orderBy - A list of orderables to get the query parameters for
 * @returns An object containing the query parameter or an empty object
 */
export function getOrderBy<EntityT extends EntityBase>(
  orderBy: Orderable<EntityT>[]
): Partial<{ orderby: string }> {
  if (typeof orderBy !== 'undefined' && orderBy.length) {
    return {
      orderby: getODataOrderByExpressions(orderBy).join(',')
    };
  }
  return {};
}

function getODataOrderByExpressions<OrderByEntityT extends EntityBase>(
  orderBys: Orderable<OrderByEntityT>[],
  parentFieldNames: string[] = []
): string[] {
  return orderBys.reduce(
    (expressions: string[], orderBy: Orderable<OrderByEntityT>) => {
      if (orderBy instanceof OrderLink) {
        return [
          ...expressions,
          getOrderByExpressionForOrderLink(orderBy, [...parentFieldNames])
        ];
      }
      return [
        ...expressions,
        getOrderByExpressionForOrder(orderBy, parentFieldNames)
      ];
    },
    []
  );
}

function getOrderByExpressionForOrderLink<
  OrderByEntityT extends EntityBase,
  LinkedEntityT extends EntityBase
>(
  orderBy: OrderLink<OrderByEntityT, LinkedEntityT>,
  parentFieldNames: string[] = []
): string {
  return getODataOrderByExpressions(orderBy.orderBy, [
    ...parentFieldNames,
    orderBy.link._fieldName
  ]).join(',');
}

function getOrderByExpressionForOrder<OrderByEntityT extends EntityBase>(
  orderBy: Order<OrderByEntityT>,
  parentFieldNames: string[] = []
): string {
  return [
    [...parentFieldNames, orderBy._fieldName].join('/'),
    orderBy.orderType
  ].join(encodeURIComponent(' '));
}
