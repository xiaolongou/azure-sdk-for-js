/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DeviceUpdate } = require("@azure/arm-deviceupdate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to (INTERNAL - DO NOT USE) Validates a private endpoint connection proxy object.
 *
 * @summary (INTERNAL - DO NOT USE) Validates a private endpoint connection proxy object.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/preview/2022-04-01-preview/examples/PrivateEndpointConnectionProxies/PrivateEndpointConnectionProxy_Validate.json
 */
async function privateEndpointConnectionProxyValidate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const privateEndpointConnectionProxyId = "peexample01";
  const privateEndpointConnectionProxy = {
    remotePrivateEndpoint: {
      id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{privateEndpointConnectionProxyId}",
      immutableResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{peName}",
      immutableSubscriptionId: "00000000-0000-0000-0000-000000000000",
      location: "westus2",
      manualPrivateLinkServiceConnections: [
        {
          name: "{privateEndpointConnectionProxyId}",
          groupIds: ["DeviceUpdate"],
          requestMessage: "Please approve my connection, thanks.",
        },
      ],
      privateLinkServiceProxies: [
        {
          groupConnectivityInformation: [],
          id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{privateEndpointConnectionProxyId}/privateLinkServiceProxies/{privateEndpointConnectionProxyId}",
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.privateEndpointConnectionProxies.validate(
    resourceGroupName,
    accountName,
    privateEndpointConnectionProxyId,
    privateEndpointConnectionProxy
  );
  console.log(result);
}

privateEndpointConnectionProxyValidate().catch(console.error);
