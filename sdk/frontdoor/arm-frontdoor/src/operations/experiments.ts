/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Experiments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClient } from "../frontDoorManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Experiment,
  ExperimentsListByProfileNextOptionalParams,
  ExperimentsListByProfileOptionalParams,
  ExperimentsListByProfileResponse,
  ExperimentsGetOptionalParams,
  ExperimentsGetResponse,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsCreateOrUpdateResponse,
  ExperimentUpdateModel,
  ExperimentsUpdateOptionalParams,
  ExperimentsUpdateResponse,
  ExperimentsDeleteOptionalParams,
  ExperimentsListByProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Experiments operations. */
export class ExperimentsImpl implements Experiments {
  private readonly client: FrontDoorManagementClient;

  /**
   * Initialize a new instance of the class Experiments class.
   * @param client Reference to the service client
   */
  constructor(client: FrontDoorManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of Experiments
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: ExperimentsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<Experiment> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
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
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: ExperimentsListByProfileOptionalParams
  ): AsyncIterableIterator<Experiment[]> {
    let result = await this._listByProfile(
      resourceGroupName,
      profileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: ExperimentsListByProfileOptionalParams
  ): AsyncIterableIterator<Experiment> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of Experiments
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: ExperimentsListByProfileOptionalParams
  ): Promise<ExperimentsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an Experiment by ExperimentName
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams
  ): Promise<ExperimentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, experimentName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment resource
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExperimentsCreateOrUpdateResponse>,
      ExperimentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExperimentsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, experimentName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment resource
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams
  ): Promise<ExperimentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      profileName,
      experimentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment Update Model
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: ExperimentUpdateModel,
    options?: ExperimentsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExperimentsUpdateResponse>,
      ExperimentsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExperimentsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, experimentName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param parameters The Experiment Update Model
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    parameters: ExperimentUpdateModel,
    options?: ExperimentsUpdateOptionalParams
  ): Promise<ExperimentsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      experimentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, profileName, experimentName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an Experiment
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param experimentName The Experiment identifier associated with the Experiment
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      experimentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName The Profile identifier associated with the Tenant and Partner
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: ExperimentsListByProfileNextOptionalParams
  ): Promise<ExperimentsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExperimentList
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
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Experiment
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
    Parameters.profileName,
    Parameters.experimentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Experiment
    },
    201: {
      bodyMapper: Mappers.Experiment
    },
    202: {
      bodyMapper: Mappers.Experiment
    },
    204: {
      bodyMapper: Mappers.Experiment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.experimentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Experiment
    },
    201: {
      bodyMapper: Mappers.Experiment
    },
    202: {
      bodyMapper: Mappers.Experiment
    },
    204: {
      bodyMapper: Mappers.Experiment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.experimentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/Experiments/{experimentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.experimentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExperimentList
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
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
