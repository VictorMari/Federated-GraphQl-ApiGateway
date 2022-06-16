/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a GeographicAddressValidation
   * This operation creates a GeographicAddressValidation entity.
   *
   * geographicAddressValidation GeographicAddressValidationCreate The GeographicAddressValidation to be created
   * returns GeographicAddressValidation
   **/
  const createGeographicAddressValidation =  ( args, context /* geographicAddressValidation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddressValidation";
        context.operationId  = "createGeographicAddressValidation";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createGeographicAddressValidation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find GeographicAddressValidation objects
   * This operation list or find GeographicAddressValidation entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeographicAddressValidation =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddressValidation";
        context.operationId  = "listGeographicAddressValidation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeographicAddressValidation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a GeographicAddressValidation
   * This operation updates partially a GeographicAddressValidation entity.
   *
   * id String Identifier of the GeographicAddressValidation
   * geographicAddressValidation GeographicAddressValidationUpdate The GeographicAddressValidation to be updated
   * returns GeographicAddressValidation
   **/
  const patchGeographicAddressValidation =  ( args, context /* idgeographicAddressValidation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddressValidation";
        context.operationId  = "patchGeographicAddressValidation";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchGeographicAddressValidation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeographicAddressValidation by ID
   * This operation retrieves a GeographicAddressValidation entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GeographicAddressValidation
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeographicAddressValidation
   **/
  const retrieveGeographicAddressValidation =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicAddressValidation";
        context.operationId  = "retrieveGeographicAddressValidation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeographicAddressValidation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createGeographicAddressValidation,
  listGeographicAddressValidation,
  patchGeographicAddressValidation,
  retrieveGeographicAddressValidation,
};
