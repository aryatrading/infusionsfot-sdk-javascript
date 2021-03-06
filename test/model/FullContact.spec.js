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
    describe('FullContact', function() {
      beforeEach(function() {
        instance = new InfusionsoftRestApi.FullContact();
      });

      it('should create an instance of FullContact', function() {
        // TODO: update the code to test FullContact
        expect(instance).to.be.a(InfusionsoftRestApi.FullContact);
      });

      it('should have the property addresses (base name: "addresses")', function() {
        // TODO: update the code to test the property addresses
        expect(instance).to.have.property('addresses');
        // expect(instance.addresses).to.be(expectedValueLiteral);
      });

      it('should have the property birthday (base name: "birthday")', function() {
        // TODO: update the code to test the property birthday
        expect(instance).to.have.property('birthday');
        // expect(instance.birthday).to.be(expectedValueLiteral);
      });

      it('should have the property company (base name: "company")', function() {
        // TODO: update the code to test the property company
        expect(instance).to.have.property('company');
        // expect(instance.company).to.be(expectedValueLiteral);
      });

      it('should have the property contactType (base name: "contact_type")', function() {
        // TODO: update the code to test the property contactType
        expect(instance).to.have.property('contactType');
        // expect(instance.contactType).to.be(expectedValueLiteral);
      });

      it('should have the property customFields (base name: "custom_fields")', function() {
        // TODO: update the code to test the property customFields
        expect(instance).to.have.property('customFields');
        // expect(instance.customFields).to.be(expectedValueLiteral);
      });

      it('should have the property dateCreated (base name: "date_created")', function() {
        // TODO: update the code to test the property dateCreated
        expect(instance).to.have.property('dateCreated');
        // expect(instance.dateCreated).to.be(expectedValueLiteral);
      });

      it('should have the property emailAddresses (base name: "email_addresses")', function() {
        // TODO: update the code to test the property emailAddresses
        expect(instance).to.have.property('emailAddresses');
        // expect(instance.emailAddresses).to.be(expectedValueLiteral);
      });

      it('should have the property familyName (base name: "family_name")', function() {
        // TODO: update the code to test the property familyName
        expect(instance).to.have.property('familyName');
        // expect(instance.familyName).to.be(expectedValueLiteral);
      });

      it('should have the property faxNumbers (base name: "fax_numbers")', function() {
        // TODO: update the code to test the property faxNumbers
        expect(instance).to.have.property('faxNumbers');
        // expect(instance.faxNumbers).to.be(expectedValueLiteral);
      });

      it('should have the property givenName (base name: "given_name")', function() {
        // TODO: update the code to test the property givenName
        expect(instance).to.have.property('givenName');
        // expect(instance.givenName).to.be(expectedValueLiteral);
      });

      it('should have the property jobTitle (base name: "job_title")', function() {
        // TODO: update the code to test the property jobTitle
        expect(instance).to.have.property('jobTitle');
        // expect(instance.jobTitle).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property leadSourceId (base name: "lead_source_id")', function() {
        // TODO: update the code to test the property leadSourceId
        expect(instance).to.have.property('leadSourceId');
        // expect(instance.leadSourceId).to.be(expectedValueLiteral);
      });

      it('should have the property middleName (base name: "middle_name")', function() {
        // TODO: update the code to test the property middleName
        expect(instance).to.have.property('middleName');
        // expect(instance.middleName).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property optInReason (base name: "opt_in_reason")', function() {
        // TODO: update the code to test the property optInReason
        expect(instance).to.have.property('optInReason');
        // expect(instance.optInReason).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "owner_id")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property phoneNumbers (base name: "phone_numbers")', function() {
        // TODO: update the code to test the property phoneNumbers
        expect(instance).to.have.property('phoneNumbers');
        // expect(instance.phoneNumbers).to.be(expectedValueLiteral);
      });

      it('should have the property preferredLocale (base name: "preferred_locale")', function() {
        // TODO: update the code to test the property preferredLocale
        expect(instance).to.have.property('preferredLocale');
        // expect(instance.preferredLocale).to.be(expectedValueLiteral);
      });

      it('should have the property preferredName (base name: "preferred_name")', function() {
        // TODO: update the code to test the property preferredName
        expect(instance).to.have.property('preferredName');
        // expect(instance.preferredName).to.be(expectedValueLiteral);
      });

      it('should have the property prefix (base name: "prefix")', function() {
        // TODO: update the code to test the property prefix
        expect(instance).to.have.property('prefix');
        // expect(instance.prefix).to.be(expectedValueLiteral);
      });

      it('should have the property relationships (base name: "relationships")', function() {
        // TODO: update the code to test the property relationships
        expect(instance).to.have.property('relationships');
        // expect(instance.relationships).to.be(expectedValueLiteral);
      });

      it('should have the property sourceType (base name: "source_type")', function() {
        // TODO: update the code to test the property sourceType
        expect(instance).to.have.property('sourceType');
        // expect(instance.sourceType).to.be(expectedValueLiteral);
      });

      it('should have the property suffix (base name: "suffix")', function() {
        // TODO: update the code to test the property suffix
        expect(instance).to.have.property('suffix');
        // expect(instance.suffix).to.be(expectedValueLiteral);
      });

      it('should have the property tagIds (base name: "tag_ids")', function() {
        // TODO: update the code to test the property tagIds
        expect(instance).to.have.property('tagIds');
        // expect(instance.tagIds).to.be(expectedValueLiteral);
      });

      it('should have the property timeZone (base name: "time_zone")', function() {
        // TODO: update the code to test the property timeZone
        expect(instance).to.have.property('timeZone');
        // expect(instance.timeZone).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

    });
  });

}));
