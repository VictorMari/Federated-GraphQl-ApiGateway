/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity QueryProductRecommendationCreateEvent
   * Example of a client listener for receiving the notification QueryProductRecommendationCreateEvent
   *
   * data QueryProductRecommendationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductRecommendationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductRecommendationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductRecommendationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity QueryProductRecommendationStateChangeEvent
   * Example of a client listener for receiving the notification QueryProductRecommendationStateChangeEvent
   *
   * data QueryProductRecommendationStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToQueryProductRecommendationStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToQueryProductRecommendationStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToQueryProductRecommendationStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToQueryProductRecommendationCreateEvent,
  listenToQueryProductRecommendationStateChangeEvent,
};
