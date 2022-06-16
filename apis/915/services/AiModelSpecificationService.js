/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AiModelSpecification
   * This operation creates a AiModelSpecification entity.
   *
   * aiModelSpecification AiModelSpecificationCreate The AiModelSpecification to be created
   * returns AiModelSpecification
   **/
  const createAiModelSpecification =  ( args, context /* aiModelSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModelSpecification";
        context.operationId  = "createAiModelSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAiModelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AiModelSpecification
   * This operation deletes a AiModelSpecification entity.
   *
   * id String Identifier of the AiModelSpecification
   * no response value expected for this operation
   **/
  const deleteAiModelSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModelSpecification";
        context.operationId  = "deleteAiModelSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAiModelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AiModelSpecification objects
   * This operation list or find AiModelSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAiModelSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModelSpecification";
        context.operationId  = "listAiModelSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAiModelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AiModelSpecification
   * This operation updates partially a AiModelSpecification entity.
   *
   * id String Identifier of the AiModelSpecification
   * aiModelSpecification AiModelSpecificationUpdate The AiModelSpecification to be updated
   * returns AiModelSpecification
   **/
  const patchAiModelSpecification =  ( args, context /* idaiModelSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModelSpecification";
        context.operationId  = "patchAiModelSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAiModelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AiModelSpecification by ID
   * This operation retrieves a AiModelSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AiModelSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns AiModelSpecification
   **/
  const retrieveAiModelSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiModelSpecification";
        context.operationId  = "retrieveAiModelSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAiModelSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAiModelSpecification,
  deleteAiModelSpecification,
  listAiModelSpecification,
  patchAiModelSpecification,
  retrieveAiModelSpecification,
};
