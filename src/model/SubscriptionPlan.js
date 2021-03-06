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
    root.InfusionsoftRestApi.SubscriptionPlan = factory(root.InfusionsoftRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SubscriptionPlan model module.
   * @module model/SubscriptionPlan
   * @version V1.0
   */

  /**
   * Constructs a new <code>SubscriptionPlan</code>.
   * @alias module:model/SubscriptionPlan
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SubscriptionPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionPlan} obj Optional instance to populate.
   * @return {module:model/SubscriptionPlan} The populated <code>SubscriptionPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('cycle'))
        obj.cycle = ApiClient.convertToType(data['cycle'], 'Number');
      if (data.hasOwnProperty('frequency'))
        obj.frequency = ApiClient.convertToType(data['frequency'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('number_of_cycles'))
        obj.numberOfCycles = ApiClient.convertToType(data['number_of_cycles'], 'Number');
      if (data.hasOwnProperty('plan_price'))
        obj.planPrice = ApiClient.convertToType(data['plan_price'], 'Number');
      if (data.hasOwnProperty('subscription_plan_index'))
        obj.subscriptionPlanIndex = ApiClient.convertToType(data['subscription_plan_index'], 'Number');
      if (data.hasOwnProperty('subscription_plan_name'))
        obj.subscriptionPlanName = ApiClient.convertToType(data['subscription_plan_name'], 'String');
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {Number} cycle
   */
  exports.prototype.cycle = undefined;

  /**
   * @member {Number} frequency
   */
  exports.prototype.frequency = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} numberOfCycles
   */
  exports.prototype.numberOfCycles = undefined;

  /**
   * @member {Number} planPrice
   */
  exports.prototype.planPrice = undefined;

  /**
   * @member {Number} subscriptionPlanIndex
   */
  exports.prototype.subscriptionPlanIndex = undefined;

  /**
   * @member {String} subscriptionPlanName
   */
  exports.prototype.subscriptionPlanName = undefined;

  return exports;

}));
