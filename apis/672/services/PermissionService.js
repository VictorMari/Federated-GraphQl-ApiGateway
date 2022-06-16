/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Permission
   * This operation creates a Permission entity.
   *
   * permission PermissionCreate The Permission to be created
   * returns Permission
   **/
  const createPermission =  ( args, context /* permission  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Permission";
        context.operationId  = "createPermission";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createPermission: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Permission objects
   * This operation list or find Permission entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPermission =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Permission";
        context.operationId  = "listPermission";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listPermission: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Permission
   * This operation updates partially a Permission entity.
   *
   * id String Identifier of the Permission
   * permission PermissionUpdate The Permission to be updated
   * returns Permission
   **/
  const patchPermission =  ( args, context /* idpermission  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Permission";
        context.operationId  = "patchPermission";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchPermission: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Permission by ID
   * This operation retrieves a Permission entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Permission
   * fields String Comma-separated properties to provide in response (optional)
   * returns Permission
   **/
  const retrievePermission =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Permission";
        context.operationId  = "retrievePermission";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrievePermission: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPermission,
  listPermission,
  patchPermission,
  retrievePermission,
};
