/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Quote
   * This operation creates a Quote entity.
   *
   * quote QuoteCreate The Quote to be created
   * returns Quote
   **/
  const createQuote =  ( args, context /* quote  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Quote";
        context.operationId  = "createQuote";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createQuote: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Quote
   * This operation deletes a Quote entity.
   *
   * id String Identifier of the Quote
   * no response value expected for this operation
   **/
  const deleteQuote =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Quote";
        context.operationId  = "deleteQuote";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteQuote: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Quote objects
   * This operation list or find Quote entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listQuote =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Quote";
        context.operationId  = "listQuote";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listQuote: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Quote
   * This operation updates partially a Quote entity.
   *
   * id String Identifier of the Quote
   * quote QuoteUpdate The Quote to be updated
   * returns Quote
   **/
  const patchQuote =  ( args, context /* idquote  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Quote";
        context.operationId  = "patchQuote";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchQuote: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Quote by ID
   * This operation retrieves a Quote entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Quote
   * fields String Comma-separated properties to provide in response (optional)
   * returns Quote
   **/
  const retrieveQuote =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Quote";
        context.operationId  = "retrieveQuote";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveQuote: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createQuote,
  deleteQuote,
  listQuote,
  patchQuote,
  retrieveQuote,
};
