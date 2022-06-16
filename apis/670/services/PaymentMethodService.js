/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PaymentMethod
   * This operation creates a PaymentMethod entity.
   *
   * paymentMethod PaymentMethodCreate The PaymentMethod to be created
   * returns PaymentMethod
   **/
  const createPaymentMethod =  ( args, context /* paymentMethod  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PaymentMethod";
        context.operationId  = "createPaymentMethod";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPaymentMethod: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PaymentMethod
   * This operation deletes a PaymentMethod entity.
   *
   * id String Identifier of the PaymentMethod
   * no response value expected for this operation
   **/
  const deletePaymentMethod =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PaymentMethod";
        context.operationId  = "deletePaymentMethod";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePaymentMethod: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PaymentMethod objects
   * This operation list or find PaymentMethod entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPaymentMethod =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PaymentMethod";
        context.operationId  = "listPaymentMethod";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPaymentMethod: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PaymentMethod
   * This operation updates partially a PaymentMethod entity.
   *
   * id String Identifier of the PaymentMethod
   * paymentMethod PaymentMethodUpdate The PaymentMethod to be updated
   * returns PaymentMethod
   **/
  const patchPaymentMethod =  ( args, context /* idpaymentMethod  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PaymentMethod";
        context.operationId  = "patchPaymentMethod";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPaymentMethod: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PaymentMethod by ID
   * This operation retrieves a PaymentMethod entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PaymentMethod
   * fields String Comma-separated properties to provide in response (optional)
   * returns PaymentMethod
   **/
  const retrievePaymentMethod =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PaymentMethod";
        context.operationId  = "retrievePaymentMethod";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePaymentMethod: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPaymentMethod,
  deletePaymentMethod,
  listPaymentMethod,
  patchPaymentMethod,
  retrievePaymentMethod,
};
