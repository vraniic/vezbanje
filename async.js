const { rejects } = require("assert");
const fs = require("fs/promises");
const { userInfo } = require("os");

function readFile() {
  let fileData;

  //   fs.readFile("data.txt", function(error, fileData) {
  //       console.log('file parsing done!')
  //       console.log(fileData.toString());
  //     });
  //     console.log("Hi there!");

  fs.readFile("data.txt").then(function (fileData) {
    console.log("file parsing is done");
    console.log(fileData.toString());
  });

  console.log("hi there!");
}

readFile();

let getUserInfo = new Promise((resolve, reject) => {
  let uspesno = true;

  let userInfo = axios.get("https://instagram/info");
 c
  return userInfo;
});

getUserInfo.then((userInfo) => {
  console.log(userInfo);
});

console.log("reference point");
