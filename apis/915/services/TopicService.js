/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Topic
   * This operation creates a Topic entity.
   *
   * topic TopicCreate The Topic to be created
   * returns Topic
   **/
  const createTopic =  ( args, context /* topic  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Topic";
        context.operationId  = "createTopic";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createTopic: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Topic
   * This operation deletes a Topic entity.
   *
   * id String Identifier of the Topic
   * no response value expected for this operation
   **/
  const deleteTopic =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Topic";
        context.operationId  = "deleteTopic";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteTopic: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Topic objects
   * This operation list or find Topic entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listTopic =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Topic";
        context.operationId  = "listTopic";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listTopic: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Topic by ID
   * This operation retrieves a Topic entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Topic
   * fields String Comma-separated properties to provide in response (optional)
   * returns Topic
   **/
  const retrieveTopic =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Topic";
        context.operationId  = "retrieveTopic";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveTopic: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createTopic,
  deleteTopic,
  listTopic,
  retrieveTopic,
};
