/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ApplicationGroupPatch,
  ApplicationGroupsUpdateOptionalParams,
  DesktopVirtualizationAPIClient
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update an applicationGroup.
 *
 * @summary Update an applicationGroup.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/preview/2021-09-03-preview/examples/ApplicationGroup_Update.json
 */
async function applicationGroupsUpdate() {
  const subscriptionId = "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName = "resourceGroup1";
  const applicationGroupName = "applicationGroup1";
  const applicationGroup: ApplicationGroupPatch = {
    description: "des1",
    friendlyName: "friendly",
    tags: { tag1: "value1", tag2: "value2" }
  };
  const options: ApplicationGroupsUpdateOptionalParams = { applicationGroup };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.applicationGroups.update(
    resourceGroupName,
    applicationGroupName,
    options
  );
  console.log(result);
}

applicationGroupsUpdate().catch(console.error);
