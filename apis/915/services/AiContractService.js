/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AiContract
   * This operation creates a AiContract entity.
   *
   * aiContract AiContractCreate The AiContract to be created
   * returns AiContract
   **/
  const createAiContract =  ( args, context /* aiContract  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContract";
        context.operationId  = "createAiContract";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAiContract: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AiContract
   * This operation deletes a AiContract entity.
   *
   * id String Identifier of the AiContract
   * no response value expected for this operation
   **/
  const deleteAiContract =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContract";
        context.operationId  = "deleteAiContract";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAiContract: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AiContract objects
   * This operation list or find AiContract entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAiContract =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContract";
        context.operationId  = "listAiContract";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAiContract: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AiContract
   * This operation updates partially a AiContract entity.
   *
   * id String Identifier of the AiContract
   * aiContract AiContractUpdate The AiContract to be updated
   * returns AiContract
   **/
  const patchAiContract =  ( args, context /* idaiContract  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContract";
        context.operationId  = "patchAiContract";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAiContract: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AiContract by ID
   * This operation retrieves a AiContract entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AiContract
   * fields String Comma-separated properties to provide in response (optional)
   * returns AiContract
   **/
  const retrieveAiContract =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContract";
        context.operationId  = "retrieveAiContract";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAiContract: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAiContract,
  deleteAiContract,
  listAiContract,
  patchAiContract,
  retrieveAiContract,
};
