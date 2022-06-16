/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a GeographicLocation
   * This operation creates a GeographicLocation entity.
   *
   * geographicLocation GeographicLocationCreate The GeographicLocation to be created
   * returns GeographicLocation
   **/
  const createGeographicLocation =  ( args, context /* geographicLocation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicLocation";
        context.operationId  = "createGeographicLocation";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createGeographicLocation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a GeographicLocation
   * This operation deletes a GeographicLocation entity.
   *
   * id String Identifier of the GeographicLocation
   * no response value expected for this operation
   **/
  const deleteGeographicLocation =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicLocation";
        context.operationId  = "deleteGeographicLocation";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteGeographicLocation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find GeographicLocation objects
   * This operation list or find GeographicLocation entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeographicLocation =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicLocation";
        context.operationId  = "listGeographicLocation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeographicLocation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a GeographicLocation
   * This operation updates partially a GeographicLocation entity.
   *
   * id String Identifier of the GeographicLocation
   * geographicLocation GeographicLocationUpdate The GeographicLocation to be updated
   * returns GeographicLocation
   **/
  const patchGeographicLocation =  ( args, context /* idgeographicLocation  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicLocation";
        context.operationId  = "patchGeographicLocation";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchGeographicLocation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeographicLocation by ID
   * This operation retrieves a GeographicLocation entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GeographicLocation
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeographicLocation
   **/
  const retrieveGeographicLocation =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicLocation";
        context.operationId  = "retrieveGeographicLocation";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeographicLocation: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createGeographicLocation,
  deleteGeographicLocation,
  listGeographicLocation,
  patchGeographicLocation,
  retrieveGeographicLocation,
};
