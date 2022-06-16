/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AiContractSpecification
   * This operation creates a AiContractSpecification entity.
   *
   * aiContractSpecification AiContractSpecificationCreate The AiContractSpecification to be created
   * returns AiContractSpecification
   **/
  const createAiContractSpecification =  ( args, context /* aiContractSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractSpecification";
        context.operationId  = "createAiContractSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAiContractSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AiContractSpecification
   * This operation deletes a AiContractSpecification entity.
   *
   * id String Identifier of the AiContractSpecification
   * no response value expected for this operation
   **/
  const deleteAiContractSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractSpecification";
        context.operationId  = "deleteAiContractSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAiContractSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AiContractSpecification objects
   * This operation list or find AiContractSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAiContractSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractSpecification";
        context.operationId  = "listAiContractSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAiContractSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AiContractSpecification
   * This operation updates partially a AiContractSpecification entity.
   *
   * id String Identifier of the AiContractSpecification
   * aiContractSpecification AiContractSpecificationUpdate The AiContractSpecification to be updated
   * returns AiContractSpecification
   **/
  const patchAiContractSpecification =  ( args, context /* idaiContractSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractSpecification";
        context.operationId  = "patchAiContractSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAiContractSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AiContractSpecification by ID
   * This operation retrieves a AiContractSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AiContractSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns AiContractSpecification
   **/
  const retrieveAiContractSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractSpecification";
        context.operationId  = "retrieveAiContractSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAiContractSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAiContractSpecification,
  deleteAiContractSpecification,
  listAiContractSpecification,
  patchAiContractSpecification,
  retrieveAiContractSpecification,
};
