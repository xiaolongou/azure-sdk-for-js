/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EnvironmentVersionData,
  EnvironmentVersionsListOptionalParams,
  EnvironmentVersionsDeleteOptionalParams,
  EnvironmentVersionsGetOptionalParams,
  EnvironmentVersionsGetResponse,
  EnvironmentVersionsCreateOrUpdateOptionalParams,
  EnvironmentVersionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EnvironmentVersions. */
export interface EnvironmentVersions {
  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: EnvironmentVersionsListOptionalParams
  ): PagedAsyncIterableIterator<EnvironmentVersionData>;
  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: EnvironmentVersionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: EnvironmentVersionsGetOptionalParams
  ): Promise<EnvironmentVersionsGetResponse>;
  /**
   * Creates or updates an EnvironmentVersion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Name of EnvironmentVersion. This is case-sensitive.
   * @param version Version of EnvironmentVersion.
   * @param body Definition of EnvironmentVersion.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: EnvironmentVersionData,
    options?: EnvironmentVersionsCreateOrUpdateOptionalParams
  ): Promise<EnvironmentVersionsCreateOrUpdateResponse>;
}
