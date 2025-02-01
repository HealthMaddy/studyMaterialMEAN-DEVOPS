const { parentPort, workerData } = require("worker_threads");

console.log("getting data from parent of this worker --", workerData);

parentPort.postMessage("hello from the worker thread ");

setTimeout(() => {
  parentPort.postMessage("Worker task complete");
}, 1000);
