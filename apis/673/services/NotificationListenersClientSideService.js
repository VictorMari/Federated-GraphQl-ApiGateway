/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity GeographicAddressValidationStateChangeEvent
   * Example of a client listener for receiving the notification GeographicAddressValidationStateChangeEvent
   *
   * data GeographicAddressValidationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToGeographicAddressValidationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToGeographicAddressValidationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToGeographicAddressValidationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToGeographicAddressValidationStateChangeEvent,
};
