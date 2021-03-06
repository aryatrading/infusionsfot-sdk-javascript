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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InfusionsoftRestApi);
  }
}(this, function(expect, InfusionsoftRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SubscriptionPlan', function() {
      beforeEach(function() {
        instance = new InfusionsoftRestApi.SubscriptionPlan();
      });

      it('should create an instance of SubscriptionPlan', function() {
        // TODO: update the code to test SubscriptionPlan
        expect(instance).to.be.a(InfusionsoftRestApi.SubscriptionPlan);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property cycle (base name: "cycle")', function() {
        // TODO: update the code to test the property cycle
        expect(instance).to.have.property('cycle');
        // expect(instance.cycle).to.be(expectedValueLiteral);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfCycles (base name: "number_of_cycles")', function() {
        // TODO: update the code to test the property numberOfCycles
        expect(instance).to.have.property('numberOfCycles');
        // expect(instance.numberOfCycles).to.be(expectedValueLiteral);
      });

      it('should have the property planPrice (base name: "plan_price")', function() {
        // TODO: update the code to test the property planPrice
        expect(instance).to.have.property('planPrice');
        // expect(instance.planPrice).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionPlanIndex (base name: "subscription_plan_index")', function() {
        // TODO: update the code to test the property subscriptionPlanIndex
        expect(instance).to.have.property('subscriptionPlanIndex');
        // expect(instance.subscriptionPlanIndex).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionPlanName (base name: "subscription_plan_name")', function() {
        // TODO: update the code to test the property subscriptionPlanName
        expect(instance).to.have.property('subscriptionPlanName');
        // expect(instance.subscriptionPlanName).to.be(expectedValueLiteral);
      });

    });
  });

}));
