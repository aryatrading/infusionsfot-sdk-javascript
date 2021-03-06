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
    instance = new InfusionsoftRestApi.TaskApi();
  });

  describe('(package)', function() {
    describe('TaskApi', function() {
      describe('createTaskUsingPOST', function() {
        it('should call createTaskUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for createTaskUsingPOST call and complete the assertions
          /*
          var task = new InfusionsoftRestApi.Task();
          task.completed = false;
          task.completionDate = "";
          task.contact = new InfusionsoftRestApi.BasicContact();
          task.contact.email = "";
          task.contact.firstName = "";
          task.contact.id = "0";
          task.contact.lastName = "";
          task.creationDate = "";
          task.description = "";
          task.dueDate = "";
          task.modificationDate = "";
          task.priority = 0;
          task.title = "";
          task.type = "";
          task.url = "";
          task.userId = "0";

          instance.createTaskUsingPOST(task, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Task);
            expect(data.completed).to.be.a('boolean');
            expect(data.completed).to.be(false);
            expect(data.completionDate).to.be.a('string');
            expect(data.completionDate).to.be("");
            expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                  expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
            expect(data.creationDate).to.be.a('string');
            expect(data.creationDate).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.dueDate).to.be.a('string');
            expect(data.dueDate).to.be("");
            expect(data.modificationDate).to.be.a('string');
            expect(data.modificationDate).to.be("");
            expect(data.priority).to.be.a('number');
            expect(data.priority).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('loadTaskUsingGET', function() {
        it('should call loadTaskUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for loadTaskUsingGET call and complete the assertions
          /*
          var taskId = "taskId_example";

          instance.loadTaskUsingGET(taskId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Task);
            expect(data.completed).to.be.a('boolean');
            expect(data.completed).to.be(false);
            expect(data.completionDate).to.be.a('string');
            expect(data.completionDate).to.be("");
            expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                  expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
            expect(data.creationDate).to.be.a('string');
            expect(data.creationDate).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.dueDate).to.be.a('string');
            expect(data.dueDate).to.be("");
            expect(data.modificationDate).to.be.a('string');
            expect(data.modificationDate).to.be("");
            expect(data.priority).to.be.a('number');
            expect(data.priority).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('removeTaskUsingDELETE', function() {
        it('should call removeTaskUsingDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for removeTaskUsingDELETE call
          /*
          var taskId = "taskId_example";

          instance.removeTaskUsingDELETE(taskId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('replaceTaskUsingPUT', function() {
        it('should call replaceTaskUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for replaceTaskUsingPUT call and complete the assertions
          /*
          var taskId = "taskId_example";
          var task = new InfusionsoftRestApi.Task();
          task.completed = false;
          task.completionDate = "";
          task.contact = new InfusionsoftRestApi.BasicContact();
          task.contact.email = "";
          task.contact.firstName = "";
          task.contact.id = "0";
          task.contact.lastName = "";
          task.creationDate = "";
          task.description = "";
          task.dueDate = "";
          task.modificationDate = "";
          task.priority = 0;
          task.title = "";
          task.type = "";
          task.url = "";
          task.userId = "0";

          instance.replaceTaskUsingPUT(taskId, task, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Task);
            expect(data.completed).to.be.a('boolean');
            expect(data.completed).to.be(false);
            expect(data.completionDate).to.be.a('string');
            expect(data.completionDate).to.be("");
            expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                  expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
            expect(data.creationDate).to.be.a('string');
            expect(data.creationDate).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.dueDate).to.be.a('string');
            expect(data.dueDate).to.be("");
            expect(data.modificationDate).to.be.a('string');
            expect(data.modificationDate).to.be("");
            expect(data.priority).to.be.a('number');
            expect(data.priority).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('searchUsingGET4', function() {
        it('should call searchUsingGET4 successfully', function(done) {
          // TODO: uncomment, update parameter values for searchUsingGET4 call and complete the assertions
          /*
          var opts = {};
          opts.contactId = 789;
          opts.hasDueDate = true;
          opts.userId = 789;
          opts.since = "since_example";
          opts.until = "until_example";
          opts.completed = true;
          opts.limit = 56;
          opts.offset = 56;
          opts.order = "order_example";

          instance.searchUsingGET4(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.TaskList);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.syncToken).to.be.a('string');
            expect(data.syncToken).to.be("");
            {
              let dataCtr = data.tasks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(InfusionsoftRestApi.Task);
                expect(data.completed).to.be.a('boolean');
                expect(data.completed).to.be(false);
                expect(data.completionDate).to.be.a('string');
                expect(data.completionDate).to.be("");
                expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                      expect(data.contact.email).to.be.a('string');
                  expect(data.contact.email).to.be("");
                  expect(data.contact.firstName).to.be.a('string');
                  expect(data.contact.firstName).to.be("");
                  expect(data.contact.id).to.be.a('number');
                  expect(data.contact.id).to.be("0");
                  expect(data.contact.lastName).to.be.a('string');
                  expect(data.contact.lastName).to.be("");
                expect(data.creationDate).to.be.a('string');
                expect(data.creationDate).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.dueDate).to.be.a('string');
                expect(data.dueDate).to.be("");
                expect(data.modificationDate).to.be.a('string');
                expect(data.modificationDate).to.be("");
                expect(data.priority).to.be.a('number');
                expect(data.priority).to.be(0);
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");
                expect(data.userId).to.be.a('number');
                expect(data.userId).to.be("0");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('syncUsingGET2', function() {
        it('should call syncUsingGET2 successfully', function(done) {
          // TODO: uncomment, update parameter values for syncUsingGET2 call and complete the assertions
          /*
          var opts = {};
          opts.syncToken = "syncToken_example";
          opts.limit = 56;
          opts.offset = 56;

          instance.syncUsingGET2(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.TaskStatusList);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.syncToken).to.be.a('string');
            expect(data.syncToken).to.be("");
            {
              let dataCtr = data.taskStatuses;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(InfusionsoftRestApi.TaskStatus);
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("CREATED");
                expect(data.task).to.be.a(InfusionsoftRestApi.Task);
                      expect(data.task.completed).to.be.a('boolean');
                  expect(data.task.completed).to.be(false);
                  expect(data.task.completionDate).to.be.a('string');
                  expect(data.task.completionDate).to.be("");
                  expect(data.task.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                        expect(data.task.contact.email).to.be.a('string');
                    expect(data.task.contact.email).to.be("");
                    expect(data.task.contact.firstName).to.be.a('string');
                    expect(data.task.contact.firstName).to.be("");
                    expect(data.task.contact.id).to.be.a('number');
                    expect(data.task.contact.id).to.be("0");
                    expect(data.task.contact.lastName).to.be.a('string');
                    expect(data.task.contact.lastName).to.be("");
                  expect(data.task.creationDate).to.be.a('string');
                  expect(data.task.creationDate).to.be("");
                  expect(data.task.description).to.be.a('string');
                  expect(data.task.description).to.be("");
                  expect(data.task.dueDate).to.be.a('string');
                  expect(data.task.dueDate).to.be("");
                  expect(data.task.modificationDate).to.be.a('string');
                  expect(data.task.modificationDate).to.be("");
                  expect(data.task.priority).to.be.a('number');
                  expect(data.task.priority).to.be(0);
                  expect(data.task.title).to.be.a('string');
                  expect(data.task.title).to.be("");
                  expect(data.task.type).to.be.a('string');
                  expect(data.task.type).to.be("");
                  expect(data.task.url).to.be.a('string');
                  expect(data.task.url).to.be("");
                  expect(data.task.userId).to.be.a('number');
                  expect(data.task.userId).to.be("0");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tasksUsingGET', function() {
        it('should call tasksUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksUsingGET call and complete the assertions
          /*
          var opts = {};
          opts.contactId = 789;
          opts.hasDueDate = true;
          opts.userId = 789;
          opts.since = "since_example";
          opts.until = "until_example";
          opts.completed = true;
          opts.limit = 56;
          opts.offset = 56;
          opts.order = "order_example";

          instance.tasksUsingGET(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.TaskList);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.syncToken).to.be.a('string');
            expect(data.syncToken).to.be("");
            {
              let dataCtr = data.tasks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(InfusionsoftRestApi.Task);
                expect(data.completed).to.be.a('boolean');
                expect(data.completed).to.be(false);
                expect(data.completionDate).to.be.a('string');
                expect(data.completionDate).to.be("");
                expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                      expect(data.contact.email).to.be.a('string');
                  expect(data.contact.email).to.be("");
                  expect(data.contact.firstName).to.be.a('string');
                  expect(data.contact.firstName).to.be("");
                  expect(data.contact.id).to.be.a('number');
                  expect(data.contact.id).to.be("0");
                  expect(data.contact.lastName).to.be.a('string');
                  expect(data.contact.lastName).to.be("");
                expect(data.creationDate).to.be.a('string');
                expect(data.creationDate).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.dueDate).to.be.a('string');
                expect(data.dueDate).to.be("");
                expect(data.modificationDate).to.be.a('string');
                expect(data.modificationDate).to.be("");
                expect(data.priority).to.be.a('number');
                expect(data.priority).to.be(0);
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");
                expect(data.userId).to.be.a('number');
                expect(data.userId).to.be("0");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTaskUsingPATCH', function() {
        it('should call updateTaskUsingPATCH successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTaskUsingPATCH call and complete the assertions
          /*
          var taskId = "taskId_example";
          var task = new InfusionsoftRestApi.Task();
          task.completed = false;
          task.completionDate = "";
          task.contact = new InfusionsoftRestApi.BasicContact();
          task.contact.email = "";
          task.contact.firstName = "";
          task.contact.id = "0";
          task.contact.lastName = "";
          task.creationDate = "";
          task.description = "";
          task.dueDate = "";
          task.modificationDate = "";
          task.priority = 0;
          task.title = "";
          task.type = "";
          task.url = "";
          task.userId = "0";

          instance.updateTaskUsingPATCH(taskId, task, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InfusionsoftRestApi.Task);
            expect(data.completed).to.be.a('boolean');
            expect(data.completed).to.be(false);
            expect(data.completionDate).to.be.a('string');
            expect(data.completionDate).to.be("");
            expect(data.contact).to.be.a(InfusionsoftRestApi.BasicContact);
                  expect(data.contact.email).to.be.a('string');
              expect(data.contact.email).to.be("");
              expect(data.contact.firstName).to.be.a('string');
              expect(data.contact.firstName).to.be("");
              expect(data.contact.id).to.be.a('number');
              expect(data.contact.id).to.be("0");
              expect(data.contact.lastName).to.be.a('string');
              expect(data.contact.lastName).to.be("");
            expect(data.creationDate).to.be.a('string');
            expect(data.creationDate).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.dueDate).to.be.a('string');
            expect(data.dueDate).to.be("");
            expect(data.modificationDate).to.be.a('string');
            expect(data.modificationDate).to.be("");
            expect(data.priority).to.be.a('number');
            expect(data.priority).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be("0");

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
