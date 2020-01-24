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
    root.InfusionsoftRestApi.OrderContactDetails = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderContactDetails model module.
   * @module model/OrderContactDetails
   * @version V1.0
   */

  /**
   * Constructs a new <code>OrderContactDetails</code>.
   * @alias module:model/OrderContactDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderContactDetails} obj Optional instance to populate.
   * @return {module:model/OrderContactDetails} The populated <code>OrderContactDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('job_title'))
        obj.jobTitle = ApiClient.convertToType(data['job_title'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} jobTitle
   */
  exports.prototype.jobTitle = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  return exports;

}));
