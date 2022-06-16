/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ShoppingCartRiskAssessment
   * This operation creates a ShoppingCartRiskAssessment entity.
   *
   * shoppingCartRiskAssessment ShoppingCartRiskAssessmentCreate The ShoppingCartRiskAssessment to be created
   * returns ShoppingCartRiskAssessment
   **/
  const createShoppingCartRiskAssessment =  ( args, context /* shoppingCartRiskAssessment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCartRiskAssessment";
        context.operationId  = "createShoppingCartRiskAssessment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createShoppingCartRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ShoppingCartRiskAssessment
   * This operation deletes a ShoppingCartRiskAssessment entity.
   *
   * id String Identifier of the ShoppingCartRiskAssessment
   * no response value expected for this operation
   **/
  const deleteShoppingCartRiskAssessment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCartRiskAssessment";
        context.operationId  = "deleteShoppingCartRiskAssessment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteShoppingCartRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ShoppingCartRiskAssessment objects
   * This operation list or find ShoppingCartRiskAssessment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listShoppingCartRiskAssessment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCartRiskAssessment";
        context.operationId  = "listShoppingCartRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listShoppingCartRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ShoppingCartRiskAssessment by ID
   * This operation retrieves a ShoppingCartRiskAssessment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ShoppingCartRiskAssessment
   * fields String Comma-separated properties to provide in response (optional)
   * returns ShoppingCartRiskAssessment
   **/
  const retrieveShoppingCartRiskAssessment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ShoppingCartRiskAssessment";
        context.operationId  = "retrieveShoppingCartRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveShoppingCartRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createShoppingCartRiskAssessment,
  deleteShoppingCartRiskAssessment,
  listShoppingCartRiskAssessment,
  retrieveShoppingCartRiskAssessment,
};
