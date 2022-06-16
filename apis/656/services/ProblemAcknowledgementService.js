/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProblemAcknowledgement
   * This operation creates a ProblemAcknowledgement entity.
   *
   * problemAcknowledgement ProblemAcknowledgementCreate The ProblemAcknowledgement to be created
   * returns ProblemAcknowledgement
   **/
  const createProblemAcknowledgement =  ( args, context /* problemAcknowledgement  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProblemAcknowledgement";
        context.operationId  = "createProblemAcknowledgement";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProblemAcknowledgement: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProblemAcknowledgement,
};
