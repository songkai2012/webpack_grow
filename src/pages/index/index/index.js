/**
 * Created by Administrator on 2017/10/12.
 */
var path = require("path");
var lib = require('lib/testLib');
var jq = require("jquery");
//var mod = require(path.resolve(path));
//console.log(path)
console.log(process.execPath)
console.log(__dirname)
console.log(process.cwd())
console.log(jq)
var d = document.getElementById("app");
var p = document.getElementById("test");

p.innerHTML = "112121111"
//var p  = document.createElement("<div>111</div>")

d.value= ("11112221");