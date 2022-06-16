/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Deletes a UsageConsumptionReport
   * This operation deletes a UsageConsumptionReport entity.
   *
   * id String Identifier of the UsageConsumptionReport
   * no response value expected for this operation
   **/
  const deleteUsageConsumptionReport =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReport";
        context.operationId  = "deleteUsageConsumptionReport";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteUsageConsumptionReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UsageConsumptionReport objects
   * This operation list or find UsageConsumptionReport entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUsageConsumptionReport =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReport";
        context.operationId  = "listUsageConsumptionReport";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUsageConsumptionReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UsageConsumptionReport by ID
   * This operation retrieves a UsageConsumptionReport entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UsageConsumptionReport
   * fields String Comma-separated properties to provide in response (optional)
   * returns UsageConsumptionReport
   **/
  const retrieveUsageConsumptionReport =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UsageConsumptionReport";
        context.operationId  = "retrieveUsageConsumptionReport";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUsageConsumptionReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  deleteUsageConsumptionReport,
  listUsageConsumptionReport,
  retrieveUsageConsumptionReport,
};
