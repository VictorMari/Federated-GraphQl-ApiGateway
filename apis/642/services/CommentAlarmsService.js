/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a CommentAlarms
   * This operation creates a CommentAlarms entity.
   *
   * commentAlarms CommentAlarmsCreate The CommentAlarms to be created
   * returns CommentAlarms
   **/
  const createCommentAlarms =  ( args, context /* commentAlarms  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommentAlarms";
        context.operationId  = "createCommentAlarms";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createCommentAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find CommentAlarms objects
   * This operation list or find CommentAlarms entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCommentAlarms =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommentAlarms";
        context.operationId  = "listCommentAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listCommentAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a CommentAlarms by ID
   * This operation retrieves a CommentAlarms entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the CommentAlarms
   * fields String Comma-separated properties to provide in response (optional)
   * returns CommentAlarms
   **/
  const retrieveCommentAlarms =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "CommentAlarms";
        context.operationId  = "retrieveCommentAlarms";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveCommentAlarms: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCommentAlarms,
  listCommentAlarms,
  retrieveCommentAlarms,
};
