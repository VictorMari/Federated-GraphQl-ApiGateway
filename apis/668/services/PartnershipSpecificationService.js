/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartnershipSpecification
   * This operation creates a PartnershipSpecification entity.
   *
   * partnershipSpecification PartnershipSpecificationCreate The PartnershipSpecification to be created
   * returns PartnershipSpecification
   **/
  const createPartnershipSpecification =  ( args, context /* partnershipSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartnershipSpecification";
        context.operationId  = "createPartnershipSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartnershipSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartnershipSpecification
   * This operation deletes a PartnershipSpecification entity.
   *
   * id String Identifier of the PartnershipSpecification
   * no response value expected for this operation
   **/
  const deletePartnershipSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartnershipSpecification";
        context.operationId  = "deletePartnershipSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartnershipSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartnershipSpecification objects
   * This operation list or find PartnershipSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartnershipSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartnershipSpecification";
        context.operationId  = "listPartnershipSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartnershipSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PartnershipSpecification
   * This operation updates partially a PartnershipSpecification entity.
   *
   * id String Identifier of the PartnershipSpecification
   * partnershipSpecification PartnershipSpecificationUpdate The PartnershipSpecification to be updated
   * returns PartnershipSpecification
   **/
  const patchPartnershipSpecification =  ( args, context /* idpartnershipSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartnershipSpecification";
        context.operationId  = "patchPartnershipSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPartnershipSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartnershipSpecification by ID
   * This operation retrieves a PartnershipSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartnershipSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartnershipSpecification
   **/
  const retrievePartnershipSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartnershipSpecification";
        context.operationId  = "retrievePartnershipSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartnershipSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartnershipSpecification,
  deletePartnershipSpecification,
  listPartnershipSpecification,
  patchPartnershipSpecification,
  retrievePartnershipSpecification,
};
