// ==UserScript==
// @name        iRacing minimal style
// @namespace   drinkto.me
// @description iRacing's site has too much going on. Hide distractions and simplify your life.
// @include     http://members.iracing.com/jforum/*
// @include     http://members.iracing.com/membersite/member/*
// @version     20
// @require     http://coffeescript.org/extras/coffee-script.js
// @resource    remote https://cdn.rawgit.com/rosskevin/iracing-minimal-style/master/main.coffee
// @grant       GM_getResourceText
// ==/UserScript==

var remote_src = GM_getResourceText('remote');

var c = this.CoffeeScript.compile(remote_src);
var cs = c.split("\n");

eval(cs.join("\n"));