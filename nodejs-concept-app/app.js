const express = require("express");
const app = express();
const morgan = require("morgan");
const rateLimiter = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");

const userRouter = require("./routes/user.routes");
const { globalErrorHandler } = require("./controllers/errorController");
const AppError = require("./util/appError");
const { initiateChildProcess } = require("./child process/parentChildProcess");
const { runWorker } = require("./worker thread /parentWorker");
const {
  initiateStreamsLogic,
} = require("./streams and read write file/streams");

app.use(cors());

// Prevent parameter pollution
// app.use(
//     hpp({
//       whitelist: [
//         'duration',
//         'ratingsQuantity',
//         'ratingsAverage',
//         'maxGroupSize',
//         'difficulty',
//         'price'
//       ]
//     })
//   );

app.options("*", cors());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

//set security headers in http request with helmet
app.use(helmet());

// just to get the api info in logs
app.use(morgan({}));

//limit request
const limiter = rateLimiter({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);
app.post("/api", bodyParser.raw({ type: "application/json" }));

//body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());
app.use(compression());

app.use((req, res, next) => {
  initiateChildProcess(); // fork in child process

  // example for worker thread
  runWorker()
    .then((result) => console.log(`Worker result: ${result}`))
    .catch((err) => console.error(`Worker error: ${err}`));

  // to trigger streams logic
  initiateStreamsLogic();

  next();
});
app.use("/api/v1", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`cannot find url ${req.originalUrl}`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
