const { Worker } = require("worker_threads");

exports.runWorker = function () {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${__dirname}/worker.js`, {
      workerData: {
        message: "hello from parent of worker ",
      },
    });

    worker.on("message", (value) => {
      console.log("recieved message from worker thread --", value);
      resolve(value);
    });

    worker.on("error", (err) => {
      console.log("recieved error from worker thread --", err);
      reject(err);
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};
