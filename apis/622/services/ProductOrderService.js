/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOrder
   * This operation creates a ProductOrder entity.
   *
   * productOrder ProductOrderCreate The ProductOrder to be created
   * returns ProductOrder
   **/
  const createProductOrder =  ( args, context /* productOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrder";
        context.operationId  = "createProductOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOrder
   * This operation deletes a ProductOrder entity.
   *
   * id String Identifier of the ProductOrder
   * no response value expected for this operation
   **/
  const deleteProductOrder =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrder";
        context.operationId  = "deleteProductOrder";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOrder objects
   * This operation list or find ProductOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrder";
        context.operationId  = "listProductOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductOrder
   * This operation updates partially a ProductOrder entity.
   *
   * id String Identifier of the ProductOrder
   * productOrder ProductOrderUpdate The ProductOrder to be updated
   * returns ProductOrder
   **/
  const patchProductOrder =  ( args, context /* idproductOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrder";
        context.operationId  = "patchProductOrder";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOrder by ID
   * This operation retrieves a ProductOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOrder
   **/
  const retrieveProductOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrder";
        context.operationId  = "retrieveProductOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOrder,
  deleteProductOrder,
  listProductOrder,
  patchProductOrder,
  retrieveProductOrder,
};
