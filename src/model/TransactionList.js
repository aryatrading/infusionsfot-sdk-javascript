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
    define(['ApiClient', 'model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.TransactionList = factory(root.InfusionsoftRestApi.ApiClient, root.InfusionsoftRestApi.Transaction);
  }
}(this, function(ApiClient, Transaction) {
  'use strict';

  /**
   * The TransactionList model module.
   * @module model/TransactionList
   * @version V1.0
   */

  /**
   * Constructs a new <code>TransactionList</code>.
   * @alias module:model/TransactionList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TransactionList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionList} obj Optional instance to populate.
   * @return {module:model/TransactionList} The populated <code>TransactionList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
      if (data.hasOwnProperty('previous'))
        obj.previous = ApiClient.convertToType(data['previous'], 'String');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [Transaction]);
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype.count = undefined;

  /**
   * @member {String} next
   */
  exports.prototype.next = undefined;

  /**
   * @member {String} previous
   */
  exports.prototype.previous = undefined;

  /**
   * @member {Array.<module:model/Transaction>} transactions
   */
  exports.prototype.transactions = undefined;

  return exports;

}));