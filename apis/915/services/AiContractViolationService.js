/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AiContractViolation
   * This operation creates a AiContractViolation entity.
   *
   * aiContractViolation AiContractViolationCreate The AiContractViolation to be created
   * returns AiContractViolation
   **/
  const createAiContractViolation =  ( args, context /* aiContractViolation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractViolation";
        context.operationId  = "createAiContractViolation";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAiContractViolation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AiContractViolation objects
   * This operation list or find AiContractViolation entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAiContractViolation =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractViolation";
        context.operationId  = "listAiContractViolation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAiContractViolation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AiContractViolation by ID
   * This operation retrieves a AiContractViolation entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AiContractViolation
   * fields String Comma-separated properties to provide in response (optional)
   * returns AiContractViolation
   **/
  const retrieveAiContractViolation =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AiContractViolation";
        context.operationId  = "retrieveAiContractViolation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAiContractViolation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAiContractViolation,
  listAiContractViolation,
  retrieveAiContractViolation,
};
