/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a GeneralTestArtifact
   * This operation creates a GeneralTestArtifact entity.
   *
   * generalTestArtifact GeneralTestArtifactCreate The GeneralTestArtifact to be created
   * returns GeneralTestArtifact
   **/
  const createGeneralTestArtifact =  ( args, context /* generalTestArtifact  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeneralTestArtifact";
        context.operationId  = "createGeneralTestArtifact";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createGeneralTestArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a GeneralTestArtifact
   * This operation deletes a GeneralTestArtifact entity.
   *
   * id String Identifier of the GeneralTestArtifact
   * no response value expected for this operation
   **/
  const deleteGeneralTestArtifact =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeneralTestArtifact";
        context.operationId  = "deleteGeneralTestArtifact";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteGeneralTestArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find GeneralTestArtifact objects
   * This operation list or find GeneralTestArtifact entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGeneralTestArtifact =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeneralTestArtifact";
        context.operationId  = "listGeneralTestArtifact";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGeneralTestArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a GeneralTestArtifact
   * This operation updates partially a GeneralTestArtifact entity.
   *
   * id String Identifier of the GeneralTestArtifact
   * generalTestArtifact GeneralTestArtifactUpdate The GeneralTestArtifact to be updated
   * returns GeneralTestArtifact
   **/
  const patchGeneralTestArtifact =  ( args, context /* idgeneralTestArtifact  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeneralTestArtifact";
        context.operationId  = "patchGeneralTestArtifact";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchGeneralTestArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GeneralTestArtifact by ID
   * This operation retrieves a GeneralTestArtifact entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GeneralTestArtifact
   * fields String Comma-separated properties to provide in response (optional)
   * returns GeneralTestArtifact
   **/
  const retrieveGeneralTestArtifact =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GeneralTestArtifact";
        context.operationId  = "retrieveGeneralTestArtifact";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGeneralTestArtifact: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createGeneralTestArtifact,
  deleteGeneralTestArtifact,
  listGeneralTestArtifact,
  patchGeneralTestArtifact,
  retrieveGeneralTestArtifact,
};
