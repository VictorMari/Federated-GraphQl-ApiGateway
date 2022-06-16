/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AiModel
   * This operation creates a AiModel entity.
   *
   * aiModel AiModelCreate The AiModel to be created
   * returns AiModel
   **/
  const createAiModel =  ( args, context /* aiModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModel";
        context.operationId  = "createAiModel";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAiModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AiModel
   * This operation deletes a AiModel entity.
   *
   * id String Identifier of the AiModel
   * no response value expected for this operation
   **/
  const deleteAiModel =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModel";
        context.operationId  = "deleteAiModel";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAiModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AiModel objects
   * This operation list or find AiModel entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAiModel =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModel";
        context.operationId  = "listAiModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAiModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AiModel
   * This operation updates partially a AiModel entity.
   *
   * id String Identifier of the AiModel
   * aiModel AiModelUpdate The AiModel to be updated
   * returns AiModel
   **/
  const patchAiModel =  ( args, context /* idaiModel  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModel";
        context.operationId  = "patchAiModel";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAiModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AiModel by ID
   * This operation retrieves a AiModel entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AiModel
   * fields String Comma-separated properties to provide in response (optional)
   * returns AiModel
   **/
  const retrieveAiModel =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModel";
        context.operationId  = "retrieveAiModel";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAiModel: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAiModel,
  deleteAiModel,
  listAiModel,
  patchAiModel,
  retrieveAiModel,
};
