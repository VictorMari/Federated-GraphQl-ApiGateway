/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find GeographicSubAddress objects
   * This operation list or find GeographicSubAddress entities
   *
   * geographicAddressId String Identifier of the parent GeographicAddress entity
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeographicSubAddress =  ( args, context /* geographicAddressIdfieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSubAddress";
        context.operationId  = "listGeographicSubAddress";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeographicSubAddress: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeographicSubAddress by ID
   * This operation retrieves a GeographicSubAddress entity. Attribute selection is enabled for all first level attributes.
   *
   * geographicAddressId String Identifier of the parent GeographicAddress entity
   * id String Identifier of the GeographicSubAddress
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeographicSubAddress
   **/
  const retrieveGeographicSubAddress =  ( args, context /* geographicAddressIdidfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSubAddress";
        context.operationId  = "retrieveGeographicSubAddress";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeographicSubAddress: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listGeographicSubAddress,
  retrieveGeographicSubAddress,
};
