/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartyRole
   * This operation creates a PartyRole entity.
   *
   * partyRole PartyRoleCreate The PartyRole to be created
   * returns PartyRole
   **/
  const createPartyRole =  ( args, context /* partyRole  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRole";
        context.operationId  = "createPartyRole";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartyRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartyRole
   * This operation deletes a PartyRole entity.
   *
   * id String Identifier of the PartyRole
   * no response value expected for this operation
   **/
  const deletePartyRole =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRole";
        context.operationId  = "deletePartyRole";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartyRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartyRole objects
   * This operation list or find PartyRole entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartyRole =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRole";
        context.operationId  = "listPartyRole";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartyRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PartyRole
   * This operation updates partially a PartyRole entity.
   *
   * id String Identifier of the PartyRole
   * partyRole PartyRoleUpdate The PartyRole to be updated
   * returns PartyRole
   **/
  const patchPartyRole =  ( args, context /* idpartyRole  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRole";
        context.operationId  = "patchPartyRole";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPartyRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartyRole by ID
   * This operation retrieves a PartyRole entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartyRole
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartyRole
   **/
  const retrievePartyRole =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRole";
        context.operationId  = "retrievePartyRole";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartyRole: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartyRole,
  deletePartyRole,
  listPartyRole,
  patchPartyRole,
  retrievePartyRole,
};
