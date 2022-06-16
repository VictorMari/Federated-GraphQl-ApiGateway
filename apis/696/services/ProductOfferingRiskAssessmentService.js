/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOfferingRiskAssessment
   * This operation creates a ProductOfferingRiskAssessment entity.
   *
   * productOfferingRiskAssessment ProductOfferingRiskAssessmentCreate The ProductOfferingRiskAssessment to be created
   * returns ProductOfferingRiskAssessment
   **/
  const createProductOfferingRiskAssessment =  ( args, context /* productOfferingRiskAssessment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingRiskAssessment";
        context.operationId  = "createProductOfferingRiskAssessment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOfferingRiskAssessment
   * This operation deletes a ProductOfferingRiskAssessment entity.
   *
   * id String Identifier of the ProductOfferingRiskAssessment
   * no response value expected for this operation
   **/
  const deleteProductOfferingRiskAssessment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingRiskAssessment";
        context.operationId  = "deleteProductOfferingRiskAssessment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOfferingRiskAssessment objects
   * This operation list or find ProductOfferingRiskAssessment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOfferingRiskAssessment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingRiskAssessment";
        context.operationId  = "listProductOfferingRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOfferingRiskAssessment by ID
   * This operation retrieves a ProductOfferingRiskAssessment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOfferingRiskAssessment
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOfferingRiskAssessment
   **/
  const retrieveProductOfferingRiskAssessment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingRiskAssessment";
        context.operationId  = "retrieveProductOfferingRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOfferingRiskAssessment,
  deleteProductOfferingRiskAssessment,
  listProductOfferingRiskAssessment,
  retrieveProductOfferingRiskAssessment,
};
