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
    define(['ApiClient', 'model/Opportunity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Opportunity'));
  } else {
    // Browser globals (root is window)
    if (!root.InfusionsoftRestApi) {
      root.InfusionsoftRestApi = {};
    }
    root.InfusionsoftRestApi.OpportunityList = factory(root.InfusionsoftRestApi.ApiClient, root.InfusionsoftRestApi.Opportunity);
  }
}(this, function(ApiClient, Opportunity) {
  'use strict';

  /**
   * The OpportunityList model module.
   * @module model/OpportunityList
   * @version V1.0
   */

  /**
   * Constructs a new <code>OpportunityList</code>.
   * @alias module:model/OpportunityList
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OpportunityList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpportunityList} obj Optional instance to populate.
   * @return {module:model/OpportunityList} The populated <code>OpportunityList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
      if (data.hasOwnProperty('opportunities'))
        obj.opportunities = ApiClient.convertToType(data['opportunities'], [Opportunity]);
      if (data.hasOwnProperty('previous'))
        obj.previous = ApiClient.convertToType(data['previous'], 'String');
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
   * @member {Array.<module:model/Opportunity>} opportunities
   */
  exports.prototype.opportunities = undefined;

  /**
   * @member {String} previous
   */
  exports.prototype.previous = undefined;

  return exports;

}));
