/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a NonFunctionalTestModel
   * This operation creates a NonFunctionalTestModel entity.
   *
   * nonFunctionalTestModel NonFunctionalTestModelCreate The NonFunctionalTestModel to be created
   * returns NonFunctionalTestModel
   **/
  const createNonFunctionalTestModel =  ( args, context /* nonFunctionalTestModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestModel";
        context.operationId  = "createNonFunctionalTestModel";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createNonFunctionalTestModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a NonFunctionalTestModel
   * This operation deletes a NonFunctionalTestModel entity.
   *
   * id String Identifier of the NonFunctionalTestModel
   * no response value expected for this operation
   **/
  const deleteNonFunctionalTestModel =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestModel";
        context.operationId  = "deleteNonFunctionalTestModel";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteNonFunctionalTestModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find NonFunctionalTestModel objects
   * This operation list or find NonFunctionalTestModel entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listNonFunctionalTestModel =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestModel";
        context.operationId  = "listNonFunctionalTestModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listNonFunctionalTestModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a NonFunctionalTestModel
   * This operation updates partially a NonFunctionalTestModel entity.
   *
   * id String Identifier of the NonFunctionalTestModel
   * nonFunctionalTestModel NonFunctionalTestModelUpdate The NonFunctionalTestModel to be updated
   * returns NonFunctionalTestModel
   **/
  const patchNonFunctionalTestModel =  ( args, context /* idnonFunctionalTestModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestModel";
        context.operationId  = "patchNonFunctionalTestModel";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchNonFunctionalTestModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a NonFunctionalTestModel by ID
   * This operation retrieves a NonFunctionalTestModel entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the NonFunctionalTestModel
   * fields String Comma-separated properties to provide in response (optional)
   * returns NonFunctionalTestModel
   **/
  const retrieveNonFunctionalTestModel =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NonFunctionalTestModel";
        context.operationId  = "retrieveNonFunctionalTestModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveNonFunctionalTestModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createNonFunctionalTestModel,
  deleteNonFunctionalTestModel,
  listNonFunctionalTestModel,
  patchNonFunctionalTestModel,
  retrieveNonFunctionalTestModel,
};
