/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProvisioningArtifact
   * This operation creates a ProvisioningArtifact entity.
   *
   * provisioningArtifact ProvisioningArtifactCreate The ProvisioningArtifact to be created
   * returns ProvisioningArtifact
   **/
  const createProvisioningArtifact =  ( args, context /* provisioningArtifact  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProvisioningArtifact";
        context.operationId  = "createProvisioningArtifact";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProvisioningArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProvisioningArtifact
   * This operation deletes a ProvisioningArtifact entity.
   *
   * id String Identifier of the ProvisioningArtifact
   * no response value expected for this operation
   **/
  const deleteProvisioningArtifact =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProvisioningArtifact";
        context.operationId  = "deleteProvisioningArtifact";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProvisioningArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProvisioningArtifact objects
   * This operation list or find ProvisioningArtifact entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProvisioningArtifact =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProvisioningArtifact";
        context.operationId  = "listProvisioningArtifact";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProvisioningArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProvisioningArtifact
   * This operation updates partially a ProvisioningArtifact entity.
   *
   * id String Identifier of the ProvisioningArtifact
   * provisioningArtifact ProvisioningArtifactUpdate The ProvisioningArtifact to be updated
   * returns ProvisioningArtifact
   **/
  const patchProvisioningArtifact =  ( args, context /* idprovisioningArtifact  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProvisioningArtifact";
        context.operationId  = "patchProvisioningArtifact";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProvisioningArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProvisioningArtifact by ID
   * This operation retrieves a ProvisioningArtifact entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProvisioningArtifact
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProvisioningArtifact
   **/
  const retrieveProvisioningArtifact =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProvisioningArtifact";
        context.operationId  = "retrieveProvisioningArtifact";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProvisioningArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProvisioningArtifact,
  deleteProvisioningArtifact,
  listProvisioningArtifact,
  patchProvisioningArtifact,
  retrieveProvisioningArtifact,
};
