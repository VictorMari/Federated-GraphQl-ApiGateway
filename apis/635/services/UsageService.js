/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Usage
   * This operation creates a Usage entity.
   *
   * usage UsageCreate The Usage to be created
   * returns Usage
   **/
  const createUsage =  ( args, context /* usage  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Usage";
        context.operationId  = "createUsage";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createUsage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Usage
   * This operation deletes a Usage entity.
   *
   * id String Identifier of the Usage
   * no response value expected for this operation
   **/
  const deleteUsage =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Usage";
        context.operationId  = "deleteUsage";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteUsage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Usage objects
   * This operation list or find Usage entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUsage =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Usage";
        context.operationId  = "listUsage";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listUsage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Usage
   * This operation updates partially a Usage entity.
   *
   * id String Identifier of the Usage
   * usage UsageUpdate The Usage to be updated
   * returns Usage
   **/
  const patchUsage =  ( args, context /* idusage  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Usage";
        context.operationId  = "patchUsage";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchUsage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Usage by ID
   * This operation retrieves a Usage entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Usage
   * fields String Comma-separated properties to provide in response (optional)
   * returns Usage
   **/
  const retrieveUsage =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Usage";
        context.operationId  = "retrieveUsage";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveUsage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createUsage,
  deleteUsage,
  listUsage,
  patchUsage,
  retrieveUsage,
};
