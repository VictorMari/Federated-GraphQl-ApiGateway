/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProblemUnacknowledgement
   * This operation creates a ProblemUnacknowledgement entity.
   *
   * problemUnacknowledgement ProblemUnacknowledgementCreate The ProblemUnacknowledgement to be created
   * returns ProblemUnacknowledgement
   **/
  const createProblemUnacknowledgement =  ( args, context /* problemUnacknowledgement  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProblemUnacknowledgement";
        context.operationId  = "createProblemUnacknowledgement";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProblemUnacknowledgement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProblemUnacknowledgement,
};
