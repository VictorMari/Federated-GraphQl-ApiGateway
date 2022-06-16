/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a EntitySpecification
   * This operation creates a EntitySpecification entity.
   *
   * entitySpecification EntitySpecificationCreate The EntitySpecification to be created
   * returns EntitySpecification
   **/
  const createEntitySpecification =  ( args, context /* entitySpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntitySpecification";
        context.operationId  = "createEntitySpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createEntitySpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a EntitySpecification
   * This operation deletes a EntitySpecification entity.
   *
   * id String Identifier of the EntitySpecification
   * no response value expected for this operation
   **/
  const deleteEntitySpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntitySpecification";
        context.operationId  = "deleteEntitySpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteEntitySpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find EntitySpecification objects
   * This operation list or find EntitySpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listEntitySpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntitySpecification";
        context.operationId  = "listEntitySpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listEntitySpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a EntitySpecification
   * This operation updates partially a EntitySpecification entity.
   *
   * id String Identifier of the EntitySpecification
   * entitySpecification EntitySpecificationUpdate The EntitySpecification to be updated
   * returns EntitySpecification
   **/
  const patchEntitySpecification =  ( args, context /* identitySpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntitySpecification";
        context.operationId  = "patchEntitySpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchEntitySpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a EntitySpecification by ID
   * This operation retrieves a EntitySpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the EntitySpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns EntitySpecification
   **/
  const retrieveEntitySpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "EntitySpecification";
        context.operationId  = "retrieveEntitySpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveEntitySpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createEntitySpecification,
  deleteEntitySpecification,
  listEntitySpecification,
  patchEntitySpecification,
  retrieveEntitySpecification,
};
