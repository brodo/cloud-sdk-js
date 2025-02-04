/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import '@sap-cloud-sdk/odata-common';
import {
  deserializeComplexType,
  ActionImportRequestBuilder,
  ActionImportParameter,
  transformReturnValueForComplexType
} from '@sap-cloud-sdk/odata-v4';
import { TestComplexType1 } from './TestComplexType1';
import { TestComplexType2 } from './TestComplexType2';

/**
 * Type of the parameters to be passed to [[testActionImportNoParameterComplexReturnType1]].
 */
export interface TestActionImportNoParameterComplexReturnType1Parameters {}

/**
 * Test Action Import No Parameter Complex Return Type 1.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function testActionImportNoParameterComplexReturnType1(
  parameters: TestActionImportNoParameterComplexReturnType1Parameters
): ActionImportRequestBuilder<
  TestActionImportNoParameterComplexReturnType1Parameters,
  TestComplexType1
> {
  const params = {};

  return new ActionImportRequestBuilder(
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestActionImportNoParameterComplexReturnType1',
    data =>
      transformReturnValueForComplexType(data, data =>
        deserializeComplexType(data, TestComplexType1)
      ),
    params
  );
}

/**
 * Type of the parameters to be passed to [[testActionImportNoParameterComplexReturnType2]].
 */
export interface TestActionImportNoParameterComplexReturnType2Parameters {}

/**
 * Test Action Import No Parameter Complex Return Type 2.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function testActionImportNoParameterComplexReturnType2(
  parameters: TestActionImportNoParameterComplexReturnType2Parameters
): ActionImportRequestBuilder<
  TestActionImportNoParameterComplexReturnType2Parameters,
  TestComplexType2
> {
  const params = {};

  return new ActionImportRequestBuilder(
    '/sap/opu/odata/sap/API_TEST_SRV',
    'TestActionImportNoParameterComplexReturnType2',
    data =>
      transformReturnValueForComplexType(data, data =>
        deserializeComplexType(data, TestComplexType2)
      ),
    params
  );
}

export const actionImports = {
  testActionImportNoParameterComplexReturnType1,
  testActionImportNoParameterComplexReturnType2
};
