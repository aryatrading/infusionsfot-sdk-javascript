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
    describe('AppointmentList', function() {
      beforeEach(function() {
        instance = new InfusionsoftRestApi.AppointmentList();
      });

      it('should create an instance of AppointmentList', function() {
        // TODO: update the code to test AppointmentList
        expect(instance).to.be.a(InfusionsoftRestApi.AppointmentList);
      });

      it('should have the property appointments (base name: "appointments")', function() {
        // TODO: update the code to test the property appointments
        expect(instance).to.have.property('appointments');
        // expect(instance.appointments).to.be(expectedValueLiteral);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property next (base name: "next")', function() {
        // TODO: update the code to test the property next
        expect(instance).to.have.property('next');
        // expect(instance.next).to.be(expectedValueLiteral);
      });

      it('should have the property previous (base name: "previous")', function() {
        // TODO: update the code to test the property previous
        expect(instance).to.have.property('previous');
        // expect(instance.previous).to.be(expectedValueLiteral);
      });

      it('should have the property syncToken (base name: "sync_token")', function() {
        // TODO: update the code to test the property syncToken
        expect(instance).to.have.property('syncToken');
        // expect(instance.syncToken).to.be(expectedValueLiteral);
      });

    });
  });

}));