/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a AgreementSpecification
   * This operation creates a AgreementSpecification entity.
   *
   * agreementSpecification AgreementSpecificationCreate The AgreementSpecification to be created
   * returns AgreementSpecification
   **/
  const createAgreementSpecification =  ( args, context /* agreementSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AgreementSpecification";
        context.operationId  = "createAgreementSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createAgreementSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a AgreementSpecification
   * This operation deletes a AgreementSpecification entity.
   *
   * id String Identifier of the AgreementSpecification
   * no response value expected for this operation
   **/
  const deleteAgreementSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AgreementSpecification";
        context.operationId  = "deleteAgreementSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteAgreementSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find AgreementSpecification objects
   * This operation list or find AgreementSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAgreementSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AgreementSpecification";
        context.operationId  = "listAgreementSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listAgreementSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a AgreementSpecification
   * This operation updates partially a AgreementSpecification entity.
   *
   * id String Identifier of the AgreementSpecification
   * agreementSpecification AgreementSpecificationUpdate The AgreementSpecification to be updated
   * returns AgreementSpecification
   **/
  const patchAgreementSpecification =  ( args, context /* idagreementSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AgreementSpecification";
        context.operationId  = "patchAgreementSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchAgreementSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a AgreementSpecification by ID
   * This operation retrieves a AgreementSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the AgreementSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns AgreementSpecification
   **/
  const retrieveAgreementSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "AgreementSpecification";
        context.operationId  = "retrieveAgreementSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveAgreementSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAgreementSpecification,
  deleteAgreementSpecification,
  listAgreementSpecification,
  patchAgreementSpecification,
  retrieveAgreementSpecification,
};
