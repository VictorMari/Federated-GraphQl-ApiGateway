/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Appointment
   * This operation creates a Appointment entity.
   *
   * appointment AppointmentCreate The Appointment to be created
   * returns Appointment
   **/
  const createAppointment =  ( args, context /* appointment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Appointment";
        context.operationId  = "createAppointment";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createAppointment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Appointment
   * This operation deletes a Appointment entity.
   *
   * id String Identifier of the Appointment
   * no response value expected for this operation
   **/
  const deleteAppointment =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Appointment";
        context.operationId  = "deleteAppointment";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteAppointment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Appointment objects
   * This operation list or find Appointment entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listAppointment =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Appointment";
        context.operationId  = "listAppointment";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listAppointment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Appointment
   * This operation updates partially a Appointment entity.
   *
   * id String Identifier of the Appointment
   * appointment AppointmentUpdate The Appointment to be updated
   * returns Appointment
   **/
  const patchAppointment =  ( args, context /* idappointment  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Appointment";
        context.operationId  = "patchAppointment";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchAppointment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Appointment by ID
   * This operation retrieves a Appointment entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Appointment
   * fields String Comma-separated properties to provide in response (optional)
   * returns Appointment
   **/
  const retrieveAppointment =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Appointment";
        context.operationId  = "retrieveAppointment";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveAppointment: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createAppointment,
  deleteAppointment,
  listAppointment,
  patchAppointment,
  retrieveAppointment,
};
