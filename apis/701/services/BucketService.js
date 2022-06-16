/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * List or find Bucket objects
   * This operation list or find Bucket entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBucket =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Bucket";
        context.operationId  = "listBucket";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listBucket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Bucket by ID
   * This operation retrieves a Bucket entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Bucket
   * fields String Comma-separated properties to provide in response (optional)
   * returns Bucket
   **/
  const retrieveBucket =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Bucket";
        context.operationId  = "retrieveBucket";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveBucket: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listBucket,
  retrieveBucket,
};
