#!/usr/bin/node
//A script that computes the number of tasks completed by user id
const request = require('request');
request.get(process.argv[2]).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
});
