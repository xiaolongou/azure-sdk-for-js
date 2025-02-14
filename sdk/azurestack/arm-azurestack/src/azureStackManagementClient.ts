/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  CloudManifestFileImpl,
  CustomerSubscriptionsImpl,
  ProductsImpl,
  RegistrationsImpl,
  LinkedSubscriptionsImpl
} from "./operations";
import {
  Operations,
  CloudManifestFile,
  CustomerSubscriptions,
  Products,
  Registrations,
  LinkedSubscriptions
} from "./operationsInterfaces";
import { AzureStackManagementClientOptionalParams } from "./models";

export class AzureStackManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AzureStackManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureStackManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureStackManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-azurestack/3.0.0-beta.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2020-06-01-preview";
    this.operations = new OperationsImpl(this);
    this.cloudManifestFile = new CloudManifestFileImpl(this);
    this.customerSubscriptions = new CustomerSubscriptionsImpl(this);
    this.products = new ProductsImpl(this);
    this.registrations = new RegistrationsImpl(this);
    this.linkedSubscriptions = new LinkedSubscriptionsImpl(this);
  }

  operations: Operations;
  cloudManifestFile: CloudManifestFile;
  customerSubscriptions: CustomerSubscriptions;
  products: Products;
  registrations: Registrations;
  linkedSubscriptions: LinkedSubscriptions;
}
