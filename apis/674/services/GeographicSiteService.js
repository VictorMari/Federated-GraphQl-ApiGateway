/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a GeographicSite
   * This operation creates a GeographicSite entity.
   *
   * geographicSite GeographicSiteCreate The GeographicSite to be created
   * returns GeographicSite
   **/
  const createGeographicSite =  ( args, context /* geographicSite  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSite";
        context.operationId  = "createGeographicSite";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createGeographicSite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a GeographicSite
   * This operation deletes a GeographicSite entity.
   *
   * id String Identifier of the GeographicSite
   * no response value expected for this operation
   **/
  const deleteGeographicSite =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSite";
        context.operationId  = "deleteGeographicSite";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteGeographicSite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find GeographicSite objects
   * This operation list or find GeographicSite entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeographicSite =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSite";
        context.operationId  = "listGeographicSite";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeographicSite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a GeographicSite
   * This operation updates partially a GeographicSite entity.
   *
   * id String Identifier of the GeographicSite
   * geographicSite GeographicSiteUpdate The GeographicSite to be updated
   * returns GeographicSite
   **/
  const patchGeographicSite =  ( args, context /* idgeographicSite  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSite";
        context.operationId  = "patchGeographicSite";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchGeographicSite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeographicSite by ID
   * This operation retrieves a GeographicSite entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GeographicSite
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeographicSite
   **/
  const retrieveGeographicSite =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeographicSite";
        context.operationId  = "retrieveGeographicSite";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeographicSite: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createGeographicSite,
  deleteGeographicSite,
  listGeographicSite,
  patchGeographicSite,
  retrieveGeographicSite,
};
