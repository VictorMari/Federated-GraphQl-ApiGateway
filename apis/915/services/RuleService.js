/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Rule
   * This operation creates a Rule entity.
   *
   * rule RuleCreate The Rule to be created
   * returns Rule
   **/
  const createRule =  ( args, context /* rule  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Rule";
        context.operationId  = "createRule";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createRule: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Rule
   * This operation deletes a Rule entity.
   *
   * id String Identifier of the Rule
   * no response value expected for this operation
   **/
  const deleteRule =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Rule";
        context.operationId  = "deleteRule";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteRule: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Rule objects
   * This operation list or find Rule entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listRule =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Rule";
        context.operationId  = "listRule";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listRule: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Rule
   * This operation updates partially a Rule entity.
   *
   * id String Identifier of the Rule
   * rule RuleUpdate The Rule to be updated
   * returns Rule
   **/
  const patchRule =  ( args, context /* idrule  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Rule";
        context.operationId  = "patchRule";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchRule: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Rule by ID
   * This operation retrieves a Rule entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Rule
   * fields String Comma-separated properties to provide in response (optional)
   * returns Rule
   **/
  const retrieveRule =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Rule";
        context.operationId  = "retrieveRule";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveRule: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createRule,
  deleteRule,
  listRule,
  patchRule,
  retrieveRule,
};
