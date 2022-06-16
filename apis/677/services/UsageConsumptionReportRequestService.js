/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a UsageConsumptionReportRequest
   * This operation creates a UsageConsumptionReportRequest entity.
   *
   * usageConsumptionReportRequest UsageConsumptionReportRequestCreate The UsageConsumptionReportRequest to be created
   * returns UsageConsumptionReportRequest
   **/
  const createUsageConsumptionReportRequest =  ( args, context /* usageConsumptionReportRequest  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReportRequest";
        context.operationId  = "createUsageConsumptionReportRequest";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createUsageConsumptionReportRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a UsageConsumptionReportRequest
   * This operation deletes a UsageConsumptionReportRequest entity.
   *
   * id String Identifier of the UsageConsumptionReportRequest
   * no response value expected for this operation
   **/
  const deleteUsageConsumptionReportRequest =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReportRequest";
        context.operationId  = "deleteUsageConsumptionReportRequest";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteUsageConsumptionReportRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UsageConsumptionReportRequest objects
   * This operation list or find UsageConsumptionReportRequest entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUsageConsumptionReportRequest =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReportRequest";
        context.operationId  = "listUsageConsumptionReportRequest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUsageConsumptionReportRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UsageConsumptionReportRequest by ID
   * This operation retrieves a UsageConsumptionReportRequest entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UsageConsumptionReportRequest
   * fields String Comma-separated properties to provide in response (optional)
   * returns UsageConsumptionReportRequest
   **/
  const retrieveUsageConsumptionReportRequest =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReportRequest";
        context.operationId  = "retrieveUsageConsumptionReportRequest";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUsageConsumptionReportRequest: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUsageConsumptionReportRequest,
  deleteUsageConsumptionReportRequest,
  listUsageConsumptionReportRequest,
  retrieveUsageConsumptionReportRequest,
};
