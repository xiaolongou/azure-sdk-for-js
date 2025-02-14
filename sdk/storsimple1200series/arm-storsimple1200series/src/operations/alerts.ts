/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Alerts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClient } from "../storSimpleManagementClient";
import {
  Alert,
  AlertsListByManagerNextOptionalParams,
  AlertsListByManagerOptionalParams,
  AlertsListByManagerResponse,
  ClearAlertRequest,
  AlertsClearOptionalParams,
  SendTestAlertEmailRequest,
  AlertsSendTestEmailOptionalParams,
  AlertsListByManagerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Alerts operations. */
export class AlertsImpl implements Alerts {
  private readonly client: StorSimpleManagementClient;

  /**
   * Initialize a new instance of the class Alerts class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimpleManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the alerts in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AlertsListByManagerOptionalParams
  ): PagedAsyncIterableIterator<Alert> {
    const iter = this.listByManagerPagingAll(
      resourceGroupName,
      managerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByManagerPagingPage(
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByManagerPagingPage(
    resourceGroupName: string,
    managerName: string,
    options?: AlertsListByManagerOptionalParams
  ): AsyncIterableIterator<Alert[]> {
    let result = await this._listByManager(
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByManagerNext(
        resourceGroupName,
        managerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByManagerPagingAll(
    resourceGroupName: string,
    managerName: string,
    options?: AlertsListByManagerOptionalParams
  ): AsyncIterableIterator<Alert> {
    for await (const page of this.listByManagerPagingPage(
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all the alerts in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: AlertsListByManagerOptionalParams
  ): Promise<AlertsListByManagerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, options },
      listByManagerOperationSpec
    );
  }

  /**
   * Clear the alerts.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param request The clear alert request.
   * @param options The options parameters.
   */
  clear(
    resourceGroupName: string,
    managerName: string,
    request: ClearAlertRequest,
    options?: AlertsClearOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, request, options },
      clearOperationSpec
    );
  }

  /**
   * Sends a test alert email.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param request The send test alert email request.
   * @param options The options parameters.
   */
  sendTestEmail(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    request: SendTestAlertEmailRequest,
    options?: AlertsSendTestEmailOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, request, options },
      sendTestEmailOperationSpec
    );
  }

  /**
   * ListByManagerNext
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param nextLink The nextLink from the previous successful call to the ListByManager method.
   * @param options The options parameters.
   */
  private _listByManagerNext(
    resourceGroupName: string,
    managerName: string,
    nextLink: string,
    options?: AlertsListByManagerNextOptionalParams
  ): Promise<AlertsListByManagerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managerName, nextLink, options },
      listByManagerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByManagerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const clearOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/clearAlerts",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const sendTestEmailOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/sendTestAlertEmail",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.request1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByManagerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
