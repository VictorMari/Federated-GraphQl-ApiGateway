/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a UserRole
   * This operation creates a UserRole entity.
   *
   * userRole UserRoleCreate The UserRole to be created
   * returns UserRole
   **/
  const createUserRole =  ( args, context /* userRole  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UserRole";
        context.operationId  = "createUserRole";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createUserRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find UserRole objects
   * This operation list or find UserRole entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUserRole =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UserRole";
        context.operationId  = "listUserRole";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listUserRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a UserRole
   * This operation updates partially a UserRole entity.
   *
   * id String Identifier of the UserRole
   * userRole UserRoleUpdate The UserRole to be updated
   * returns UserRole
   **/
  const patchUserRole =  ( args, context /* iduserRole  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UserRole";
        context.operationId  = "patchUserRole";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchUserRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a UserRole by ID
   * This operation retrieves a UserRole entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the UserRole
   * fields String Comma-separated properties to provide in response (optional)
   * returns UserRole
   **/
  const retrieveUserRole =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "UserRole";
        context.operationId  = "retrieveUserRole";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveUserRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUserRole,
  listUserRole,
  patchUserRole,
  retrieveUserRole,
};
