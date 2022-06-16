/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Customer
   * This operation creates a Customer entity.
   *
   * customer CustomerCreate The Customer to be created
   * returns Customer
   **/
  const createCustomer =  ( args, context /* customer  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Customer";
        context.operationId  = "createCustomer";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createCustomer: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Customer
   * This operation deletes a Customer entity.
   *
   * id String Identifier of the Customer
   * no response value expected for this operation
   **/
  const deleteCustomer =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Customer";
        context.operationId  = "deleteCustomer";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteCustomer: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Customer objects
   * This operation list or find Customer entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCustomer =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Customer";
        context.operationId  = "listCustomer";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listCustomer: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Customer
   * This operation updates partially a Customer entity.
   *
   * id String Identifier of the Customer
   * customer CustomerUpdate The Customer to be updated
   * returns Customer
   **/
  const patchCustomer =  ( args, context /* idcustomer  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Customer";
        context.operationId  = "patchCustomer";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchCustomer: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Customer by ID
   * This operation retrieves a Customer entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Customer
   * fields String Comma-separated properties to provide in response (optional)
   * returns Customer
   **/
  const retrieveCustomer =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Customer";
        context.operationId  = "retrieveCustomer";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveCustomer: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCustomer,
  deleteCustomer,
  listCustomer,
  patchCustomer,
  retrieveCustomer,
};
