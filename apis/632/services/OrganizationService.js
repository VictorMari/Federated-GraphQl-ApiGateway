/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Organization
   * This operation creates a Organization entity.
   *
   * organization OrganizationCreate The Organization to be created
   * returns Organization
   **/
  const createOrganization =  ( args, context /* organization  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Organization";
        context.operationId  = "createOrganization";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createOrganization: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Organization
   * This operation deletes a Organization entity.
   *
   * id String Identifier of the Organization
   * no response value expected for this operation
   **/
  const deleteOrganization =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Organization";
        context.operationId  = "deleteOrganization";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteOrganization: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Organization objects
   * This operation list or find Organization entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listOrganization =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Organization";
        context.operationId  = "listOrganization";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listOrganization: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Organization
   * This operation updates partially a Organization entity.
   *
   * id String Identifier of the Organization
   * organization OrganizationUpdate The Organization to be updated
   * returns Organization
   **/
  const patchOrganization =  ( args, context /* idorganization  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Organization";
        context.operationId  = "patchOrganization";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchOrganization: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Organization by ID
   * This operation retrieves a Organization entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Organization
   * fields String Comma-separated properties to provide in response (optional)
   * returns Organization
   **/
  const retrieveOrganization =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Organization";
        context.operationId  = "retrieveOrganization";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveOrganization: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createOrganization,
  deleteOrganization,
  listOrganization,
  patchOrganization,
  retrieveOrganization,
};
