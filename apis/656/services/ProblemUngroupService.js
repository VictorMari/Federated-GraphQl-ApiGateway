/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProblemUngroup
   * This operation creates a ProblemUngroup entity.
   *
   * problemUngroup ProblemUngroupCreate The ProblemUngroup to be created
   * returns ProblemUngroup
   **/
  const createProblemUngroup =  ( args, context /* problemUngroup  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProblemUngroup";
        context.operationId  = "createProblemUngroup";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProblemUngroup: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProblemUngroup,
};
