/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Scale
   * This operation creates a Scale entity.
   *
   * scale ScaleCreate The Scale to be created
   * returns Scale
   **/
  const createScale =  ( args, context /* scale  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Scale";
        context.operationId  = "createScale";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createScale: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Scale objects
   * This operation list or find Scale entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listScale =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Scale";
        context.operationId  = "listScale";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listScale: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Scale by ID
   * This operation retrieves a Scale entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Scale
   * fields String Comma-separated properties to provide in response (optional)
   * returns Scale
   **/
  const retrieveScale =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Scale";
        context.operationId  = "retrieveScale";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveScale: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createScale,
  listScale,
  retrieveScale,
};
