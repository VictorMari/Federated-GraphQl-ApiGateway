/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ShoppingCart
   * This operation creates a ShoppingCart entity.
   *
   * shoppingCart ShoppingCartCreate The ShoppingCart to be created
   * returns ShoppingCart
   **/
  const createShoppingCart =  ( args, context /* shoppingCart  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCart";
        context.operationId  = "createShoppingCart";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createShoppingCart: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ShoppingCart
   * This operation deletes a ShoppingCart entity.
   *
   * id String Identifier of the ShoppingCart
   * no response value expected for this operation
   **/
  const deleteShoppingCart =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCart";
        context.operationId  = "deleteShoppingCart";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteShoppingCart: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ShoppingCart objects
   * This operation list or find ShoppingCart entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listShoppingCart =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCart";
        context.operationId  = "listShoppingCart";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listShoppingCart: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ShoppingCart
   * This operation updates partially a ShoppingCart entity.
   *
   * id String Identifier of the ShoppingCart
   * shoppingCart ShoppingCartUpdate The ShoppingCart to be updated
   * returns ShoppingCart
   **/
  const patchShoppingCart =  ( args, context /* idshoppingCart  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCart";
        context.operationId  = "patchShoppingCart";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchShoppingCart: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ShoppingCart by ID
   * This operation retrieves a ShoppingCart entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ShoppingCart
   * fields String Comma-separated properties to provide in response (optional)
   * returns ShoppingCart
   **/
  const retrieveShoppingCart =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCart";
        context.operationId  = "retrieveShoppingCart";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveShoppingCart: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createShoppingCart,
  deleteShoppingCart,
  listShoppingCart,
  patchShoppingCart,
  retrieveShoppingCart,
};
