const bcrypt = require("bcrypt");

exports.hashPasswordFromBcrypt = async function (data) {
  try {
    const saltRounds = 10;
    const dbPassword = "password string here to encrypt";
    const hash = await bcrypt.hash(data?.password || dbPassword, saltRounds);

    // now to compare the password
    let passwordFromDB = data?.password || dbPassword;
    let isMatched = await bcrypt.compare(
      hash || "hashed password here",
      passwordFromDB
    );

    console.log("is password matched ", isMatched);
  } catch (e) {
    console.log("error ", e);
  }
};
