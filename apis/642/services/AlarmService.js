/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Alarm
   * This operation creates a Alarm entity.
   *
   * alarm AlarmCreate The Alarm to be created
   * returns Alarm
   **/
  const createAlarm =  ( args, context /* alarm  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Alarm";
        context.operationId  = "createAlarm";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createAlarm: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Alarm
   * This operation deletes a Alarm entity.
   *
   * id String Identifier of the Alarm
   * no response value expected for this operation
   **/
  const deleteAlarm =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Alarm";
        context.operationId  = "deleteAlarm";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteAlarm: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Alarm objects
   * This operation list or find Alarm entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAlarm =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Alarm";
        context.operationId  = "listAlarm";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listAlarm: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Alarm
   * This operation updates partially a Alarm entity.
   *
   * id String Identifier of the Alarm
   * alarm AlarmUpdate The Alarm to be updated
   * returns Alarm
   **/
  const patchAlarm =  ( args, context /* idalarm  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Alarm";
        context.operationId  = "patchAlarm";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchAlarm: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Alarm by ID
   * This operation retrieves a Alarm entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Alarm
   * fields String Comma-separated properties to provide in response (optional)
   * returns Alarm
   **/
  const retrieveAlarm =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Alarm";
        context.operationId  = "retrieveAlarm";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveAlarm: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAlarm,
  deleteAlarm,
  listAlarm,
  patchAlarm,
  retrieveAlarm,
};
