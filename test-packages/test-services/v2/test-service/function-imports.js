'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.functionImports =
  exports.fContinue =
  exports.createTestComplexType =
  exports.testFunctionImportMultipleParams =
  exports.testFunctionImportPost =
  exports.testFunctionImportGet =
  exports.testFunctionImportComplexReturnTypeCollection =
  exports.testFunctionImportUnsupportedEdmTypes =
  exports.testFunctionImportComplexReturnType =
  exports.testFunctionImportSharedEntityReturnTypeCollection =
  exports.testFunctionImportSharedEntityReturnType =
  exports.testFunctionImportEntityReturnTypeCollection =
  exports.testFunctionImportEntityReturnType =
  exports.testFunctionImportEdmReturnTypeCollection =
  exports.testFunctionImportEdmReturnType =
  exports.testFunctionImportNoReturnType =
    void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var odata_common_1 = require('@sap-cloud-sdk/odata-common');
var odata_v2_1 = require('@sap-cloud-sdk/odata-v2');
var TestEntity_1 = require('./TestEntity');
var TestComplexType_1 = require('./TestComplexType');
/**
 * Test Function Import No Return Type.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportNoReturnType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportNoReturnType',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForUndefined)(
        data,
        function (val) {
          return undefined;
        }
      );
    },
    params
  );
}
exports.testFunctionImportNoReturnType = testFunctionImportNoReturnType;
/**
 * Test Function Import Edm Return Type.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportEdmReturnType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportEdmReturnType',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(
            val.TestFunctionImportEdmReturnType,
            'Edm.Boolean'
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportEdmReturnType = testFunctionImportEdmReturnType;
/**
 * Test Function Import Edm Return Type Collection.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportEdmReturnTypeCollection(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportEdmReturnTypeCollection',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmTypeList)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(val, 'Edm.String');
        }
      );
    },
    params
  );
}
exports.testFunctionImportEdmReturnTypeCollection =
  testFunctionImportEdmReturnTypeCollection;
/**
 * Test Function Import Entity Return Type.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportEntityReturnType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportEntityReturnType',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEntity)(
        data,
        TestEntity_1.TestEntity
      );
    },
    params
  );
}
exports.testFunctionImportEntityReturnType = testFunctionImportEntityReturnType;
/**
 * Test Function Import Entity Return Type Collection.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportEntityReturnTypeCollection(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportEntityReturnTypeCollection',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEntityList)(
        data,
        TestEntity_1.TestEntity
      );
    },
    params
  );
}
exports.testFunctionImportEntityReturnTypeCollection =
  testFunctionImportEntityReturnTypeCollection;
/**
 * Test Function Import Shared Entity Return Type. The 'execute' method does not exist when using this function/action import. Please use the 'executeRaw' for getting the raw response.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportSharedEntityReturnType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportSharedEntityReturnType',
    function (data) {
      return (0, odata_common_1.throwErrorWhenReturnTypeIsUnionType)(
        data,
        'TestFunctionImportSharedEntityReturnType'
      );
    },
    params
  );
}
exports.testFunctionImportSharedEntityReturnType =
  testFunctionImportSharedEntityReturnType;
/**
 * Test Function Import Shared Entity Return Type Collection. The 'execute' method does not exist when using this function/action import. Please use the 'executeRaw' for getting the raw response.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportSharedEntityReturnTypeCollection(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportSharedEntityReturnTypeCollection',
    function (data) {
      return (0, odata_common_1.throwErrorWhenReturnTypeIsUnionType)(
        data,
        'TestFunctionImportSharedEntityReturnTypeCollection'
      );
    },
    params
  );
}
exports.testFunctionImportSharedEntityReturnTypeCollection =
  testFunctionImportSharedEntityReturnTypeCollection;
/**
 * Test Function Import Complex Return Type.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportComplexReturnType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportComplexReturnType',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForComplexType)(
        data,
        function (data) {
          return (0, odata_v2_1.deserializeComplexType)(
            data,
            TestComplexType_1.TestComplexType
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportComplexReturnType =
  testFunctionImportComplexReturnType;
/**
 * Test Function Import Unsupported Edm Types.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportUnsupportedEdmTypes(parameters) {
  var params = {
    simpleParam: new odata_common_1.FunctionImportParameter(
      'SimpleParam',
      'Edm.Any',
      parameters.simpleParam
    )
  };
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportUnsupportedEdmTypes',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(
            val.TestFunctionImportUnsupportedEdmTypes,
            'Edm.Any'
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportUnsupportedEdmTypes =
  testFunctionImportUnsupportedEdmTypes;
/**
 * Test Function Import Complex Return Type Collection.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportComplexReturnTypeCollection(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportComplexReturnTypeCollection',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForComplexTypeList)(
        data,
        function (data) {
          return (0, odata_v2_1.deserializeComplexType)(
            data,
            TestComplexType_1.TestComplexType
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportComplexReturnTypeCollection =
  testFunctionImportComplexReturnTypeCollection;
/**
 * Test Function Import Get.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportGet(parameters) {
  var params = {
    simpleParam: new odata_common_1.FunctionImportParameter(
      'SimpleParam',
      'Edm.String',
      parameters.simpleParam
    )
  };
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportGET',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(
            val.TestFunctionImportGET,
            'Edm.Boolean'
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportGet = testFunctionImportGet;
/**
 * Test Function Import Post.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportPost(parameters) {
  var params = {
    simpleParam: new odata_common_1.FunctionImportParameter(
      'SimpleParam',
      'Edm.String',
      parameters.simpleParam
    )
  };
  return new odata_v2_1.FunctionImportRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportPOST',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(
            val.TestFunctionImportPOST,
            'Edm.Boolean'
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportPost = testFunctionImportPost;
/**
 * Test Function Import Multiple Params.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function testFunctionImportMultipleParams(parameters) {
  var params = {
    stringParam: new odata_common_1.FunctionImportParameter(
      'StringParam',
      'Edm.String',
      parameters.stringParam
    ),
    booleanParam: new odata_common_1.FunctionImportParameter(
      'BooleanParam',
      'Edm.Boolean',
      parameters.booleanParam
    )
  };
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestFunctionImportMultipleParams',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(
            val.TestFunctionImportMultipleParams,
            'Edm.Boolean'
          );
        }
      );
    },
    params
  );
}
exports.testFunctionImportMultipleParams = testFunctionImportMultipleParams;
/**
 * Create Test Complex Type.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function createTestComplexType(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'CreateTestComplexType',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForComplexType)(
        data,
        function (data) {
          return (0, odata_v2_1.deserializeComplexType)(
            data,
            TestComplexType_1.TestComplexType
          );
        }
      );
    },
    params
  );
}
exports.createTestComplexType = createTestComplexType;
/**
 * Continue.
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function fContinue(parameters) {
  var params = {};
  return new odata_v2_1.FunctionImportRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_TEST_SRV',
    'Continue',
    function (data) {
      return (0, odata_v2_1.transformReturnValueForEdmType)(
        data,
        function (val) {
          return (0, odata_v2_1.edmToTs)(val.Continue, 'Edm.Boolean');
        }
      );
    },
    params
  );
}
exports.fContinue = fContinue;
exports.functionImports = {
  testFunctionImportNoReturnType: testFunctionImportNoReturnType,
  testFunctionImportEdmReturnType: testFunctionImportEdmReturnType,
  testFunctionImportEdmReturnTypeCollection:
    testFunctionImportEdmReturnTypeCollection,
  testFunctionImportEntityReturnType: testFunctionImportEntityReturnType,
  testFunctionImportEntityReturnTypeCollection:
    testFunctionImportEntityReturnTypeCollection,
  testFunctionImportSharedEntityReturnType:
    testFunctionImportSharedEntityReturnType,
  testFunctionImportSharedEntityReturnTypeCollection:
    testFunctionImportSharedEntityReturnTypeCollection,
  testFunctionImportComplexReturnType: testFunctionImportComplexReturnType,
  testFunctionImportUnsupportedEdmTypes: testFunctionImportUnsupportedEdmTypes,
  testFunctionImportComplexReturnTypeCollection:
    testFunctionImportComplexReturnTypeCollection,
  testFunctionImportGet: testFunctionImportGet,
  testFunctionImportPost: testFunctionImportPost,
  testFunctionImportMultipleParams: testFunctionImportMultipleParams,
  createTestComplexType: createTestComplexType,
  fContinue: fContinue
};
//# sourceMappingURL=function-imports.js.map
