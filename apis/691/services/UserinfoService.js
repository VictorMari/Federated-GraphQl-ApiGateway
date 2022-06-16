/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find Userinfo objects
   * This operation list or find Userinfo entities
   *
   * authorization String token to be passed as a header linked to the user whose identity is requested
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listUserinfo =  ( args, context /* authorizationfieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Userinfo";
        context.operationId  = "listUserinfo";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listUserinfo: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Userinfo by ID
   * This operation retrieves a Userinfo entity. Attribute selection is enabled for all first level attributes.
   *
   * authorization String token to be passed as a header linked to the user whose identity is requested
   * id String Identifier of the Userinfo
   * fields String Comma-separated properties to provide in response (optional)
   * returns Userinfo
   **/
  const retrieveUserinfo =  ( args, context /* authorizationidfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Userinfo";
        context.operationId  = "retrieveUserinfo";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveUserinfo: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listUserinfo,
  retrieveUserinfo,
};
