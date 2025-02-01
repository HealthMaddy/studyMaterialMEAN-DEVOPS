process.on("message", (msg) => {
  console.log("message from parent message ", msg);

  // send a message back to parent
  process.send({ message: "hi from child" });
});

setTimeout(() => {
  process.exit(0); // to end child process here
}, 10000);
