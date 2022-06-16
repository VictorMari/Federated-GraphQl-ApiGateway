/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AssociationSpecification
   * This operation creates a AssociationSpecification entity.
   *
   * associationSpecification AssociationSpecificationCreate The AssociationSpecification to be created
   * returns AssociationSpecification
   **/
  const createAssociationSpecification =  ( args, context /* associationSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AssociationSpecification";
        context.operationId  = "createAssociationSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAssociationSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AssociationSpecification
   * This operation deletes a AssociationSpecification entity.
   *
   * id String Identifier of the AssociationSpecification
   * no response value expected for this operation
   **/
  const deleteAssociationSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AssociationSpecification";
        context.operationId  = "deleteAssociationSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAssociationSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AssociationSpecification objects
   * This operation list or find AssociationSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAssociationSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AssociationSpecification";
        context.operationId  = "listAssociationSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAssociationSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AssociationSpecification
   * This operation updates partially a AssociationSpecification entity.
   *
   * id String Identifier of the AssociationSpecification
   * associationSpecification AssociationSpecificationUpdate The AssociationSpecification to be updated
   * returns AssociationSpecification
   **/
  const patchAssociationSpecification =  ( args, context /* idassociationSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AssociationSpecification";
        context.operationId  = "patchAssociationSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAssociationSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AssociationSpecification by ID
   * This operation retrieves a AssociationSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AssociationSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns AssociationSpecification
   **/
  const retrieveAssociationSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AssociationSpecification";
        context.operationId  = "retrieveAssociationSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAssociationSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAssociationSpecification,
  deleteAssociationSpecification,
  listAssociationSpecification,
  patchAssociationSpecification,
  retrieveAssociationSpecification,
};
