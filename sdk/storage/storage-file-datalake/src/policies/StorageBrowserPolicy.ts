// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import {
  BaseRequestPolicy,
  HttpOperationResponse,
  isNode,
  RequestPolicy,
  RequestPolicyOptions,
  WebResource,
} from "@azure/core-http";

import { HeaderConstants, UrlConstants } from "../utils/constants";
import { setURLParameter } from "../utils/utils.common";

/**
 * StorageBrowserPolicy will handle differences between Node.js and browser runtime, including:
 *
 * 1. Browsers cache GET/HEAD requests by adding conditional headers such as 'IF_MODIFIED_SINCE'.
 * StorageBrowserPolicy is a policy used to add a timestamp query to GET/HEAD request URL
 * thus avoid the browser cache.
 *
 * 2. Remove cookie header for security
 *
 * 3. Remove content-length header to avoid browsers warning
 */
export class StorageBrowserPolicy extends BaseRequestPolicy {
  /**
   * Creates an instance of StorageBrowserPolicy.
   * @param nextPolicy -
   * @param options -
   */

  // The base class has a protected constructor. Adding a public one to enable constructing of this class.
  /* eslint-disable-next-line @typescript-eslint/no-useless-constructor*/
  constructor(nextPolicy: RequestPolicy, options: RequestPolicyOptions) {
    super(nextPolicy, options);
  }

  /**
   * Sends out request.
   *
   * @param request -
   */
  public async sendRequest(request: WebResource): Promise<HttpOperationResponse> {
    if (isNode) {
      return this._nextPolicy.sendRequest(request);
    }

    if (request.method.toUpperCase() === "GET" || request.method.toUpperCase() === "HEAD") {
      request.url = setURLParameter(
        request.url,
        UrlConstants.Parameters.FORCE_BROWSER_NO_CACHE,
        new Date().getTime().toString()
      );
    }

    request.headers.remove(HeaderConstants.COOKIE);

    // According to XHR standards, content-length should be fully controlled by browsers
    request.headers.remove(HeaderConstants.CONTENT_LENGTH);

    // DFS flush file API requires content-length=0, workaround to force browsers add content-length header
    if (request.method === "PATCH" && request.body === undefined) {
      request.body = "";
    }

    return this._nextPolicy.sendRequest(request);
  }
}
