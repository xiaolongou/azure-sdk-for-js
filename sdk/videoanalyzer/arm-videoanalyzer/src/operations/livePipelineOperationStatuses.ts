/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LivePipelineOperationStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerManagementClient } from "../videoAnalyzerManagementClient";
import {
  LivePipelineOperationStatusesGetOptionalParams,
  LivePipelineOperationStatusesGetResponse
} from "../models";

/** Class containing LivePipelineOperationStatuses operations. */
export class LivePipelineOperationStatusesImpl
  implements LivePipelineOperationStatuses {
  private readonly client: VideoAnalyzerManagementClient;

  /**
   * Initialize a new instance of the class LivePipelineOperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerManagementClient) {
    this.client = client;
  }

  /**
   * Get the operation status of a live pipeline.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param livePipelineName Live pipeline unique identifier.
   * @param operationId The operation ID.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    livePipelineName: string,
    operationId: string,
    options?: LivePipelineOperationStatusesGetOptionalParams
  ): Promise<LivePipelineOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        livePipelineName,
        operationId,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/livePipelines/{livePipelineName}/operationStatuses/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LivePipelineOperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.livePipelineName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
