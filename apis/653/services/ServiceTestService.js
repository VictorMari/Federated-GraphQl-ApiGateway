/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceTest
   * This operation creates a ServiceTest entity.
   *
   * serviceTest ServiceTestCreate The ServiceTest to be created
   * returns ServiceTest
   **/
  const createServiceTest =  ( args, context /* serviceTest  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTest";
        context.operationId  = "createServiceTest";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceTest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceTest
   * This operation deletes a ServiceTest entity.
   *
   * id String Identifier of the ServiceTest
   * no response value expected for this operation
   **/
  const deleteServiceTest =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTest";
        context.operationId  = "deleteServiceTest";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceTest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceTest objects
   * This operation list or find ServiceTest entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceTest =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTest";
        context.operationId  = "listServiceTest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceTest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceTest
   * This operation updates partially a ServiceTest entity.
   *
   * id String Identifier of the ServiceTest
   * serviceTest ServiceTestUpdate The ServiceTest to be updated
   * returns ServiceTest
   **/
  const patchServiceTest =  ( args, context /* idserviceTest  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTest";
        context.operationId  = "patchServiceTest";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceTest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceTest by ID
   * This operation retrieves a ServiceTest entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceTest
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceTest
   **/
  const retrieveServiceTest =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceTest";
        context.operationId  = "retrieveServiceTest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceTest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceTest,
  deleteServiceTest,
  listServiceTest,
  patchServiceTest,
  retrieveServiceTest,
};
