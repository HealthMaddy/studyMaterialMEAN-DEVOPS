const { fork } = require("child_process");
const AppError = require("../util/appError");

const child = fork(`${__dirname}/child.js`);

exports.initiateChildProcess = () => {
  try {
    setTimeout(() => {
      console.log("coming in here in child process ");
      child.send({ message: "hello from parent file " }, (e) => {
        console.log("error in sending message to child", e);
      });

      child.on("message", (msg) => {
        console.log("recieved message from child ", msg);
      });

      child.on("exit", (code, signal) => {
        console.log("child process ending code : , signal : ,", code, signal);
      });
    }, 1000);
  } catch (e) {
    console.log("error here in child ", e);
    throw new AppError(`${e}`, e.status);
  }
};
