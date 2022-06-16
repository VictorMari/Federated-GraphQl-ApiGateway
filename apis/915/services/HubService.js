/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Hub
   * This operation creates a Hub entity.
   *
   * topicId String Identifier of the parent Topic entity
   * hub HubCreate The Hub to be created
   * returns Hub
   **/
  const createHub =  ( args, context /* topicIdhub  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Hub";
        context.operationId  = "createHub";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createHub: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Hub
   * This operation deletes a Hub entity.
   *
   * topicId String Identifier of the parent Topic entity
   * id String Identifier of the Hub
   * no response value expected for this operation
   **/
  const deleteHub =  ( args, context /* topicIdid  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Hub";
        context.operationId  = "deleteHub";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteHub: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Hub objects
   * This operation list or find Hub entities
   *
   * topicId String Identifier of the parent Topic entity
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listHub =  ( args, context /* topicIdfieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Hub";
        context.operationId  = "listHub";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listHub: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Hub by ID
   * This operation retrieves a Hub entity. Attribute selection is enabled for all first level attributes.
   *
   * topicId String Identifier of the parent Topic entity
   * id String Identifier of the Hub
   * fields String Comma-separated properties to provide in response (optional)
   * returns Hub
   **/
  const retrieveHub =  ( args, context /* topicIdidfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Hub";
        context.operationId  = "retrieveHub";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveHub: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createHub,
  deleteHub,
  listHub,
  retrieveHub,
};
