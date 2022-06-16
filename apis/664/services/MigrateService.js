/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Migrate
   * This operation creates a Migrate entity.
   *
   * migrate MigrateCreate The Migrate to be created
   * returns Migrate
   **/
  const createMigrate =  ( args, context /* migrate  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Migrate";
        context.operationId  = "createMigrate";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createMigrate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Migrate objects
   * This operation list or find Migrate entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listMigrate =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Migrate";
        context.operationId  = "listMigrate";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listMigrate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Migrate by ID
   * This operation retrieves a Migrate entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Migrate
   * fields String Comma-separated properties to provide in response (optional)
   * returns Migrate
   **/
  const retrieveMigrate =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Migrate";
        context.operationId  = "retrieveMigrate";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveMigrate: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createMigrate,
  listMigrate,
  retrieveMigrate,
};
