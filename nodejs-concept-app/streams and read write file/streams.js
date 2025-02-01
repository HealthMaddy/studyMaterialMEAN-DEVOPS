const fs = require("fs");

function createFileWithStreams() {
  const stream = fs.createWriteStream(`${__dirname}/streamData.txt`);

  let content = "some text here write it " + Math.floor(Math.random() * 10 + 1);

  stream.write(content, (e) => {
    console.log("failed to write data here ..", e);
  });
}

exports.readFileWithSTreams = function (req, res) {
  const data = fs.createReadStream(`${__dirname}/streamData.txt`, "utf-8");

  // res.setHeader({'Content-type':'text/plain'}) // not required throwing below error
  /*
{
    "status": "error",
    "message": "Header name must be a valid HTTP token [\"{ 'Content-type': 'text/plain' }\"]"
}
*/

  data.on("error", (e) => {
    res.status(500).json({ error: e });
  });

  data.pipe(res);
};

exports.readFile = function (req, res) {
  const type = req?.params?.type;
  let file = "";
  if (type == "sync") {
    file = fs.readFileSync(`${__dirname}/streamData.txt`, "utf-8");
    res.status(200).json({ data: file });
  } else {
    //this is async code
    file = fs.readFile(`${__dirname}/streamData.txt`, "utf-8", (e, data) => {
      if (e) res.status(500).json({ error: e });
      res.status(200).json({ data });
    
    });
  }
};

const writeFile = function (req, res) {
  let data =
    "this is a normal text to be written with current time " +
    new Date().toISOString();
  if (req?.params?.type == "sync") {
    fs.writeFileSync(`${__dirname}/normalData.txt`, data + ' from sync code ', "utf-8");
  } else {
    fs.writeFile(`${__dirname}/normalData.txt`, data + " from async code ", "utf-8", (e, data) => {
      if (data) console.log("if data coming here ---", data);
      if (e) console.log("err in writing file ", e);
    });
  }
};

exports.initiateStreamsLogic = function () {
  createFileWithStreams();
  writeFile({params:{type:'sync'}})
  //   readFileWithSTreams()
};
