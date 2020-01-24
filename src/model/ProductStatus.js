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
    define(['ApiClient', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.ProductStatus = factory(root.InfusionsoftRestApi.ApiClient, root.InfusionsoftRestApi.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';

  /**
   * The ProductStatus model module.
   * @module model/ProductStatus
   * @version V1.0
   */

  /**
   * Constructs a new <code>ProductStatus</code>.
   * @alias module:model/ProductStatus
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProductStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductStatus} obj Optional instance to populate.
   * @return {module:model/ProductStatus} The populated <code>ProductStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('product'))
        obj.product = Product.constructFromObject(data['product']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/Product} product
   */
  exports.prototype.product = undefined;

  /**
   * @member {module:model/ProductStatus.StatusEnum} status
   */
  exports.prototype.status = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "CREATED"
     * @const
     */
    CREATED: "CREATED",

    /**
     * value: "UPDATED"
     * @const
     */
    UPDATED: "UPDATED",

    /**
     * value: "DELETED"
     * @const
     */
    DELETED: "DELETED"
  };

  return exports;

}));
