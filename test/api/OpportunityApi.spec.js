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

  beforeEach(function() {
    instance = new InfusionsoftRestApi.OpportunityApi();
  });

  describe('(package)', function() {
    describe('OpportunityApi', function() {
      describe('createOpportunityUsingPOST', function() {
        it('should call createOpportunityUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for createOpportunityUsingPOST call and complete the assertions
          /*
          var opts = {};
          opts.opportunity = new InfusionsoftRestApi.Opportunity();
          opts.opportunity.contact = new InfusionsoftRestApi.OpportunityContact();
          opts.opportunity.contact.companyName = "";
          opts.opportunity.contact.email = "";
          opts.opportunity.contact.firstName = "";
          opts.opportunity.contact.id = "0";
          opts.opportunity.contact.jobTitle = "";
          opts.opportunity.contact.lastName = "";
          opts.opportunity.contact.phoneNumber = "";
          opts.opportunity.dateCreated = new Date();
          opts.opportunity.estimatedCloseDate = new Date();
          opts.opportunity.id = "0";
          opts.opportunity.includeInForecast = 0;
          opts.opportunity.lastUpdated = new Date();
          opts.opportunity.nextActionDate = new Date();
          opts.opportunity.nextActionNotes = "";
          opts.opportunity.opportunityNotes = "";
          opts.opportunity.opportunityTitle = "";
          opts.opportunity.projectedRevenueHigh = 0.0;
          opts.opportunity.projectedRevenueLow = 0.0;
          opts.opportunity.stage = new InfusionsoftRestApi.SimpleOpportunityStage();
          opts.opportunity.stage.details = new InfusionsoftRestApi.StageDetails();
          opts.opportunity.stage.details.checkListItems = [new InfusionsoftRestApi.CheckListItemDetails()];
          opts.opportunity.stage.details.checkListItems[0].description = "";
          opts.opportunity.stage.details.checkListItems[0].doneDate = new Date();
          opts.opportunity.stage.details.checkListItems[0].id = "0";
          opts.opportunity.stage.details.checkListItems[0].instanceId = "0";
          opts.opportunity.stage.details.checkListItems[0].itemOrder = 0;
          opts.opportunity.stage.details.checkListItems[0].required = false;
          opts.opportunity.stage.details.probability = 0;
          opts.opportunity.stage.details.stageOrder = 0;
          opts.opportunity.stage.details.targetNumDays = 0;
          opts.opportunity.stage.id = "0";
          opts.opportunity.stage.name = "";
          opts.opportunity.stage.reasons = [""];
          opts.opportunity.user = new InfusionsoftRestApi.SimpleUser();
          opts.opportunity.user.firstName = "";
          opts.opportunity.user.id = "0";
          opts.opportunity.user.lastName = "";

          instance.createOpportunityUsingPOST(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Opportunity);
            expect(data.contact).to.be.a(InfusionsoftRestApi.OpportunityContact);
                  expect(data.contact.companyName).to.be.a('string');
              expect(data.contact.companyName).to.be("");
              expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.jobTitle).to.be.a('string');
              expect(data.contact.jobTitle).to.be("");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
              expect(data.contact.phoneNumber).to.be.a('string');
              expect(data.contact.phoneNumber).to.be("");
            expect(data.dateCreated).to.be.a(Date);
            expect(data.dateCreated).to.be(new Date());
            expect(data.estimatedCloseDate).to.be.a(Date);
            expect(data.estimatedCloseDate).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.includeInForecast).to.be.a('number');
            expect(data.includeInForecast).to.be(0);
            expect(data.lastUpdated).to.be.a(Date);
            expect(data.lastUpdated).to.be(new Date());
            expect(data.nextActionDate).to.be.a(Date);
            expect(data.nextActionDate).to.be(new Date());
            expect(data.nextActionNotes).to.be.a('string');
            expect(data.nextActionNotes).to.be("");
            expect(data.opportunityNotes).to.be.a('string');
            expect(data.opportunityNotes).to.be("");
            expect(data.opportunityTitle).to.be.a('string');
            expect(data.opportunityTitle).to.be("");
            expect(data.projectedRevenueHigh).to.be.a('number');
            expect(data.projectedRevenueHigh).to.be(0.0);
            expect(data.projectedRevenueLow).to.be.a('number');
            expect(data.projectedRevenueLow).to.be(0.0);
            expect(data.stage).to.be.a(InfusionsoftRestApi.SimpleOpportunityStage);
                  expect(data.stage.details).to.be.a(InfusionsoftRestApi.StageDetails);
                    {
                  let dataCtr = data.stage.details.checkListItems;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.doneDate).to.be.a(Date);
                    expect(data.doneDate).to.be(new Date());
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.instanceId).to.be.a('number');
                    expect(data.instanceId).to.be("0");
                    expect(data.itemOrder).to.be.a('number');
                    expect(data.itemOrder).to.be(0);
                    expect(data.required).to.be.a('boolean');
                    expect(data.required).to.be(false);
                  }
                }
                expect(data.stage.details.probability).to.be.a('number');
                expect(data.stage.details.probability).to.be(0);
                expect(data.stage.details.stageOrder).to.be.a('number');
                expect(data.stage.details.stageOrder).to.be(0);
                expect(data.stage.details.targetNumDays).to.be.a('number');
                expect(data.stage.details.targetNumDays).to.be(0);
              expect(data.stage.id).to.be.a('number');
              expect(data.stage.id).to.be("0");
              expect(data.stage.name).to.be.a('string');
              expect(data.stage.name).to.be("");
              {
                let dataCtr = data.stage.reasons;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.user).to.be.a(InfusionsoftRestApi.SimpleUser);
                  expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.id).to.be.a('number');
              expect(data.user.id).to.be("0");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunityUsingGET', function() {
        it('should call getOpportunityUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunityUsingGET call and complete the assertions
          /*
          var opportunityId = 789;

          instance.getOpportunityUsingGET(opportunityId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Opportunity);
            expect(data.contact).to.be.a(InfusionsoftRestApi.OpportunityContact);
                  expect(data.contact.companyName).to.be.a('string');
              expect(data.contact.companyName).to.be("");
              expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.jobTitle).to.be.a('string');
              expect(data.contact.jobTitle).to.be("");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
              expect(data.contact.phoneNumber).to.be.a('string');
              expect(data.contact.phoneNumber).to.be("");
            expect(data.dateCreated).to.be.a(Date);
            expect(data.dateCreated).to.be(new Date());
            expect(data.estimatedCloseDate).to.be.a(Date);
            expect(data.estimatedCloseDate).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.includeInForecast).to.be.a('number');
            expect(data.includeInForecast).to.be(0);
            expect(data.lastUpdated).to.be.a(Date);
            expect(data.lastUpdated).to.be(new Date());
            expect(data.nextActionDate).to.be.a(Date);
            expect(data.nextActionDate).to.be(new Date());
            expect(data.nextActionNotes).to.be.a('string');
            expect(data.nextActionNotes).to.be("");
            expect(data.opportunityNotes).to.be.a('string');
            expect(data.opportunityNotes).to.be("");
            expect(data.opportunityTitle).to.be.a('string');
            expect(data.opportunityTitle).to.be("");
            expect(data.projectedRevenueHigh).to.be.a('number');
            expect(data.projectedRevenueHigh).to.be(0.0);
            expect(data.projectedRevenueLow).to.be.a('number');
            expect(data.projectedRevenueLow).to.be(0.0);
            expect(data.stage).to.be.a(InfusionsoftRestApi.SimpleOpportunityStage);
                  expect(data.stage.details).to.be.a(InfusionsoftRestApi.StageDetails);
                    {
                  let dataCtr = data.stage.details.checkListItems;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.doneDate).to.be.a(Date);
                    expect(data.doneDate).to.be(new Date());
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.instanceId).to.be.a('number');
                    expect(data.instanceId).to.be("0");
                    expect(data.itemOrder).to.be.a('number');
                    expect(data.itemOrder).to.be(0);
                    expect(data.required).to.be.a('boolean');
                    expect(data.required).to.be(false);
                  }
                }
                expect(data.stage.details.probability).to.be.a('number');
                expect(data.stage.details.probability).to.be(0);
                expect(data.stage.details.stageOrder).to.be.a('number');
                expect(data.stage.details.stageOrder).to.be(0);
                expect(data.stage.details.targetNumDays).to.be.a('number');
                expect(data.stage.details.targetNumDays).to.be(0);
              expect(data.stage.id).to.be.a('number');
              expect(data.stage.id).to.be("0");
              expect(data.stage.name).to.be.a('string');
              expect(data.stage.name).to.be("");
              {
                let dataCtr = data.stage.reasons;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.user).to.be.a(InfusionsoftRestApi.SimpleUser);
                  expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.id).to.be.a('number');
              expect(data.user.id).to.be("0");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getStagePipelineUsingGET', function() {
        it('should call getStagePipelineUsingGET successfully', function(done) {
          // TODO: uncomment getStagePipelineUsingGET call and complete the assertions
          /*

          instance.getStagePipelineUsingGET(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(InfusionsoftRestApi.SalesPipeline);
              expect(data.endStage).to.be.a('boolean');
              expect(data.endStage).to.be(false);
              expect(data.isDefault).to.be.a('boolean');
              expect(data.isDefault).to.be(false);
              expect(data.stageCount).to.be.a('number');
              expect(data.stageCount).to.be(0);
              expect(data.stageId).to.be.a('number');
              expect(data.stageId).to.be("0");
              expect(data.stageName).to.be.a('string');
              expect(data.stageName).to.be("");
              expect(data.stageOrder).to.be.a('number');
              expect(data.stageOrder).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listOpportunitiesUsingGET', function() {
        it('should call listOpportunitiesUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for listOpportunitiesUsingGET call and complete the assertions
          /*
          var opts = {};
          opts.limit = 56;
          opts.offset = 56;
          opts.userId = 789;
          opts.stageId = 789;
          opts.searchTerm = "searchTerm_example";
          opts.order = "order_example";

          instance.listOpportunitiesUsingGET(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.OpportunityList);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");
            {
              let dataCtr = data.opportunities;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(InfusionsoftRestApi.Opportunity);
                expect(data.contact).to.be.a(InfusionsoftRestApi.OpportunityContact);
                      expect(data.contact.companyName).to.be.a('string');
                  expect(data.contact.companyName).to.be("");
                  expect(data.contact.email).to.be.a('string');
                  expect(data.contact.email).to.be("");
                  expect(data.contact.firstName).to.be.a('string');
                  expect(data.contact.firstName).to.be("");
                  expect(data.contact.id).to.be.a('number');
                  expect(data.contact.id).to.be("0");
                  expect(data.contact.jobTitle).to.be.a('string');
                  expect(data.contact.jobTitle).to.be("");
                  expect(data.contact.lastName).to.be.a('string');
                  expect(data.contact.lastName).to.be("");
                  expect(data.contact.phoneNumber).to.be.a('string');
                  expect(data.contact.phoneNumber).to.be("");
                expect(data.dateCreated).to.be.a(Date);
                expect(data.dateCreated).to.be(new Date());
                expect(data.estimatedCloseDate).to.be.a(Date);
                expect(data.estimatedCloseDate).to.be(new Date());
                expect(data.id).to.be.a('number');
                expect(data.id).to.be("0");
                expect(data.includeInForecast).to.be.a('number');
                expect(data.includeInForecast).to.be(0);
                expect(data.lastUpdated).to.be.a(Date);
                expect(data.lastUpdated).to.be(new Date());
                expect(data.nextActionDate).to.be.a(Date);
                expect(data.nextActionDate).to.be(new Date());
                expect(data.nextActionNotes).to.be.a('string');
                expect(data.nextActionNotes).to.be("");
                expect(data.opportunityNotes).to.be.a('string');
                expect(data.opportunityNotes).to.be("");
                expect(data.opportunityTitle).to.be.a('string');
                expect(data.opportunityTitle).to.be("");
                expect(data.projectedRevenueHigh).to.be.a('number');
                expect(data.projectedRevenueHigh).to.be(0.0);
                expect(data.projectedRevenueLow).to.be.a('number');
                expect(data.projectedRevenueLow).to.be(0.0);
                expect(data.stage).to.be.a(InfusionsoftRestApi.SimpleOpportunityStage);
                      expect(data.stage.details).to.be.a(InfusionsoftRestApi.StageDetails);
                        {
                      let dataCtr = data.stage.details.checkListItems;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
                        expect(data.description).to.be.a('string');
                        expect(data.description).to.be("");
                        expect(data.doneDate).to.be.a(Date);
                        expect(data.doneDate).to.be(new Date());
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be("0");
                        expect(data.instanceId).to.be.a('number');
                        expect(data.instanceId).to.be("0");
                        expect(data.itemOrder).to.be.a('number');
                        expect(data.itemOrder).to.be(0);
                        expect(data.required).to.be.a('boolean');
                        expect(data.required).to.be(false);
                      }
                    }
                    expect(data.stage.details.probability).to.be.a('number');
                    expect(data.stage.details.probability).to.be(0);
                    expect(data.stage.details.stageOrder).to.be.a('number');
                    expect(data.stage.details.stageOrder).to.be(0);
                    expect(data.stage.details.targetNumDays).to.be.a('number');
                    expect(data.stage.details.targetNumDays).to.be(0);
                  expect(data.stage.id).to.be.a('number');
                  expect(data.stage.id).to.be("0");
                  expect(data.stage.name).to.be.a('string');
                  expect(data.stage.name).to.be("");
                  {
                    let dataCtr = data.stage.reasons;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                expect(data.user).to.be.a(InfusionsoftRestApi.SimpleUser);
                      expect(data.user.firstName).to.be.a('string');
                  expect(data.user.firstName).to.be("");
                  expect(data.user.id).to.be.a('number');
                  expect(data.user.id).to.be("0");
                  expect(data.user.lastName).to.be.a('string');
                  expect(data.user.lastName).to.be("");
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('replaceOpportunityUsingPUT', function() {
        it('should call replaceOpportunityUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for replaceOpportunityUsingPUT call and complete the assertions
          /*
          var opts = {};
          opts.opportunity = new InfusionsoftRestApi.Opportunity();
          opts.opportunity.contact = new InfusionsoftRestApi.OpportunityContact();
          opts.opportunity.contact.companyName = "";
          opts.opportunity.contact.email = "";
          opts.opportunity.contact.firstName = "";
          opts.opportunity.contact.id = "0";
          opts.opportunity.contact.jobTitle = "";
          opts.opportunity.contact.lastName = "";
          opts.opportunity.contact.phoneNumber = "";
          opts.opportunity.dateCreated = new Date();
          opts.opportunity.estimatedCloseDate = new Date();
          opts.opportunity.id = "0";
          opts.opportunity.includeInForecast = 0;
          opts.opportunity.lastUpdated = new Date();
          opts.opportunity.nextActionDate = new Date();
          opts.opportunity.nextActionNotes = "";
          opts.opportunity.opportunityNotes = "";
          opts.opportunity.opportunityTitle = "";
          opts.opportunity.projectedRevenueHigh = 0.0;
          opts.opportunity.projectedRevenueLow = 0.0;
          opts.opportunity.stage = new InfusionsoftRestApi.SimpleOpportunityStage();
          opts.opportunity.stage.details = new InfusionsoftRestApi.StageDetails();
          opts.opportunity.stage.details.checkListItems = [new InfusionsoftRestApi.CheckListItemDetails()];
          opts.opportunity.stage.details.checkListItems[0].description = "";
          opts.opportunity.stage.details.checkListItems[0].doneDate = new Date();
          opts.opportunity.stage.details.checkListItems[0].id = "0";
          opts.opportunity.stage.details.checkListItems[0].instanceId = "0";
          opts.opportunity.stage.details.checkListItems[0].itemOrder = 0;
          opts.opportunity.stage.details.checkListItems[0].required = false;
          opts.opportunity.stage.details.probability = 0;
          opts.opportunity.stage.details.stageOrder = 0;
          opts.opportunity.stage.details.targetNumDays = 0;
          opts.opportunity.stage.id = "0";
          opts.opportunity.stage.name = "";
          opts.opportunity.stage.reasons = [""];
          opts.opportunity.user = new InfusionsoftRestApi.SimpleUser();
          opts.opportunity.user.firstName = "";
          opts.opportunity.user.id = "0";
          opts.opportunity.user.lastName = "";

          instance.replaceOpportunityUsingPUT(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Opportunity);
            expect(data.contact).to.be.a(InfusionsoftRestApi.OpportunityContact);
                  expect(data.contact.companyName).to.be.a('string');
              expect(data.contact.companyName).to.be("");
              expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.jobTitle).to.be.a('string');
              expect(data.contact.jobTitle).to.be("");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
              expect(data.contact.phoneNumber).to.be.a('string');
              expect(data.contact.phoneNumber).to.be("");
            expect(data.dateCreated).to.be.a(Date);
            expect(data.dateCreated).to.be(new Date());
            expect(data.estimatedCloseDate).to.be.a(Date);
            expect(data.estimatedCloseDate).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.includeInForecast).to.be.a('number');
            expect(data.includeInForecast).to.be(0);
            expect(data.lastUpdated).to.be.a(Date);
            expect(data.lastUpdated).to.be(new Date());
            expect(data.nextActionDate).to.be.a(Date);
            expect(data.nextActionDate).to.be(new Date());
            expect(data.nextActionNotes).to.be.a('string');
            expect(data.nextActionNotes).to.be("");
            expect(data.opportunityNotes).to.be.a('string');
            expect(data.opportunityNotes).to.be("");
            expect(data.opportunityTitle).to.be.a('string');
            expect(data.opportunityTitle).to.be("");
            expect(data.projectedRevenueHigh).to.be.a('number');
            expect(data.projectedRevenueHigh).to.be(0.0);
            expect(data.projectedRevenueLow).to.be.a('number');
            expect(data.projectedRevenueLow).to.be(0.0);
            expect(data.stage).to.be.a(InfusionsoftRestApi.SimpleOpportunityStage);
                  expect(data.stage.details).to.be.a(InfusionsoftRestApi.StageDetails);
                    {
                  let dataCtr = data.stage.details.checkListItems;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.doneDate).to.be.a(Date);
                    expect(data.doneDate).to.be(new Date());
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.instanceId).to.be.a('number');
                    expect(data.instanceId).to.be("0");
                    expect(data.itemOrder).to.be.a('number');
                    expect(data.itemOrder).to.be(0);
                    expect(data.required).to.be.a('boolean');
                    expect(data.required).to.be(false);
                  }
                }
                expect(data.stage.details.probability).to.be.a('number');
                expect(data.stage.details.probability).to.be(0);
                expect(data.stage.details.stageOrder).to.be.a('number');
                expect(data.stage.details.stageOrder).to.be(0);
                expect(data.stage.details.targetNumDays).to.be.a('number');
                expect(data.stage.details.targetNumDays).to.be(0);
              expect(data.stage.id).to.be.a('number');
              expect(data.stage.id).to.be("0");
              expect(data.stage.name).to.be.a('string');
              expect(data.stage.name).to.be("");
              {
                let dataCtr = data.stage.reasons;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.user).to.be.a(InfusionsoftRestApi.SimpleUser);
                  expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.id).to.be.a('number');
              expect(data.user.id).to.be("0");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateOpportunityUsingPATCH', function() {
        it('should call updateOpportunityUsingPATCH successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOpportunityUsingPATCH call and complete the assertions
          /*
          var opportunityId = 789;
          var opts = {};
          opts.opportunity = new InfusionsoftRestApi.Opportunity();
          opts.opportunity.contact = new InfusionsoftRestApi.OpportunityContact();
          opts.opportunity.contact.companyName = "";
          opts.opportunity.contact.email = "";
          opts.opportunity.contact.firstName = "";
          opts.opportunity.contact.id = "0";
          opts.opportunity.contact.jobTitle = "";
          opts.opportunity.contact.lastName = "";
          opts.opportunity.contact.phoneNumber = "";
          opts.opportunity.dateCreated = new Date();
          opts.opportunity.estimatedCloseDate = new Date();
          opts.opportunity.id = "0";
          opts.opportunity.includeInForecast = 0;
          opts.opportunity.lastUpdated = new Date();
          opts.opportunity.nextActionDate = new Date();
          opts.opportunity.nextActionNotes = "";
          opts.opportunity.opportunityNotes = "";
          opts.opportunity.opportunityTitle = "";
          opts.opportunity.projectedRevenueHigh = 0.0;
          opts.opportunity.projectedRevenueLow = 0.0;
          opts.opportunity.stage = new InfusionsoftRestApi.SimpleOpportunityStage();
          opts.opportunity.stage.details = new InfusionsoftRestApi.StageDetails();
          opts.opportunity.stage.details.checkListItems = [new InfusionsoftRestApi.CheckListItemDetails()];
          opts.opportunity.stage.details.checkListItems[0].description = "";
          opts.opportunity.stage.details.checkListItems[0].doneDate = new Date();
          opts.opportunity.stage.details.checkListItems[0].id = "0";
          opts.opportunity.stage.details.checkListItems[0].instanceId = "0";
          opts.opportunity.stage.details.checkListItems[0].itemOrder = 0;
          opts.opportunity.stage.details.checkListItems[0].required = false;
          opts.opportunity.stage.details.probability = 0;
          opts.opportunity.stage.details.stageOrder = 0;
          opts.opportunity.stage.details.targetNumDays = 0;
          opts.opportunity.stage.id = "0";
          opts.opportunity.stage.name = "";
          opts.opportunity.stage.reasons = [""];
          opts.opportunity.user = new InfusionsoftRestApi.SimpleUser();
          opts.opportunity.user.firstName = "";
          opts.opportunity.user.id = "0";
          opts.opportunity.user.lastName = "";

          instance.updateOpportunityUsingPATCH(opportunityId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Opportunity);
            expect(data.contact).to.be.a(InfusionsoftRestApi.OpportunityContact);
                  expect(data.contact.companyName).to.be.a('string');
              expect(data.contact.companyName).to.be("");
              expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.jobTitle).to.be.a('string');
              expect(data.contact.jobTitle).to.be("");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
              expect(data.contact.phoneNumber).to.be.a('string');
              expect(data.contact.phoneNumber).to.be("");
            expect(data.dateCreated).to.be.a(Date);
            expect(data.dateCreated).to.be(new Date());
            expect(data.estimatedCloseDate).to.be.a(Date);
            expect(data.estimatedCloseDate).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.includeInForecast).to.be.a('number');
            expect(data.includeInForecast).to.be(0);
            expect(data.lastUpdated).to.be.a(Date);
            expect(data.lastUpdated).to.be(new Date());
            expect(data.nextActionDate).to.be.a(Date);
            expect(data.nextActionDate).to.be(new Date());
            expect(data.nextActionNotes).to.be.a('string');
            expect(data.nextActionNotes).to.be("");
            expect(data.opportunityNotes).to.be.a('string');
            expect(data.opportunityNotes).to.be("");
            expect(data.opportunityTitle).to.be.a('string');
            expect(data.opportunityTitle).to.be("");
            expect(data.projectedRevenueHigh).to.be.a('number');
            expect(data.projectedRevenueHigh).to.be(0.0);
            expect(data.projectedRevenueLow).to.be.a('number');
            expect(data.projectedRevenueLow).to.be(0.0);
            expect(data.stage).to.be.a(InfusionsoftRestApi.SimpleOpportunityStage);
                  expect(data.stage.details).to.be.a(InfusionsoftRestApi.StageDetails);
                    {
                  let dataCtr = data.stage.details.checkListItems;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(InfusionsoftRestApi.CheckListItemDetails);
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.doneDate).to.be.a(Date);
                    expect(data.doneDate).to.be(new Date());
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be("0");
                    expect(data.instanceId).to.be.a('number');
                    expect(data.instanceId).to.be("0");
                    expect(data.itemOrder).to.be.a('number');
                    expect(data.itemOrder).to.be(0);
                    expect(data.required).to.be.a('boolean');
                    expect(data.required).to.be(false);
                  }
                }
                expect(data.stage.details.probability).to.be.a('number');
                expect(data.stage.details.probability).to.be(0);
                expect(data.stage.details.stageOrder).to.be.a('number');
                expect(data.stage.details.stageOrder).to.be(0);
                expect(data.stage.details.targetNumDays).to.be.a('number');
                expect(data.stage.details.targetNumDays).to.be(0);
              expect(data.stage.id).to.be.a('number');
              expect(data.stage.id).to.be("0");
              expect(data.stage.name).to.be.a('string');
              expect(data.stage.name).to.be("");
              {
                let dataCtr = data.stage.reasons;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            expect(data.user).to.be.a(InfusionsoftRestApi.SimpleUser);
                  expect(data.user.firstName).to.be.a('string');
              expect(data.user.firstName).to.be("");
              expect(data.user.id).to.be.a('number');
              expect(data.user.id).to.be("0");
              expect(data.user.lastName).to.be.a('string');
              expect(data.user.lastName).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
