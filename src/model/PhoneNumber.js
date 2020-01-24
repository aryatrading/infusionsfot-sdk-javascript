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
    root.InfusionsoftRestApi.PhoneNumber = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PhoneNumber model module.
   * @module model/PhoneNumber
   * @version V1.0
   */

  /**
   * Constructs a new <code>PhoneNumber</code>.
   * @alias module:model/PhoneNumber
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneNumber} obj Optional instance to populate.
   * @return {module:model/PhoneNumber} The populated <code>PhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
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
   * @member {String} extension
   */
  exports.prototype.extension = undefined;

  /**
   * @member {module:model/PhoneNumber.FieldEnum} field
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
     * value: "PHONE1"
     * @const
     */
    pHONE1: "PHONE1",

    /**
     * value: "PHONE2"
     * @const
     */
    pHONE2: "PHONE2",

    /**
     * value: "PHONE3"
     * @const
     */
    pHONE3: "PHONE3",

    /**
     * value: "PHONE4"
     * @const
     */
    pHONE4: "PHONE4",

    /**
     * value: "PHONE5"
     * @const
     */
    pHONE5: "PHONE5"
  };

  return exports;

}));
