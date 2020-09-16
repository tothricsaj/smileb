// Dependencies
const fs = require('fs');
const url = require('url');
const http = require('http');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

let file_url = 'https://github.com/hfg-gmuend/openmoji/releases/latest/download/openmoji-72x72-color.zip';
let DOWNLOAD_DIR = './src/assets/emojis/';

let mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
let child = exec(mkdir, function(err, stdout, stderr) {
  if (err) throw err;
  else download_file_httpget(file_url);
});

let download_file_httpget = function(file_url) {
  let options = {
    host: url.parse(file_url).host,
    port: 80,
    path: url.parse(file_url).pathname
  };

  let file_name = url.parse(file_url).pathname.split('/').pop();
  let file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

  http.get(options, function(res) {
    res.on('data', function(data) {
      file.write(data);
    }).on('end', function() {
      file.end();
      console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });
  });
};