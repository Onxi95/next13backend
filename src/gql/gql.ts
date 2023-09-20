/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductsGetList {\n  products(pagination: {page: 1, pageSize: 10}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        categories {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              name\n              caption\n              width\n              height\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(pagination: {page: 1, pageSize: 10}) {\n    data {\n      id\n      attributes {\n        name\n        description\n        categories {\n          data {\n            attributes {\n              name\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              name\n              caption\n              width\n              height\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
