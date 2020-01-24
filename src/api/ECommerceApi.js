/*
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Order', 'model/OrderList', 'model/Transaction', 'model/TransactionList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Order'), require('../model/OrderList'), require('../model/Transaction'), require('../model/TransactionList'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.ECommerceApi = factory(root.InfusionsoftRestApi.ApiClient, root.InfusionsoftRestApi.Order, root.InfusionsoftRestApi.OrderList, root.InfusionsoftRestApi.Transaction, root.InfusionsoftRestApi.TransactionList);
  }
}(this, function(ApiClient, Order, OrderList, Transaction, TransactionList) {
  'use strict';

  /**
   * ECommerce service.
   * @module api/ECommerceApi
   * @version V1.0
   */

  /**
   * Constructs a new ECommerceApi. 
   * @alias module:api/ECommerceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the loadOrderUsingGET operation.
     * @callback module:api/ECommerceApi~loadOrderUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Order
     * Retrieves a single order
     * @param {Number} orderId orderId
     * @param {module:api/ECommerceApi~loadOrderUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    this.loadOrderUsingGET = function(orderId, callback) {
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling loadOrderUsingGET");
      }


      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Order;

      return this.apiClient.callApi(
        '/orders/{orderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET1 operation.
     * @callback module:api/ECommerceApi~searchUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Orders
     * Retrieves a list of all orders using the specified search criteria
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. `2017-01-01T22:17:59.039Z`
     * @param {String} opts.until Date to search to ex. `2017-01-01T22:17:59.039Z`
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Boolean} opts.paid Sets paid status of items to return
     * @param {String} opts.order Attribute to order items by
     * @param {Number} opts.contactId Returns orders for the provided contact id
     * @param {Number} opts.productId Returns orders containing the provided product id
     * @param {module:api/ECommerceApi~searchUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderList}
     */
    this.searchUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'paid': opts['paid'],
        'order': opts['order'],
        'contact_id': opts['contactId'],
        'product_id': opts['productId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OrderList;

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET2 operation.
     * @callback module:api/ECommerceApi~searchUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Transactions
     * Retrieves a list transactions for a given contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. `2017-01-01T22:17:59.039Z`
     * @param {String} opts.until Date to search to ex. `2017-01-01T22:17:59.039Z`
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Number} opts.contactId Returns transactions for the provided contact id
     * @param {module:api/ECommerceApi~searchUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionList}
     */
    this.searchUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'contact_id': opts['contactId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransactionList;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionByIdUsingGET operation.
     * @callback module:api/ECommerceApi~transactionByIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Transaction
     * Retrieves a single transaction
     * @param {Number} transactionId transactionId
     * @param {module:api/ECommerceApi~transactionByIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    this.transactionByIdUsingGET = function(transactionId, callback) {
      var postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling transactionByIdUsingGET");
      }


      var pathParams = {
        'transactionId': transactionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Transaction;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transactionsForOrderUsingGET operation.
     * @callback module:api/ECommerceApi~transactionsForOrderUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Order Transactions
     * Retrieves a list of all transactions on a given order using the specified search criteria
     * @param {String} orderId orderId
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Date to start searching from ex. `2017-01-01T22:17:59.039Z`
     * @param {String} opts.until Date to search to ex. `2017-01-01T22:17:59.039Z`
     * @param {Number} opts.limit Sets a total of items to return
     * @param {Number} opts.offset Sets a beginning range of items to return
     * @param {Number} opts.contactId Returns transactions for the provided contact id
     * @param {module:api/ECommerceApi~transactionsForOrderUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionList}
     */
    this.transactionsForOrderUsingGET = function(orderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling transactionsForOrderUsingGET");
      }


      var pathParams = {
        'orderId': orderId
      };
      var queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'contact_id': opts['contactId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransactionList;

      return this.apiClient.callApi(
        '/orders/{orderId}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));