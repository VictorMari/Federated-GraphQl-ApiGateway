/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Product
   * This operation creates a Product entity.
   *
   * product ProductCreate The Product to be created
   * returns Product
   **/
  const createProduct =  ( args, context /* product  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Product";
        context.operationId  = "createProduct";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createProduct: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Product
   * This operation deletes a Product entity.
   *
   * id String Identifier of the Product
   * no response value expected for this operation
   **/
  const deleteProduct =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Product";
        context.operationId  = "deleteProduct";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteProduct: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Product objects
   * This operation list or find Product entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProduct =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Product";
        context.operationId  = "listProduct";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listProduct: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Product
   * This operation updates partially a Product entity.
   *
   * id String Identifier of the Product
   * product ProductUpdate The Product to be updated
   * returns Product
   **/
  const patchProduct =  ( args, context /* idproduct  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Product";
        context.operationId  = "patchProduct";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchProduct: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Product by ID
   * This operation retrieves a Product entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Product
   * fields String Comma-separated properties to provide in response (optional)
   * returns Product
   **/
  const retrieveProduct =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Product";
        context.operationId  = "retrieveProduct";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveProduct: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProduct,
  deleteProduct,
  listProduct,
  patchProduct,
  retrieveProduct,
};
