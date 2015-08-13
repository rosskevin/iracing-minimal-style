// ==UserScript==
// @name        test iRacing minimal style
// @namespace   drinkto.me
// @description test iRacing's site has a bit too many pieces of flair. Let's minimize the distractions.
// @include     http://members.iracing.com/jforum/*
// @include     http://members.iracing.com/membersite/member/*
// @version     7
// @require     http://coffeescript.org/extras/coffee-script.js
// @resource    remote file:///Users/kross/Dropbox/racing/apps/userscripts/iracing-minimal-style/main.coffee
// @grant       GM_getResourceText
// ==/UserScript==

console.log("7 loading test ir min style...");
var remote_src = GM_getResourceText('remote');

var c = this.CoffeeScript.compile(remote_src);
var cs = c.split("\n");

//cs[1] = "debugger;" + cs[1];
result = eval(cs.join("\n"));

//console.log("...done loading test ir min style: \n" + remote_src);

//console.log("loading test ir min style");
//result = eval(CoffeeScript.compile(GM_getResourceText(remote_src)));
console.log("done loading test ir min style: " + result);