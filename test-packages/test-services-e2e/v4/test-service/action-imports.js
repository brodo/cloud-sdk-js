'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.actionImports =
  exports.createTestEntityByIdReturnId =
  exports.createTestEntityById =
    void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
require('@sap-cloud-sdk/odata-common');
var odata_v4_1 = require('@sap-cloud-sdk/odata-v4');
var TestEntity_1 = require('./TestEntity');
/**
 * Create Test Entity By Id.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function createTestEntityById(parameters) {
  var params = {
    id: new odata_v4_1.ActionImportParameter('id', 'Edm.Int32', parameters.id)
  };
  return new odata_v4_1.ActionImportRequestBuilder(
    '/odata/test-service',
    'createTestEntityById',
    function (data) {
      return (0, odata_v4_1.transformReturnValueForEntity)(
        data,
        TestEntity_1.TestEntity
      );
    },
    params
  );
}
exports.createTestEntityById = createTestEntityById;
/**
 * Create Test Entity By Id Return Id.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function createTestEntityByIdReturnId(parameters) {
  var params = {
    id: new odata_v4_1.ActionImportParameter('id', 'Edm.Int32', parameters.id)
  };
  return new odata_v4_1.ActionImportRequestBuilder(
    '/odata/test-service',
    'createTestEntityByIdReturnId',
    function (data) {
      return (0, odata_v4_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v4_1.edmToTs)(val.value, 'Edm.Int32');
        }
      );
    },
    params
  );
}
exports.createTestEntityByIdReturnId = createTestEntityByIdReturnId;
exports.actionImports = {
  createTestEntityById: createTestEntityById,
  createTestEntityByIdReturnId: createTestEntityByIdReturnId
};
//# sourceMappingURL=action-imports.js.map
