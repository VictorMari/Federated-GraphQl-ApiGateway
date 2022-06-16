/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity UsageConsumptionReportRequestStateChangeNotification
   * Example of a client listener for receiving the notification UsageConsumptionReportRequestStateChangeNotification
   *
   * data UsageConsumptionReportRequestStateChangeNotification The event data
   * returns EventSubscription
   **/
  const listenToUsageConsumptionReportRequestStateChangeNotification =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToUsageConsumptionReportRequestStateChangeNotification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToUsageConsumptionReportRequestStateChangeNotification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToUsageConsumptionReportRequestStateChangeNotification,
};
