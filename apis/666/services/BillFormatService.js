/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a BillFormat
   * This operation creates a BillFormat entity.
   *
   * billFormat BillFormatCreate The BillFormat to be created
   * returns BillFormat
   **/
  const createBillFormat =  ( args, context /* billFormat  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillFormat";
        context.operationId  = "createBillFormat";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createBillFormat: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a BillFormat
   * This operation deletes a BillFormat entity.
   *
   * id String Identifier of the BillFormat
   * no response value expected for this operation
   **/
  const deleteBillFormat =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillFormat";
        context.operationId  = "deleteBillFormat";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteBillFormat: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find BillFormat objects
   * This operation list or find BillFormat entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBillFormat =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillFormat";
        context.operationId  = "listBillFormat";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listBillFormat: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a BillFormat
   * This operation updates partially a BillFormat entity.
   *
   * id String Identifier of the BillFormat
   * billFormat BillFormatUpdate The BillFormat to be updated
   * returns BillFormat
   **/
  const patchBillFormat =  ( args, context /* idbillFormat  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillFormat";
        context.operationId  = "patchBillFormat";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchBillFormat: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a BillFormat by ID
   * This operation retrieves a BillFormat entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the BillFormat
   * fields String Comma-separated properties to provide in response (optional)
   * returns BillFormat
   **/
  const retrieveBillFormat =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillFormat";
        context.operationId  = "retrieveBillFormat";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveBillFormat: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createBillFormat,
  deleteBillFormat,
  listBillFormat,
  patchBillFormat,
  retrieveBillFormat,
};
