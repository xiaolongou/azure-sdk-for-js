/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const DataPolicyManifest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPolicyManifest",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      namespaces: {
        serializedName: "properties.namespaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      policyMode: {
        serializedName: "properties.policyMode",
        type: {
          name: "String"
        }
      },
      isBuiltInOnly: {
        serializedName: "properties.isBuiltInOnly",
        type: {
          name: "Boolean"
        }
      },
      resourceTypeAliases: {
        serializedName: "properties.resourceTypeAliases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceTypeAliases"
            }
          }
        }
      },
      effects: {
        serializedName: "properties.effects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataEffect"
            }
          }
        }
      },
      fieldValues: {
        serializedName: "properties.fieldValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      standard: {
        serializedName: "properties.resourceFunctions.standard",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      custom: {
        serializedName: "properties.resourceFunctions.custom",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataManifestCustomResourceFunctionDefinition"
            }
          }
        }
      }
    }
  }
};

export const ResourceTypeAliases: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceTypeAliases",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      aliases: {
        serializedName: "aliases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Alias"
            }
          }
        }
      }
    }
  }
};

export const Alias: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Alias",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      paths: {
        serializedName: "paths",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AliasPath"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["NotSpecified", "PlainText", "Mask"]
        }
      },
      defaultPath: {
        serializedName: "defaultPath",
        type: {
          name: "String"
        }
      },
      defaultPattern: {
        serializedName: "defaultPattern",
        type: {
          name: "Composite",
          className: "AliasPattern"
        }
      },
      defaultMetadata: {
        serializedName: "defaultMetadata",
        type: {
          name: "Composite",
          className: "AliasPathMetadata"
        }
      }
    }
  }
};

export const AliasPath: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPath",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      pattern: {
        serializedName: "pattern",
        type: {
          name: "Composite",
          className: "AliasPattern"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "AliasPathMetadata"
        }
      }
    }
  }
};

export const AliasPattern: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPattern",
    modelProperties: {
      phrase: {
        serializedName: "phrase",
        type: {
          name: "String"
        }
      },
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["NotSpecified", "Extract"]
        }
      }
    }
  }
};

export const AliasPathMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPathMetadata",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataEffect: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataEffect",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      detailsSchema: {
        serializedName: "detailsSchema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataManifestCustomResourceFunctionDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataManifestCustomResourceFunctionDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      fullyQualifiedResourceType: {
        serializedName: "fullyQualifiedResourceType",
        type: {
          name: "String"
        }
      },
      defaultProperties: {
        serializedName: "defaultProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowCustomProperties: {
        serializedName: "allowCustomProperties",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataPolicyManifestListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataPolicyManifestListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataPolicyManifest"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicyAssignment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignment",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      policyDefinitionId: {
        serializedName: "properties.policyDefinitionId",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "properties.scope",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      notScopes: {
        serializedName: "properties.notScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterValuesValue" }
          }
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enforcementMode: {
        defaultValue: "Default",
        serializedName: "properties.enforcementMode",
        type: {
          name: "String"
        }
      },
      nonComplianceMessages: {
        serializedName: "properties.nonComplianceMessages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NonComplianceMessage"
            }
          }
        }
      }
    }
  }
};

export const ParameterValuesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParameterValuesValue",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const NonComplianceMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NonComplianceMessage",
    modelProperties: {
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["SystemAssigned", "UserAssigned", "None"]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentitiesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const PolicyAssignmentUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignmentUpdate",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const PolicyAssignmentListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignmentListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyAssignment"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicyDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyDefinition",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      policyType: {
        serializedName: "properties.policyType",
        type: {
          name: "String"
        }
      },
      mode: {
        defaultValue: "Indexed",
        serializedName: "properties.mode",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      policyRule: {
        serializedName: "properties.policyRule",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterDefinitionsValue" }
          }
        }
      }
    }
  }
};

export const ParameterDefinitionsValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParameterDefinitionsValue",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      allowedValues: {
        serializedName: "allowedValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ParameterDefinitionsValueMetadata"
        }
      }
    }
  }
};

export const ParameterDefinitionsValueMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParameterDefinitionsValueMetadata",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      strongType: {
        serializedName: "strongType",
        type: {
          name: "String"
        }
      },
      assignPermissions: {
        serializedName: "assignPermissions",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const PolicyDefinitionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicySetDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicySetDefinition",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      policyType: {
        serializedName: "properties.policyType",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterDefinitionsValue" }
          }
        }
      },
      policyDefinitions: {
        serializedName: "properties.policyDefinitions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinitionReference"
            }
          }
        }
      },
      policyDefinitionGroups: {
        serializedName: "properties.policyDefinitionGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinitionGroup"
            }
          }
        }
      }
    }
  }
};

export const PolicyDefinitionReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyDefinitionReference",
    modelProperties: {
      policyDefinitionId: {
        serializedName: "policyDefinitionId",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterValuesValue" }
          }
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      groupNames: {
        serializedName: "groupNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PolicyDefinitionGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyDefinitionGroup",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      additionalMetadataId: {
        serializedName: "additionalMetadataId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicySetDefinitionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicySetDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicySetDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicyExemption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyExemption",
    modelProperties: {
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      policyAssignmentId: {
        serializedName: "properties.policyAssignmentId",
        required: true,
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceIds: {
        serializedName: "properties.policyDefinitionReferenceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      exemptionCategory: {
        serializedName: "properties.exemptionCategory",
        required: true,
        type: {
          name: "String"
        }
      },
      expiresOn: {
        serializedName: "properties.expiresOn",
        type: {
          name: "DateTime"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PolicyExemptionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyExemptionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyExemption"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
