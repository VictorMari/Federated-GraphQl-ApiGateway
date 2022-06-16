/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a GroupAlarms
   * This operation creates a GroupAlarms entity.
   *
   * groupAlarms GroupAlarmsCreate The GroupAlarms to be created
   * returns GroupAlarms
   **/
  const createGroupAlarms =  ( args, context /* groupAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GroupAlarms";
        context.operationId  = "createGroupAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find GroupAlarms objects
   * This operation list or find GroupAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listGroupAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GroupAlarms";
        context.operationId  = "listGroupAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a GroupAlarms by ID
   * This operation retrieves a GroupAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the GroupAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns GroupAlarms
   **/
  const retrieveGroupAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "GroupAlarms";
        context.operationId  = "retrieveGroupAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveGroupAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createGroupAlarms,
  listGroupAlarms,
  retrieveGroupAlarms,
};
