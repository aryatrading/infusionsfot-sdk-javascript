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
    root.InfusionsoftRestApi.Item = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Item model module.
   * @module model/Item
   * @version V1.0
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('next_item_id'))
        obj.nextItemId = ApiClient.convertToType(data['next_item_id'], 'Number');
      if (data.hasOwnProperty('previous_item_id'))
        obj.previousItemId = ApiClient.convertToType(data['previous_item_id'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} nextItemId
   */
  exports.prototype.nextItemId = undefined;

  /**
   * @member {Number} previousItemId
   */
  exports.prototype.previousItemId = undefined;

  /**
   * @member {module:model/Item.TypeEnum} type
   */
  exports.prototype.type = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "NULL"
     * @const
     */
    NULL: "NULL",

    /**
     * value: "Start"
     * @const
     */
    start: "Start",

    /**
     * value: "Wait"
     * @const
     */
    wait: "Wait",

    /**
     * value: "DelayTimer"
     * @const
     */
    delayTimer: "DelayTimer",

    /**
     * value: "ContactTimer"
     * @const
     */
    contactTimer: "ContactTimer",

    /**
     * value: "DateTimer"
     * @const
     */
    dateTimer: "DateTimer",

    /**
     * value: "Email"
     * @const
     */
    email: "Email",

    /**
     * value: "BardEmail"
     * @const
     */
    bardEmail: "BardEmail",

    /**
     * value: "EmailConfirm"
     * @const
     */
    emailConfirm: "EmailConfirm",

    /**
     * value: "Voice"
     * @const
     */
    voice: "Voice",

    /**
     * value: "Fax"
     * @const
     */
    fax: "Fax",

    /**
     * value: "Letter"
     * @const
     */
    letter: "Letter",

    /**
     * value: "Tag"
     * @const
     */
    tag: "Tag",

    /**
     * value: "Opportunity"
     * @const
     */
    opportunity: "Opportunity",

    /**
     * value: "Note"
     * @const
     */
    note: "Note",

    /**
     * value: "Task"
     * @const
     */
    task: "Task",

    /**
     * value: "Appointment"
     * @const
     */
    appointment: "Appointment",

    /**
     * value: "AssignOwner"
     * @const
     */
    assignOwner: "AssignOwner",

    /**
     * value: "FieldValue"
     * @const
     */
    fieldValue: "FieldValue",

    /**
     * value: "Fulfillment"
     * @const
     */
    fulfillment: "Fulfillment",

    /**
     * value: "Http"
     * @const
     */
    http: "Http",

    /**
     * value: "CustomerHub"
     * @const
     */
    customerHub: "CustomerHub",

    /**
     * value: "ActionSet"
     * @const
     */
    actionSet: "ActionSet"
  };

  return exports;

}));
