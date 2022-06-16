/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProblemGroup
   * This operation creates a ProblemGroup entity.
   *
   * problemGroup ProblemGroupCreate The ProblemGroup to be created
   * returns ProblemGroup
   **/
  const createProblemGroup =  ( args, context /* problemGroup  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProblemGroup";
        context.operationId  = "createProblemGroup";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProblemGroup: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProblemGroup,
};
