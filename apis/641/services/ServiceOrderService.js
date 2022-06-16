/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ServiceOrder
   * This operation creates a ServiceOrder entity.
   *
   * serviceOrder ServiceOrderCreate The ServiceOrder to be created
   * returns ServiceOrder
   **/
  const createServiceOrder =  ( args, context /* serviceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceOrder";
        context.operationId  = "createServiceOrder";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ServiceOrder
   * This operation deletes a ServiceOrder entity.
   *
   * id String Identifier of the ServiceOrder
   * no response value expected for this operation
   **/
  const deleteServiceOrder =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceOrder";
        context.operationId  = "deleteServiceOrder";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ServiceOrder objects
   * This operation list or find ServiceOrder entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceOrder =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceOrder";
        context.operationId  = "listServiceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ServiceOrder
   * This operation updates partially a ServiceOrder entity.
   *
   * id String Identifier of the ServiceOrder
   * serviceOrder ServiceOrderUpdate The ServiceOrder to be updated
   * returns ServiceOrder
   **/
  const patchServiceOrder =  ( args, context /* idserviceOrder  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceOrder";
        context.operationId  = "patchServiceOrder";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceOrder by ID
   * This operation retrieves a ServiceOrder entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceOrder
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceOrder
   **/
  const retrieveServiceOrder =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceOrder";
        context.operationId  = "retrieveServiceOrder";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceOrder: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createServiceOrder,
  deleteServiceOrder,
  listServiceOrder,
  patchServiceOrder,
  retrieveServiceOrder,
};
