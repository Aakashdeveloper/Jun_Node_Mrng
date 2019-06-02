var path = require('path');
var util = require('util');
var os = require('os');

var filename = path.basename('User/Desktop/folder/Edu_jun_node_mrng/firstapp/os.js');
// console.log(filename)
var os = os.platform()
var myparse = 'You are trying to upload %s from your %s os'

var result =  util.format(myparse, filename,os)

console.log(result)

