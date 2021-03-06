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
    describe('Transaction', function() {
      beforeEach(function() {
        instance = new InfusionsoftRestApi.Transaction();
      });

      it('should create an instance of Transaction', function() {
        // TODO: update the code to test Transaction
        expect(instance).to.be.a(InfusionsoftRestApi.Transaction);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property collectionMethod (base name: "collection_method")', function() {
        // TODO: update the code to test the property collectionMethod
        expect(instance).to.have.property('collectionMethod');
        // expect(instance.collectionMethod).to.be(expectedValueLiteral);
      });

      it('should have the property contactId (base name: "contact_id")', function() {
        // TODO: update the code to test the property contactId
        expect(instance).to.have.property('contactId');
        // expect(instance.contactId).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

      it('should have the property gateway (base name: "gateway")', function() {
        // TODO: update the code to test the property gateway
        expect(instance).to.have.property('gateway');
        // expect(instance.gateway).to.be(expectedValueLiteral);
      });

      it('should have the property gatewayAccountName (base name: "gateway_account_name")', function() {
        // TODO: update the code to test the property gatewayAccountName
        expect(instance).to.have.property('gatewayAccountName');
        // expect(instance.gatewayAccountName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property orderIds (base name: "order_ids")', function() {
        // TODO: update the code to test the property orderIds
        expect(instance).to.have.property('orderIds');
        // expect(instance.orderIds).to.be(expectedValueLiteral);
      });

      it('should have the property orders (base name: "orders")', function() {
        // TODO: update the code to test the property orders
        expect(instance).to.have.property('orders');
        // expect(instance.orders).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property test (base name: "test")', function() {
        // TODO: update the code to test the property test
        expect(instance).to.have.property('test');
        // expect(instance.test).to.be(expectedValueLiteral);
      });

      it('should have the property transactionDate (base name: "transaction_date")', function() {
        // TODO: update the code to test the property transactionDate
        expect(instance).to.have.property('transactionDate');
        // expect(instance.transactionDate).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
