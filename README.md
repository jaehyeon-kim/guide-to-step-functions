# Guide to Step Functions

Useful links

* The state language spec: https://states-language.net/spec.html
* The Serverless framework: (https://serverless.com/)
* The serverless-step-functions (https://github.com/horike37/serverless-step-functions) plugin that lets you create state machines with the Serverless framework
* The pricing page (https://aws.amazon.com/step-functions/pricing/) for Step Functions
* AWS Step Functions now supports AWS PrivateLink: https://aws.amazon.com/about-aws/whats-new/2019/12/aws-step-functions-now-supports-aws-privatelink/
* AWS Step Functions now supports Synchronous Express Workflows: https://aws.amazon.com/about-aws/whats-new/2020/11/aws-step-functions-now-supports-synchronous-express-workflows-/

7 types of states

* Task - performs a task eg) invoke a lambda function
* Pass - passes input to output without doing any work
* Wait - wait before transitioning to next state
* Choice - adds branching logic to the state machine
* Parallel - performs tasks in parallel
* Succeed - terminates the state machine successfully
* Fail - terminates the state machine and mark it as failure

Error handling

* retry failed states + catch (transition to failure path)
    + only allowed on Task and Parallel states
* Error handling in Step Functions: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html