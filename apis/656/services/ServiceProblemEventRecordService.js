/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find ServiceProblemEventRecord objects
   * This operation list or find ServiceProblemEventRecord entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listServiceProblemEventRecord =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblemEventRecord";
        context.operationId  = "listServiceProblemEventRecord";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listServiceProblemEventRecord: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ServiceProblemEventRecord by ID
   * This operation retrieves a ServiceProblemEventRecord entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ServiceProblemEventRecord
   * fields String Comma-separated properties to provide in response (optional)
   * returns ServiceProblemEventRecord
   **/
  const retrieveServiceProblemEventRecord =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ServiceProblemEventRecord";
        context.operationId  = "retrieveServiceProblemEventRecord";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveServiceProblemEventRecord: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listServiceProblemEventRecord,
  retrieveServiceProblemEventRecord,
};
