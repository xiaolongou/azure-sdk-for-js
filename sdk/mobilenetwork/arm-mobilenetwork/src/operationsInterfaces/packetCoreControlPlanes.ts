/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  PacketCoreControlPlane,
  PacketCoreControlPlanesListBySubscriptionOptionalParams,
  PacketCoreControlPlanesListByResourceGroupOptionalParams,
  PacketCoreControlPlanesDeleteOptionalParams,
  PacketCoreControlPlanesGetOptionalParams,
  PacketCoreControlPlanesGetResponse,
  PacketCoreControlPlanesCreateOrUpdateOptionalParams,
  PacketCoreControlPlanesCreateOrUpdateResponse,
  TagsObject,
  PacketCoreControlPlanesUpdateTagsOptionalParams,
  PacketCoreControlPlanesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PacketCoreControlPlanes. */
export interface PacketCoreControlPlanes {
  /**
   * Lists all the packetCoreControlPlanes in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: PacketCoreControlPlanesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PacketCoreControlPlane>;
  /**
   * Lists all the packetCoreControlPlanes in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: PacketCoreControlPlanesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PacketCoreControlPlane>;
  /**
   * Deletes the specified packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreControlPlanesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreControlPlanesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets information about the specified packet core control plane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    options?: PacketCoreControlPlanesGetOptionalParams
  ): Promise<PacketCoreControlPlanesGetResponse>;
  /**
   * Creates or updates a PacketCoreControlPlane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param parameters Parameters supplied to the create or update packet core control plane operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    parameters: PacketCoreControlPlane,
    options?: PacketCoreControlPlanesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PacketCoreControlPlanesCreateOrUpdateResponse>,
      PacketCoreControlPlanesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a PacketCoreControlPlane.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param parameters Parameters supplied to the create or update packet core control plane operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    parameters: PacketCoreControlPlane,
    options?: PacketCoreControlPlanesCreateOrUpdateOptionalParams
  ): Promise<PacketCoreControlPlanesCreateOrUpdateResponse>;
  /**
   * Updates a PacketCoreControlPlane update tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param packetCoreControlPlaneName The name of the packet core control plane.
   * @param parameters Parameters supplied to update PacketCoreControlPlane tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    packetCoreControlPlaneName: string,
    parameters: TagsObject,
    options?: PacketCoreControlPlanesUpdateTagsOptionalParams
  ): Promise<PacketCoreControlPlanesUpdateTagsResponse>;
}
