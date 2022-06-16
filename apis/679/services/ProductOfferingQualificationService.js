/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOfferingQualification
   * This operation creates a ProductOfferingQualification entity.
   *
   * productOfferingQualification ProductOfferingQualificationCreate The ProductOfferingQualification to be created
   * returns ProductOfferingQualification
   **/
  const createProductOfferingQualification =  ( args, context /* productOfferingQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingQualification";
        context.operationId  = "createProductOfferingQualification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOfferingQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOfferingQualification
   * This operation deletes a ProductOfferingQualification entity.
   *
   * id String Identifier of the ProductOfferingQualification
   * no response value expected for this operation
   **/
  const deleteProductOfferingQualification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingQualification";
        context.operationId  = "deleteProductOfferingQualification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOfferingQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOfferingQualification objects
   * This operation list or find ProductOfferingQualification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOfferingQualification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingQualification";
        context.operationId  = "listProductOfferingQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOfferingQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductOfferingQualification
   * This operation updates partially a ProductOfferingQualification entity.
   *
   * id String Identifier of the ProductOfferingQualification
   * productOfferingQualification ProductOfferingQualificationUpdate The ProductOfferingQualification to be updated
   * returns ProductOfferingQualification
   **/
  const patchProductOfferingQualification =  ( args, context /* idproductOfferingQualification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingQualification";
        context.operationId  = "patchProductOfferingQualification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductOfferingQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOfferingQualification by ID
   * This operation retrieves a ProductOfferingQualification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOfferingQualification
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOfferingQualification
   **/
  const retrieveProductOfferingQualification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingQualification";
        context.operationId  = "retrieveProductOfferingQualification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOfferingQualification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOfferingQualification,
  deleteProductOfferingQualification,
  listProductOfferingQualification,
  patchProductOfferingQualification,
  retrieveProductOfferingQualification,
};
