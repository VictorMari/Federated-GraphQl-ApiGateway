/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Promotion
   * This operation creates a Promotion entity.
   *
   * promotion PromotionCreate The Promotion to be created
   * returns Promotion
   **/
  const createPromotion =  ( args, context /* promotion  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Promotion";
        context.operationId  = "createPromotion";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createPromotion: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Promotion
   * This operation deletes a Promotion entity.
   *
   * id String Identifier of the Promotion
   * no response value expected for this operation
   **/
  const deletePromotion =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Promotion";
        context.operationId  = "deletePromotion";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deletePromotion: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Promotion objects
   * This operation list or find Promotion entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listPromotion =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Promotion";
        context.operationId  = "listPromotion";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listPromotion: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Promotion
   * This operation updates partially a Promotion entity.
   *
   * id String Identifier of the Promotion
   * promotion PromotionUpdate The Promotion to be updated
   * returns Promotion
   **/
  const patchPromotion =  ( args, context /* idpromotion  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Promotion";
        context.operationId  = "patchPromotion";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchPromotion: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Promotion by ID
   * This operation retrieves a Promotion entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Promotion
   * fields String Comma-separated properties to provide in response (optional)
   * returns Promotion_Create
   **/
  const retrievePromotion =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Promotion";
        context.operationId  = "retrievePromotion";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrievePromotion: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createPromotion,
  deletePromotion,
  listPromotion,
  patchPromotion,
  retrievePromotion,
};
