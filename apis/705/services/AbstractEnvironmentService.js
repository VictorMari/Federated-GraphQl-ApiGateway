/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AbstractEnvironment
   * This operation creates a AbstractEnvironment entity.
   *
   * abstractEnvironment AbstractEnvironmentCreate The AbstractEnvironment to be created
   * returns AbstractEnvironment
   **/
  const createAbstractEnvironment =  ( args, context /* abstractEnvironment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AbstractEnvironment";
        context.operationId  = "createAbstractEnvironment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAbstractEnvironment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AbstractEnvironment
   * This operation deletes a AbstractEnvironment entity.
   *
   * id String Identifier of the AbstractEnvironment
   * no response value expected for this operation
   **/
  const deleteAbstractEnvironment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AbstractEnvironment";
        context.operationId  = "deleteAbstractEnvironment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAbstractEnvironment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AbstractEnvironment objects
   * This operation list or find AbstractEnvironment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAbstractEnvironment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AbstractEnvironment";
        context.operationId  = "listAbstractEnvironment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAbstractEnvironment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AbstractEnvironment
   * This operation updates partially a AbstractEnvironment entity.
   *
   * id String Identifier of the AbstractEnvironment
   * abstractEnvironment AbstractEnvironmentUpdate The AbstractEnvironment to be updated
   * returns AbstractEnvironment
   **/
  const patchAbstractEnvironment =  ( args, context /* idabstractEnvironment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AbstractEnvironment";
        context.operationId  = "patchAbstractEnvironment";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAbstractEnvironment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AbstractEnvironment by ID
   * This operation retrieves a AbstractEnvironment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AbstractEnvironment
   * fields String Comma-separated properties to provide in response (optional)
   * returns AbstractEnvironment
   **/
  const retrieveAbstractEnvironment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AbstractEnvironment";
        context.operationId  = "retrieveAbstractEnvironment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAbstractEnvironment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAbstractEnvironment,
  deleteAbstractEnvironment,
  listAbstractEnvironment,
  patchAbstractEnvironment,
  retrieveAbstractEnvironment,
};
