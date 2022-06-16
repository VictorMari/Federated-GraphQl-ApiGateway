/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Event
   * This operation creates a Event entity.
   *
   * topicId String Identifier of the parent Topic entity
   * event EventCreate The Event to be created
   * returns Event
   **/
  const createEvent =  ( args, context /* topicIdevent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Event";
        context.operationId  = "createEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Event objects
   * This operation list or find Event entities
   *
   * topicId String Identifier of the parent Topic entity
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listEvent =  ( args, context /* topicIdfieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Event";
        context.operationId  = "listEvent";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Event by ID
   * This operation retrieves a Event entity. Attribute selection is enabled for all first level attributes.
   *
   * topicId String Identifier of the parent Topic entity
   * id String Identifier of the Event
   * fields String Comma-separated properties to provide in response (optional)
   * returns Event
   **/
  const retrieveEvent =  ( args, context /* topicIdidfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Event";
        context.operationId  = "retrieveEvent";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createEvent,
  listEvent,
  retrieveEvent,
};
