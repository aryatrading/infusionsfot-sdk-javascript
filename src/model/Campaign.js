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
    define(['ApiClient', 'model/Goal', 'model/Sequence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Goal'), require('./Sequence'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.Campaign = factory(root.InfusionsoftRestApi.ApiClient, root.InfusionsoftRestApi.Goal, root.InfusionsoftRestApi.Sequence);
  }
}(this, function(ApiClient, Goal, Sequence) {
  'use strict';

  /**
   * The Campaign model module.
   * @module model/Campaign
   * @version V1.0
   */

  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:model/Campaign
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Campaign} obj Optional instance to populate.
   * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_contact_count'))
        obj.activeContactCount = ApiClient.convertToType(data['active_contact_count'], 'Number');
      if (data.hasOwnProperty('completed_contact_count'))
        obj.completedContactCount = ApiClient.convertToType(data['completed_contact_count'], 'Number');
      if (data.hasOwnProperty('date_created'))
        obj.dateCreated = ApiClient.convertToType(data['date_created'], 'Date');
      if (data.hasOwnProperty('error_message'))
        obj.errorMessage = ApiClient.convertToType(data['error_message'], 'String');
      if (data.hasOwnProperty('goals'))
        obj.goals = ApiClient.convertToType(data['goals'], [Goal]);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('published_date'))
        obj.publishedDate = ApiClient.convertToType(data['published_date'], 'Date');
      if (data.hasOwnProperty('published_status'))
        obj.publishedStatus = ApiClient.convertToType(data['published_status'], 'Boolean');
      if (data.hasOwnProperty('published_time_zone'))
        obj.publishedTimeZone = ApiClient.convertToType(data['published_time_zone'], 'String');
      if (data.hasOwnProperty('sequences'))
        obj.sequences = ApiClient.convertToType(data['sequences'], [Sequence]);
      if (data.hasOwnProperty('time_zone'))
        obj.timeZone = ApiClient.convertToType(data['time_zone'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} activeContactCount
   */
  exports.prototype.activeContactCount = undefined;

  /**
   * @member {Number} completedContactCount
   */
  exports.prototype.completedContactCount = undefined;

  /**
   * @member {Date} dateCreated
   */
  exports.prototype.dateCreated = undefined;

  /**
   * @member {String} errorMessage
   */
  exports.prototype.errorMessage = undefined;

  /**
   * @member {Array.<module:model/Goal>} goals
   */
  exports.prototype.goals = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Date} publishedDate
   */
  exports.prototype.publishedDate = undefined;

  /**
   * @member {Boolean} publishedStatus
   */
  exports.prototype.publishedStatus = undefined;

  /**
   * @member {String} publishedTimeZone
   */
  exports.prototype.publishedTimeZone = undefined;

  /**
   * @member {Array.<module:model/Sequence>} sequences
   */
  exports.prototype.sequences = undefined;

  /**
   * @member {String} timeZone
   */
  exports.prototype.timeZone = undefined;

  return exports;

}));
