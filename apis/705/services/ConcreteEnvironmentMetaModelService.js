/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ConcreteEnvironmentMetaModel
   * This operation creates a ConcreteEnvironmentMetaModel entity.
   *
   * concreteEnvironmentMetaModel ConcreteEnvironmentMetaModelCreate The ConcreteEnvironmentMetaModel to be created
   * returns ConcreteEnvironmentMetaModel
   **/
  const createConcreteEnvironmentMetaModel =  ( args, context /* concreteEnvironmentMetaModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ConcreteEnvironmentMetaModel";
        context.operationId  = "createConcreteEnvironmentMetaModel";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createConcreteEnvironmentMetaModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ConcreteEnvironmentMetaModel
   * This operation deletes a ConcreteEnvironmentMetaModel entity.
   *
   * id String Identifier of the ConcreteEnvironmentMetaModel
   * no response value expected for this operation
   **/
  const deleteConcreteEnvironmentMetaModel =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ConcreteEnvironmentMetaModel";
        context.operationId  = "deleteConcreteEnvironmentMetaModel";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteConcreteEnvironmentMetaModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ConcreteEnvironmentMetaModel objects
   * This operation list or find ConcreteEnvironmentMetaModel entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listConcreteEnvironmentMetaModel =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ConcreteEnvironmentMetaModel";
        context.operationId  = "listConcreteEnvironmentMetaModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listConcreteEnvironmentMetaModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ConcreteEnvironmentMetaModel
   * This operation updates partially a ConcreteEnvironmentMetaModel entity.
   *
   * id String Identifier of the ConcreteEnvironmentMetaModel
   * concreteEnvironmentMetaModel ConcreteEnvironmentMetaModelUpdate The ConcreteEnvironmentMetaModel to be updated
   * returns ConcreteEnvironmentMetaModel
   **/
  const patchConcreteEnvironmentMetaModel =  ( args, context /* idconcreteEnvironmentMetaModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ConcreteEnvironmentMetaModel";
        context.operationId  = "patchConcreteEnvironmentMetaModel";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchConcreteEnvironmentMetaModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ConcreteEnvironmentMetaModel by ID
   * This operation retrieves a ConcreteEnvironmentMetaModel entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ConcreteEnvironmentMetaModel
   * fields String Comma-separated properties to provide in response (optional)
   * returns ConcreteEnvironmentMetaModel
   **/
  const retrieveConcreteEnvironmentMetaModel =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ConcreteEnvironmentMetaModel";
        context.operationId  = "retrieveConcreteEnvironmentMetaModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveConcreteEnvironmentMetaModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createConcreteEnvironmentMetaModel,
  deleteConcreteEnvironmentMetaModel,
  listConcreteEnvironmentMetaModel,
  patchConcreteEnvironmentMetaModel,
  retrieveConcreteEnvironmentMetaModel,
};
