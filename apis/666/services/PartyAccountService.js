/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartyAccount
   * This operation creates a PartyAccount entity.
   *
   * partyAccount PartyAccountCreate The PartyAccount to be created
   * returns PartyAccount
   **/
  const createPartyAccount =  ( args, context /* partyAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyAccount";
        context.operationId  = "createPartyAccount";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartyAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartyAccount
   * This operation deletes a PartyAccount entity.
   *
   * id String Identifier of the PartyAccount
   * no response value expected for this operation
   **/
  const deletePartyAccount =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyAccount";
        context.operationId  = "deletePartyAccount";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartyAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartyAccount objects
   * This operation list or find PartyAccount entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartyAccount =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyAccount";
        context.operationId  = "listPartyAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartyAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a PartyAccount
   * This operation updates partially a PartyAccount entity.
   *
   * id String Identifier of the PartyAccount
   * partyAccount PartyAccountUpdate The PartyAccount to be updated
   * returns PartyAccount
   **/
  const patchPartyAccount =  ( args, context /* idpartyAccount  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyAccount";
        context.operationId  = "patchPartyAccount";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchPartyAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartyAccount by ID
   * This operation retrieves a PartyAccount entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartyAccount
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartyAccount
   **/
  const retrievePartyAccount =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyAccount";
        context.operationId  = "retrievePartyAccount";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartyAccount: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartyAccount,
  deletePartyAccount,
  listPartyAccount,
  patchPartyAccount,
  retrievePartyAccount,
};
