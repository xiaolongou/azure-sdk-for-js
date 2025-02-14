/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is available. */
  message?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** List of Accounts. */
export interface AccountList {
  /** The link used to get the next page of Accounts list. */
  nextLink?: string;
  /** List of Accounts. */
  value?: Account[];
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {
  /**
   * The ARM identifier for Private Endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export interface Location {
  name?: string;
  /** Whether the location is primary or failover */
  role?: Role;
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
  type: ManagedServiceIdentityType;
  /** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. */
  userAssignedIdentities?: { [propertyName: string]: UserAssignedIdentity };
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /**
   * The principal ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** Request payload used to update an existing resource's tags. */
export interface TagUpdate {
  /** List of key value pairs that describe the resource. This will overwrite the existing tags. */
  tags?: { [propertyName: string]: string };
}

/** List of Instances. */
export interface InstanceList {
  /** The link used to get the next page of Instances list. */
  nextLink?: string;
  /** List of Instances. */
  value?: Instance[];
}

/** Device Update account integration with IoT Hub settings. */
export interface IotHubSettings {
  /** IoTHub resource ID */
  resourceId: string;
}

/** Customer-initiated diagnostic log collection storage properties */
export interface DiagnosticStorageProperties {
  /** Authentication Type */
  authenticationType: AuthenticationType;
  /** ConnectionString of the diagnostic storage account */
  connectionString?: string;
  /** ResourceId of the diagnostic storage account */
  resourceId: string;
}

/** List of private endpoint connection associated with the specified storage account */
export interface PrivateEndpointConnectionListResult {
  /** Array of private endpoint connections */
  value?: PrivateEndpointConnection[];
}

/** The available private link resources for an Account */
export interface PrivateLinkResourceListResult {
  /** The list of available private link resources for an Account */
  value?: GroupInformation[];
  /** The URI that can be used to request the next list of private link resources. */
  nextLink?: string;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource Private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The available private endpoint connection proxies for an Account (not to be used by anyone, here because of ARM requirements) */
export interface PrivateEndpointConnectionProxyListResult {
  /** The list of available private endpoint connection proxies for an Account */
  value?: PrivateEndpointConnectionProxy[];
  /** The URI that can be used to request the next list of private endpoint connection proxies. */
  nextLink?: string;
}

/** Private endpoint connection proxy object properties. */
export interface PrivateEndpointConnectionProxyProperties {
  /**
   * ETag from NRP.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly eTag?: string;
  /** Remote private endpoint details. */
  remotePrivateEndpoint?: RemotePrivateEndpoint;
  /** Operation status. */
  status?: string;
}

/** Remote private endpoint details. */
export interface RemotePrivateEndpoint {
  /** Remote endpoint resource ID. */
  id?: string;
  /** ARM location of the remote private endpoint. */
  location?: string;
  /** Original subscription ID needed by Microsoft.Network. */
  immutableSubscriptionId?: string;
  /** Original resource ID needed by Microsoft.Network. */
  immutableResourceId?: string;
  /** Virtual network traffic tag. */
  vnetTrafficTag?: string;
  /** List of private link service connections that need manual approval. */
  manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
  /** List of automatically approved private link service connections. */
  privateLinkServiceConnections?: PrivateLinkServiceConnection[];
  /** List of private link service proxies. */
  privateLinkServiceProxies?: PrivateLinkServiceProxy[];
  /** List of connection details. */
  connectionDetails?: ConnectionDetails[];
}

/** Private link service connection details. */
export interface PrivateLinkServiceConnection {
  /** Private link service connection name. */
  name?: string;
  /** List of group IDs. */
  groupIds?: string[];
  /** Request message. */
  requestMessage?: string;
}

/** Private link service proxy details. */
export interface PrivateLinkServiceProxy {
  /** NRP resource ID. */
  id?: string;
  /** Remote private link service connection state */
  remotePrivateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /** Remote private endpoint connection details. */
  remotePrivateEndpointConnection?: PrivateLinkServiceProxyRemotePrivateEndpointConnection;
  /** Group connectivity information. */
  groupConnectivityInformation?: GroupConnectivityInformation[];
}

/** Remote private endpoint connection details. */
export interface RemotePrivateEndpointConnection {
  /**
   * Remote private endpoint connection ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** Group connectivity details. */
export interface GroupConnectivityInformation {
  /**
   * Group ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * Member name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly memberName?: string;
  /** List of customer visible FQDNs. */
  customerVisibleFqdns?: string[];
  /**
   * Internal FQDN.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly internalFqdn?: string;
  /** Redirect map ID. */
  redirectMapId?: string;
  /** PrivateLinkService ARM region. */
  privateLinkServiceArmRegion?: string;
}

/** Private endpoint connection proxy object properties. */
export interface ConnectionDetails {
  /**
   * Connection details ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Private IP address.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateIpAddress?: string;
  /**
   * Link ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly linkIdentifier?: string;
  /**
   * Group ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * Member name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly memberName?: string;
}

/** Private endpoint update details. */
export interface PrivateEndpointUpdate {
  /** Remote endpoint resource ID. */
  id?: string;
  /** ARM location of the remote private endpoint. */
  location?: string;
  /** Original subscription ID needed by Microsoft.Network. */
  immutableSubscriptionId?: string;
  /** Original resource ID needed by Microsoft.Network. */
  immutableResourceId?: string;
  /** Virtual network traffic tag. */
  vnetTrafficTag?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** The Private Endpoint Connection resource. */
export type PrivateEndpointConnection = Resource & {
  /** The resource of private end point. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
  /** Array of group IDs. */
  groupIds?: string[];
  /**
   * The provisioning state of the private endpoint connection resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export type ProxyResource = Resource;

/** Request payload used to update and existing Accounts. */
export type AccountUpdate = TagUpdate & {
  /** The type of identity used for the resource. */
  identity?: ManagedServiceIdentity;
  /** The geo-location where the resource lives */
  location?: string;
};

/** The properties for a group information object */
export type GroupInformationProperties = PrivateLinkResourceProperties & {
  /**
   * The provisioning state of private link group ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: GroupIdProvisioningState;
};

/** Private endpoint connection proxy details. */
export type PrivateEndpointConnectionProxy = ProxyResource &
  PrivateEndpointConnectionProxyProperties & {
    /**
     * The provisioning state of the private endpoint connection proxy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: PrivateEndpointConnectionProxyProvisioningState;
  };

/** Remote private endpoint connection details. */
export type PrivateLinkServiceProxyRemotePrivateEndpointConnection = RemotePrivateEndpointConnection;

/** Device Update account details. */
export type Account = TrackedResource & {
  /** The type of identity used for the resource. */
  identity?: ManagedServiceIdentity;
  /**
   * Provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * API host name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hostName?: string;
  /** Whether or not public network access is allowed for the account. */
  publicNetworkAccess?: PublicNetworkAccess;
  /** List of private endpoint connections associated with the account. */
  privateEndpointConnections?: PrivateEndpointConnection[];
  /** Device Update Sku */
  sku?: Sku;
  /**
   * Device Update account primary and failover location details
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly locations?: Location[];
};

/** Device Update instance details. */
export type Instance = TrackedResource & {
  /**
   * Provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Parent Device Update Account name which Instance belongs to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly accountName?: string;
  /** List of IoT Hubs associated with the account. */
  iotHubs?: IotHubSettings[];
  /** Enables or Disables the diagnostic logs collection */
  enableDiagnostics?: boolean;
  /** Customer-initiated diagnostic log collection storage properties */
  diagnosticStorageProperties?: DiagnosticStorageProperties;
};

/** The group information for creating a private endpoint on an Account */
export type GroupInformation = ProxyResource & {
  /**
   * The private link resource group id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * The private link resource required member names.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /** The private link resource Private link DNS zone name. */
  requiredZoneNames?: string[];
  /**
   * The provisioning state of private link group ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: GroupIdProvisioningState;
};

/** Known values of {@link CheckNameAvailabilityReason} that the service accepts. */
export enum KnownCheckNameAvailabilityReason {
  Invalid = "Invalid",
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for CheckNameAvailabilityReason. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type CheckNameAvailabilityReason = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Succeeded = "Succeeded",
  Deleted = "Deleted",
  Failed = "Failed",
  Canceled = "Canceled",
  Accepted = "Accepted",
  Creating = "Creating"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Deleted** \
 * **Failed** \
 * **Canceled** \
 * **Accepted** \
 * **Creating**
 */
export type ProvisioningState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link PrivateEndpointServiceConnectionStatus} that the service accepts. */
export enum KnownPrivateEndpointServiceConnectionStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected"
}

/**
 * Defines values for PrivateEndpointServiceConnectionStatus. \
 * {@link KnownPrivateEndpointServiceConnectionStatus} can be used interchangeably with PrivateEndpointServiceConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Pending** \
 * **Approved** \
 * **Rejected**
 */
export type PrivateEndpointServiceConnectionStatus = string;

/** Known values of {@link PrivateEndpointConnectionProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProvisioningState {
  Succeeded = "Succeeded",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProvisioningState} can be used interchangeably with PrivateEndpointConnectionProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link Sku} that the service accepts. */
export enum KnownSku {
  Free = "Free",
  Standard = "Standard"
}

/**
 * Defines values for Sku. \
 * {@link KnownSku} can be used interchangeably with Sku,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Free** \
 * **Standard**
 */
export type Sku = string;

/** Known values of {@link Role} that the service accepts. */
export enum KnownRole {
  Primary = "Primary",
  Failover = "Failover"
}

/**
 * Defines values for Role. \
 * {@link KnownRole} can be used interchangeably with Role,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Primary** \
 * **Failover**
 */
export type Role = string;

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  None = "None",
  SystemAssigned = "SystemAssigned",
  UserAssigned = "UserAssigned",
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned"
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** Known values of {@link AuthenticationType} that the service accepts. */
export enum KnownAuthenticationType {
  KeyBased = "KeyBased"
}

/**
 * Defines values for AuthenticationType. \
 * {@link KnownAuthenticationType} can be used interchangeably with AuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **KeyBased**
 */
export type AuthenticationType = string;

/** Known values of {@link GroupIdProvisioningState} that the service accepts. */
export enum KnownGroupIdProvisioningState {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled"
}

/**
 * Defines values for GroupIdProvisioningState. \
 * {@link KnownGroupIdProvisioningState} can be used interchangeably with GroupIdProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type GroupIdProvisioningState = string;

/** Known values of {@link PrivateEndpointConnectionProxyProvisioningState} that the service accepts. */
export enum KnownPrivateEndpointConnectionProxyProvisioningState {
  Succeeded = "Succeeded",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed"
}

/**
 * Defines values for PrivateEndpointConnectionProxyProvisioningState. \
 * {@link KnownPrivateEndpointConnectionProxyProvisioningState} can be used interchangeably with PrivateEndpointConnectionProxyProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Creating** \
 * **Deleting** \
 * **Failed**
 */
export type PrivateEndpointConnectionProxyProvisioningState = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  User = "user",
  System = "system",
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface CheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the checkNameAvailability operation. */
export type CheckNameAvailabilityOperationResponse = CheckNameAvailabilityResponse;

/** Optional parameters. */
export interface AccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listBySubscription operation. */
export type AccountsListBySubscriptionResponse = AccountList;

/** Optional parameters. */
export interface AccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByResourceGroup operation. */
export type AccountsListByResourceGroupResponse = AccountList;

/** Optional parameters. */
export interface AccountsGetOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the get operation. */
export type AccountsGetResponse = Account;

/** Optional parameters. */
export interface AccountsHeadOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the head operation. */
export type AccountsHeadResponse = {
  body: boolean;
};

/** Optional parameters. */
export interface AccountsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type AccountsCreateResponse = Account;

/** Optional parameters. */
export interface AccountsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface AccountsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AccountsUpdateResponse = Account;

/** Optional parameters. */
export interface AccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listBySubscriptionNext operation. */
export type AccountsListBySubscriptionNextResponse = AccountList;

/** Optional parameters. */
export interface AccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByResourceGroupNext operation. */
export type AccountsListByResourceGroupNextResponse = AccountList;

/** Optional parameters. */
export interface InstancesListByAccountOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByAccount operation. */
export type InstancesListByAccountResponse = InstanceList;

/** Optional parameters. */
export interface InstancesGetOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the get operation. */
export type InstancesGetResponse = Instance;

/** Optional parameters. */
export interface InstancesHeadOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the head operation. */
export type InstancesHeadResponse = {
  body: boolean;
};

/** Optional parameters. */
export interface InstancesCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type InstancesCreateResponse = Instance;

/** Optional parameters. */
export interface InstancesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface InstancesUpdateOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the update operation. */
export type InstancesUpdateResponse = Instance;

/** Optional parameters. */
export interface InstancesListByAccountNextOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByAccountNext operation. */
export type InstancesListByAccountNextResponse = InstanceList;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByAccountOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByAccount operation. */
export type PrivateEndpointConnectionsListByAccountResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateLinkResourcesListByAccountOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByAccount operation. */
export type PrivateLinkResourcesListByAccountResponse = PrivateLinkResourceListResult;

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = GroupInformation;

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesListByAccountOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listByAccount operation. */
export type PrivateEndpointConnectionProxiesListByAccountResponse = PrivateEndpointConnectionProxyListResult;

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesValidateOptionalParams
  extends coreClient.OperationOptions { }

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOptionalParams
  extends coreClient.OperationOptions { }

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesGetOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionProxiesGetResponse = PrivateEndpointConnectionProxy;

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionProxiesCreateOrUpdateResponse = PrivateEndpointConnectionProxy;

/** Optional parameters. */
export interface PrivateEndpointConnectionProxiesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions { }

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface DeviceUpdateOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
