const app = require("./app");
const mongoose = require('mongoose');

const port = 4000;

process.on('uncaughtException',(e)=>{
    console.log('uncaught exception here shutting down ..',e) // when error is throwing but no try catch block to catch it 

    process.exit(1)
})

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));

const server = app.listen(port, () => {
  console.log("server listening at port --", 4000);
});
// add unhandled exception here ...

process.on("unhandledRejection", () => {
  console.log("unhandled rejection recieved , shutting down"); // where promise is rejecting and there is not catch to handle it 
  server.close((e) => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  server.close((e) => {
    console.log(
      "terminating server received signal termination, failed because of --",
      e
    );
  });
});
