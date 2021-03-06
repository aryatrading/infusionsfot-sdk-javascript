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
    root.InfusionsoftRestApi.FaxNumber = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FaxNumber model module.
   * @module model/FaxNumber
   * @version V1.0
   */

  /**
   * Constructs a new <code>FaxNumber</code>.
   * @alias module:model/FaxNumber
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>FaxNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FaxNumber} obj Optional instance to populate.
   * @return {module:model/FaxNumber} The populated <code>FaxNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field'))
        obj.field = ApiClient.convertToType(data['field'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/FaxNumber.FieldEnum} field
   */
  exports.prototype.field = undefined;

  /**
   * @member {String} _number
   */
  exports.prototype._number = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>field</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FieldEnum = {
    /**
     * value: "FAX1"
     * @const
     */
    fAX1: "FAX1",

    /**
     * value: "FAX2"
     * @const
     */
    fAX2: "FAX2"
  };

  return exports;

}));
