/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOrderRiskAssessment
   * This operation creates a ProductOrderRiskAssessment entity.
   *
   * productOrderRiskAssessment ProductOrderRiskAssessmentCreate The ProductOrderRiskAssessment to be created
   * returns ProductOrderRiskAssessment
   **/
  const createProductOrderRiskAssessment =  ( args, context /* productOrderRiskAssessment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrderRiskAssessment";
        context.operationId  = "createProductOrderRiskAssessment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOrderRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOrderRiskAssessment
   * This operation deletes a ProductOrderRiskAssessment entity.
   *
   * id String Identifier of the ProductOrderRiskAssessment
   * no response value expected for this operation
   **/
  const deleteProductOrderRiskAssessment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrderRiskAssessment";
        context.operationId  = "deleteProductOrderRiskAssessment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOrderRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOrderRiskAssessment objects
   * This operation list or find ProductOrderRiskAssessment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOrderRiskAssessment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrderRiskAssessment";
        context.operationId  = "listProductOrderRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOrderRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOrderRiskAssessment by ID
   * This operation retrieves a ProductOrderRiskAssessment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOrderRiskAssessment
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOrderRiskAssessment
   **/
  const retrieveProductOrderRiskAssessment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOrderRiskAssessment";
        context.operationId  = "retrieveProductOrderRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOrderRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOrderRiskAssessment,
  deleteProductOrderRiskAssessment,
  listProductOrderRiskAssessment,
  retrieveProductOrderRiskAssessment,
};
