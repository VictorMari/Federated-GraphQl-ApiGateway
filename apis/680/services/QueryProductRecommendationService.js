/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a QueryProductRecommendation
   * This operation creates a QueryProductRecommendation entity.
   *
   * queryProductRecommendation QueryProductRecommendationCreate The QueryProductRecommendation to be created
   * returns QueryProductRecommendation
   **/
  const createQueryProductRecommendation =  ( args, context /* queryProductRecommendation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductRecommendation";
        context.operationId  = "createQueryProductRecommendation";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createQueryProductRecommendation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find QueryProductRecommendation objects
   * This operation list or find QueryProductRecommendation entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listQueryProductRecommendation =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductRecommendation";
        context.operationId  = "listQueryProductRecommendation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listQueryProductRecommendation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a QueryProductRecommendation by ID
   * This operation retrieves a QueryProductRecommendation entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the QueryProductRecommendation
   * fields String Comma-separated properties to provide in response (optional)
   * returns QueryProductRecommendation
   **/
  const retrieveQueryProductRecommendation =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "QueryProductRecommendation";
        context.operationId  = "retrieveQueryProductRecommendation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveQueryProductRecommendation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createQueryProductRecommendation,
  listQueryProductRecommendation,
  retrieveQueryProductRecommendation,
};
