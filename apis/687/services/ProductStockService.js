/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductStock
   * This operation creates a ProductStock entity.
   *
   * productStock ProductStockCreate The ProductStock to be created
   * returns ProductStock
   **/
  const createProductStock =  ( args, context /* productStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductStock";
        context.operationId  = "createProductStock";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductStock
   * This operation deletes a ProductStock entity.
   *
   * id String Identifier of the ProductStock
   * no response value expected for this operation
   **/
  const deleteProductStock =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductStock";
        context.operationId  = "deleteProductStock";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductStock objects
   * This operation list or find ProductStock entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductStock =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductStock";
        context.operationId  = "listProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductStock
   * This operation updates partially a ProductStock entity.
   *
   * id String Identifier of the ProductStock
   * productStock ProductStockUpdate The ProductStock to be updated
   * returns ProductStock
   **/
  const patchProductStock =  ( args, context /* idproductStock  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductStock";
        context.operationId  = "patchProductStock";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductStock by ID
   * This operation retrieves a ProductStock entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductStock
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductStock
   **/
  const retrieveProductStock =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductStock";
        context.operationId  = "retrieveProductStock";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductStock: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductStock,
  deleteProductStock,
  listProductStock,
  patchProductStock,
  retrieveProductStock,
};
