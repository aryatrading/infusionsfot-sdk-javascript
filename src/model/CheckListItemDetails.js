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
    root.InfusionsoftRestApi.CheckListItemDetails = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CheckListItemDetails model module.
   * @module model/CheckListItemDetails
   * @version V1.0
   */

  /**
   * Constructs a new <code>CheckListItemDetails</code>.
   * @alias module:model/CheckListItemDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckListItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckListItemDetails} obj Optional instance to populate.
   * @return {module:model/CheckListItemDetails} The populated <code>CheckListItemDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('done_date'))
        obj.doneDate = ApiClient.convertToType(data['done_date'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('instance_id'))
        obj.instanceId = ApiClient.convertToType(data['instance_id'], 'Number');
      if (data.hasOwnProperty('item_order'))
        obj.itemOrder = ApiClient.convertToType(data['item_order'], 'Number');
      if (data.hasOwnProperty('required'))
        obj.required = ApiClient.convertToType(data['required'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Date} doneDate
   */
  exports.prototype.doneDate = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} instanceId
   */
  exports.prototype.instanceId = undefined;

  /**
   * @member {Number} itemOrder
   */
  exports.prototype.itemOrder = undefined;

  /**
   * @member {Boolean} required
   */
  exports.prototype.required = undefined;

  return exports;

}));
