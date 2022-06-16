/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CommunicationMessage
   * This operation creates a CommunicationMessage entity.
   *
   * communicationMessage CommunicationMessageCreate The CommunicationMessage to be created
   * returns CommunicationMessage
   **/
  const createCommunicationMessage =  ( args, context /* communicationMessage  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommunicationMessage";
        context.operationId  = "createCommunicationMessage";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCommunicationMessage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a CommunicationMessage
   * This operation deletes a CommunicationMessage entity.
   *
   * id String Identifier of the CommunicationMessage
   * no response value expected for this operation
   **/
  const deleteCommunicationMessage =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommunicationMessage";
        context.operationId  = "deleteCommunicationMessage";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteCommunicationMessage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CommunicationMessage objects
   * This operation list or find CommunicationMessage entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCommunicationMessage =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommunicationMessage";
        context.operationId  = "listCommunicationMessage";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCommunicationMessage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a CommunicationMessage
   * This operation updates partially a CommunicationMessage entity.
   *
   * id String Identifier of the CommunicationMessage
   * communicationMessage CommunicationMessageUpdate The CommunicationMessage to be updated
   * returns CommunicationMessage
   **/
  const patchCommunicationMessage =  ( args, context /* idcommunicationMessage  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommunicationMessage";
        context.operationId  = "patchCommunicationMessage";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchCommunicationMessage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CommunicationMessage by ID
   * This operation retrieves a CommunicationMessage entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CommunicationMessage
   * fields String Comma-separated properties to provide in response (optional)
   * returns CommunicationMessage
   **/
  const retrieveCommunicationMessage =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommunicationMessage";
        context.operationId  = "retrieveCommunicationMessage";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCommunicationMessage: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCommunicationMessage,
  deleteCommunicationMessage,
  listCommunicationMessage,
  patchCommunicationMessage,
  retrieveCommunicationMessage,
};
