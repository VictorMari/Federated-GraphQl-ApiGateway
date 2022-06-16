/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Heal
   * This operation creates a Heal entity.
   *
   * heal HealCreate The Heal to be created
   * returns Heal
   **/
  const createHeal =  ( args, context /* heal  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Heal";
        context.operationId  = "createHeal";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createHeal: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Heal objects
   * This operation list or find Heal entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listHeal =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Heal";
        context.operationId  = "listHeal";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listHeal: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Heal by ID
   * This operation retrieves a Heal entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Heal
   * fields String Comma-separated properties to provide in response (optional)
   * returns Heal
   **/
  const retrieveHeal =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Heal";
        context.operationId  = "retrieveHeal";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveHeal: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createHeal,
  listHeal,
  retrieveHeal,
};
