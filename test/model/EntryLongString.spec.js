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
    describe('EntryLongString', function() {
      beforeEach(function() {
        instance = new InfusionsoftRestApi.EntryLongString();
      });

      it('should create an instance of EntryLongString', function() {
        // TODO: update the code to test EntryLongString
        expect(instance).to.be.a(InfusionsoftRestApi.EntryLongString);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

    });
  });

}));
