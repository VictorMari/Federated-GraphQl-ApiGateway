/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartyInteraction
   * This operation creates a PartyInteraction entity.
   *
   * partyInteraction PartyInteractionCreate The PartyInteraction to be created
   * returns PartyInteraction
   **/
  const createPartyInteraction =  ( args, context /* partyInteraction  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyInteraction";
        context.operationId  = "createPartyInteraction";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartyInteraction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartyInteraction
   * This operation deletes a PartyInteraction entity.
   *
   * id String Identifier of the PartyInteraction
   * no response value expected for this operation
   **/
  const deletePartyInteraction =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyInteraction";
        context.operationId  = "deletePartyInteraction";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartyInteraction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartyInteraction objects
   * This operation list or find PartyInteraction entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartyInteraction =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyInteraction";
        context.operationId  = "listPartyInteraction";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartyInteraction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PartyInteraction
   * This operation updates partially a PartyInteraction entity.
   *
   * id String Identifier of the PartyInteraction
   * partyInteraction PartyInteractionUpdate The PartyInteraction to be updated
   * returns PartyInteraction
   **/
  const patchPartyInteraction =  ( args, context /* idpartyInteraction  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyInteraction";
        context.operationId  = "patchPartyInteraction";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPartyInteraction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartyInteraction by ID
   * This operation retrieves a PartyInteraction entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartyInteraction
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartyInteraction
   **/
  const retrievePartyInteraction =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyInteraction";
        context.operationId  = "retrievePartyInteraction";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartyInteraction: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartyInteraction,
  deletePartyInteraction,
  listPartyInteraction,
  patchPartyInteraction,
  retrievePartyInteraction,
};
