/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a PartyRoleProductOfferingRiskAssessment
   * This operation creates a PartyRoleProductOfferingRiskAssessment entity.
   *
   * partyRoleProductOfferingRiskAssessment PartyRoleProductOfferingRiskAssessmentCreate The PartyRoleProductOfferingRiskAssessment to be created
   * returns PartyRoleProductOfferingRiskAssessment
   **/
  const createPartyRoleProductOfferingRiskAssessment =  ( args, context /* partyRoleProductOfferingRiskAssessment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleProductOfferingRiskAssessment";
        context.operationId  = "createPartyRoleProductOfferingRiskAssessment";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createPartyRoleProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a PartyRoleProductOfferingRiskAssessment
   * This operation deletes a PartyRoleProductOfferingRiskAssessment entity.
   *
   * id String Identifier of the PartyRoleProductOfferingRiskAssessment
   * no response value expected for this operation
   **/
  const deletePartyRoleProductOfferingRiskAssessment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleProductOfferingRiskAssessment";
        context.operationId  = "deletePartyRoleProductOfferingRiskAssessment";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deletePartyRoleProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find PartyRoleProductOfferingRiskAssessment objects
   * This operation list or find PartyRoleProductOfferingRiskAssessment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPartyRoleProductOfferingRiskAssessment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleProductOfferingRiskAssessment";
        context.operationId  = "listPartyRoleProductOfferingRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listPartyRoleProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a PartyRoleProductOfferingRiskAssessment by ID
   * This operation retrieves a PartyRoleProductOfferingRiskAssessment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the PartyRoleProductOfferingRiskAssessment
   * fields String Comma-separated properties to provide in response (optional)
   * returns PartyRoleProductOfferingRiskAssessment
   **/
  const retrievePartyRoleProductOfferingRiskAssessment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "PartyRoleProductOfferingRiskAssessment";
        context.operationId  = "retrievePartyRoleProductOfferingRiskAssessment";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrievePartyRoleProductOfferingRiskAssessment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPartyRoleProductOfferingRiskAssessment,
  deletePartyRoleProductOfferingRiskAssessment,
  listPartyRoleProductOfferingRiskAssessment,
  retrievePartyRoleProductOfferingRiskAssessment,
};
