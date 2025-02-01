const AppError = require("../util/appError");

const userList = [
  { name: "vikram", age: 26, id: 1 },
  { name: "aditya", age: 22, id: 2 },
  { name: "simon", age: 36, id: 3 },
  { name: "joshi", age: 46, id: 4 },
];

exports.getAllUsers = function (req, res) {
  try {
    console.log(
      "request headers here --",
      req.headers["x-forwarded-for"],
      req.socket.localAddress
    );

   return res.status(200).json({
      data: userList,
    });

  } catch (e) {
    throw new Error("failed to get all users ");
  }
};

exports.getOneUser = function (req, res) {
  try {
    console.log("params data here", req.params);

    const userData = userList.find((el) => el.id == req.params.id);

    res.status(200).json({ data: userData });
  } catch (e) {
    throw new AppError("failed to get user detail ", 404);
  }
};
