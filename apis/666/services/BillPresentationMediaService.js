/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a BillPresentationMedia
   * This operation creates a BillPresentationMedia entity.
   *
   * billPresentationMedia BillPresentationMediaCreate The BillPresentationMedia to be created
   * returns BillPresentationMedia
   **/
  const createBillPresentationMedia =  ( args, context /* billPresentationMedia  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillPresentationMedia";
        context.operationId  = "createBillPresentationMedia";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createBillPresentationMedia: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a BillPresentationMedia
   * This operation deletes a BillPresentationMedia entity.
   *
   * id String Identifier of the BillPresentationMedia
   * no response value expected for this operation
   **/
  const deleteBillPresentationMedia =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillPresentationMedia";
        context.operationId  = "deleteBillPresentationMedia";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteBillPresentationMedia: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find BillPresentationMedia objects
   * This operation list or find BillPresentationMedia entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBillPresentationMedia =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillPresentationMedia";
        context.operationId  = "listBillPresentationMedia";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listBillPresentationMedia: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a BillPresentationMedia
   * This operation updates partially a BillPresentationMedia entity.
   *
   * id String Identifier of the BillPresentationMedia
   * billPresentationMedia BillPresentationMediaUpdate The BillPresentationMedia to be updated
   * returns BillPresentationMedia
   **/
  const patchBillPresentationMedia =  ( args, context /* idbillPresentationMedia  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillPresentationMedia";
        context.operationId  = "patchBillPresentationMedia";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchBillPresentationMedia: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a BillPresentationMedia by ID
   * This operation retrieves a BillPresentationMedia entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the BillPresentationMedia
   * fields String Comma-separated properties to provide in response (optional)
   * returns BillPresentationMedia
   **/
  const retrieveBillPresentationMedia =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillPresentationMedia";
        context.operationId  = "retrieveBillPresentationMedia";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveBillPresentationMedia: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createBillPresentationMedia,
  deleteBillPresentationMedia,
  listBillPresentationMedia,
  patchBillPresentationMedia,
  retrieveBillPresentationMedia,
};
