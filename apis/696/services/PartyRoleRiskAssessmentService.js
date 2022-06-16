/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartyRoleRiskAssessment
   * This operation creates a PartyRoleRiskAssessment entity.
   *
   * partyRoleRiskAssessment PartyRoleRiskAssessmentCreate The PartyRoleRiskAssessment to be created
   * returns PartyRoleRiskAssessment
   **/
  const createPartyRoleRiskAssessment =  ( args, context /* partyRoleRiskAssessment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleRiskAssessment";
        context.operationId  = "createPartyRoleRiskAssessment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartyRoleRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartyRoleRiskAssessment
   * This operation deletes a PartyRoleRiskAssessment entity.
   *
   * id String Identifier of the PartyRoleRiskAssessment
   * no response value expected for this operation
   **/
  const deletePartyRoleRiskAssessment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleRiskAssessment";
        context.operationId  = "deletePartyRoleRiskAssessment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartyRoleRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartyRoleRiskAssessment objects
   * This operation list or find PartyRoleRiskAssessment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartyRoleRiskAssessment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleRiskAssessment";
        context.operationId  = "listPartyRoleRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartyRoleRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartyRoleRiskAssessment by ID
   * This operation retrieves a PartyRoleRiskAssessment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartyRoleRiskAssessment
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartyRoleRiskAssessment
   **/
  const retrievePartyRoleRiskAssessment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleRiskAssessment";
        context.operationId  = "retrievePartyRoleRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartyRoleRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartyRoleRiskAssessment,
  deletePartyRoleRiskAssessment,
  listPartyRoleRiskAssessment,
  retrievePartyRoleRiskAssessment,
};
