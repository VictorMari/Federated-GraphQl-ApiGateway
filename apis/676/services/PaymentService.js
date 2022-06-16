/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Payment
   * This operation creates a Payment entity.
   *
   * payment PaymentCreate The Payment to be created
   * returns Payment
   **/
  const createPayment =  ( args, context /* payment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Payment";
        context.operationId  = "createPayment";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createPayment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Payment objects
   * This operation list or find Payment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPayment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Payment";
        context.operationId  = "listPayment";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listPayment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Payment by ID
   * This operation retrieves a Payment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Payment
   * fields String Comma-separated properties to provide in response (optional)
   * returns Payment
   **/
  const retrievePayment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Payment";
        context.operationId  = "retrievePayment";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrievePayment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPayment,
  listPayment,
  retrievePayment,
};
