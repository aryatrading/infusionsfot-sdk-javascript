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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.CustomFieldOptionItem = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CustomFieldOptionItem model module.
   * @module model/CustomFieldOptionItem
   * @version V1.0
   */

  /**
   * Constructs a new <code>CustomFieldOptionItem</code>.
   * @alias module:model/CustomFieldOptionItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CustomFieldOptionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldOptionItem} obj Optional instance to populate.
   * @return {module:model/CustomFieldOptionItem} The populated <code>CustomFieldOptionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} label
   */
  exports.prototype.label = undefined;

  return exports;

}));
