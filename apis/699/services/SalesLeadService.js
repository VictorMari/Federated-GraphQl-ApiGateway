/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a SalesLead
   * This operation creates a SalesLead entity.
   *
   * salesLead SalesLeadCreate The SalesLead to be created
   * returns SalesLead
   **/
  const createSalesLead =  ( args, context /* salesLead  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SalesLead";
        context.operationId  = "createSalesLead";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createSalesLead: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a SalesLead
   * This operation deletes a SalesLead entity.
   *
   * id String Identifier of the SalesLead
   * no response value expected for this operation
   **/
  const deleteSalesLead =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SalesLead";
        context.operationId  = "deleteSalesLead";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteSalesLead: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find SalesLead objects
   * This operation list or find SalesLead entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listSalesLead =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SalesLead";
        context.operationId  = "listSalesLead";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listSalesLead: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a SalesLead
   * This operation updates partially a SalesLead entity.
   *
   * id String Identifier of the SalesLead
   * salesLead SalesLeadUpdate The SalesLead to be updated
   * returns SalesLead
   **/
  const patchSalesLead =  ( args, context /* idsalesLead  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SalesLead";
        context.operationId  = "patchSalesLead";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchSalesLead: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a SalesLead by ID
   * This operation retrieves a SalesLead entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the SalesLead
   * fields String Comma-separated properties to provide in response (optional)
   * returns SalesLead
   **/
  const retrieveSalesLead =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SalesLead";
        context.operationId  = "retrieveSalesLead";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveSalesLead: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createSalesLead,
  deleteSalesLead,
  listSalesLead,
  patchSalesLead,
  retrieveSalesLead,
};
