/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a SearchTimeSlot
   * This operation creates a SearchTimeSlot entity.
   *
   * searchTimeSlot SearchTimeSlotCreate The SearchTimeSlot to be created
   * returns SearchTimeSlot
   **/
  const createSearchTimeSlot =  ( args, context /* searchTimeSlot  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SearchTimeSlot";
        context.operationId  = "createSearchTimeSlot";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createSearchTimeSlot: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a SearchTimeSlot
   * This operation deletes a SearchTimeSlot entity.
   *
   * id String Identifier of the SearchTimeSlot
   * no response value expected for this operation
   **/
  const deleteSearchTimeSlot =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SearchTimeSlot";
        context.operationId  = "deleteSearchTimeSlot";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteSearchTimeSlot: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find SearchTimeSlot objects
   * This operation list or find SearchTimeSlot entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listSearchTimeSlot =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SearchTimeSlot";
        context.operationId  = "listSearchTimeSlot";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listSearchTimeSlot: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a SearchTimeSlot
   * This operation updates partially a SearchTimeSlot entity.
   *
   * id String Identifier of the SearchTimeSlot
   * searchTimeSlot SearchTimeSlotUpdate The SearchTimeSlot to be updated
   * returns SearchTimeSlot
   **/
  const patchSearchTimeSlot =  ( args, context /* idsearchTimeSlot  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SearchTimeSlot";
        context.operationId  = "patchSearchTimeSlot";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchSearchTimeSlot: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a SearchTimeSlot by ID
   * This operation retrieves a SearchTimeSlot entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the SearchTimeSlot
   * fields String Comma-separated properties to provide in response (optional)
   * returns SearchTimeSlot
   **/
  const retrieveSearchTimeSlot =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "SearchTimeSlot";
        context.operationId  = "retrieveSearchTimeSlot";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveSearchTimeSlot: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createSearchTimeSlot,
  deleteSearchTimeSlot,
  listSearchTimeSlot,
  patchSearchTimeSlot,
  retrieveSearchTimeSlot,
};
