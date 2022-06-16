/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a BillingCycleSpecification
   * This operation creates a BillingCycleSpecification entity.
   *
   * billingCycleSpecification BillingCycleSpecificationCreate The BillingCycleSpecification to be created
   * returns BillingCycleSpecification
   **/
  const createBillingCycleSpecification =  ( args, context /* billingCycleSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingCycleSpecification";
        context.operationId  = "createBillingCycleSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createBillingCycleSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a BillingCycleSpecification
   * This operation deletes a BillingCycleSpecification entity.
   *
   * id String Identifier of the BillingCycleSpecification
   * no response value expected for this operation
   **/
  const deleteBillingCycleSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingCycleSpecification";
        context.operationId  = "deleteBillingCycleSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteBillingCycleSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find BillingCycleSpecification objects
   * This operation list or find BillingCycleSpecification entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listBillingCycleSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingCycleSpecification";
        context.operationId  = "listBillingCycleSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listBillingCycleSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a BillingCycleSpecification
   * This operation updates partially a BillingCycleSpecification entity.
   *
   * id String Identifier of the BillingCycleSpecification
   * billingCycleSpecification BillingCycleSpecificationUpdate The BillingCycleSpecification to be updated
   * returns BillingCycleSpecification
   **/
  const patchBillingCycleSpecification =  ( args, context /* idbillingCycleSpecification  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingCycleSpecification";
        context.operationId  = "patchBillingCycleSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchBillingCycleSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a BillingCycleSpecification by ID
   * This operation retrieves a BillingCycleSpecification entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the BillingCycleSpecification
   * fields String Comma-separated properties to provide in response (optional)
   * returns BillingCycleSpecification
   **/
  const retrieveBillingCycleSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "BillingCycleSpecification";
        context.operationId  = "retrieveBillingCycleSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveBillingCycleSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createBillingCycleSpecification,
  deleteBillingCycleSpecification,
  listBillingCycleSpecification,
  patchBillingCycleSpecification,
  retrieveBillingCycleSpecification,
};
