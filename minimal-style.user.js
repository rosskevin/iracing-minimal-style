// ==UserScript==
// @name        iRacing minimal style
// @namespace   drinkto.me
// @description iRacing's site has too much going on. Hide distractions and simplify your life.
// @include     https://members.iracing.com/jforum/*
// @include     https://members.iracing.com/membersite/member/*
// @version     22
// @grant       none
// ==/UserScript==

var attachCss, body, helmets, mainDiv, rmBgImage;

body = $("body");

body.css("background-image", "none");

body.css("background-color", "#fff");

rmBgImage = function(selector) {
  return $(selector).css("background-image", "none");
};

attachCss = function(cssBlock) {
  return $("head").append($(cssBlock));
};

if (/\/membersite\/member/.test(self.location.href)) {
  $("#ticker_data embed").remove();
  $("tr td div div a.footer_link")
    .closest("tr")
    .remove();
  mainDiv = $("#maincontent").closest("div");
  mainDiv.css("border-left", "");
  mainDiv.css("border-right", "");
  $(".fbPublish").remove();
}

body = $("body");

body.css("background-image", "none");

body.css("background-color", "#fff");

rmBgImage = function(selector) {
  return $(selector).css("background-image", "none");
};

if (/\/membersite\/member/.test(self.location.href)) {
  $(".fbPublish").remove();
}

if (/\/jforum/.test(self.location.href)) {
  attachCss(
    " <style type='text/css'>\n\n    #header {\n        height: 60px;\n    }\n\n    /* no bg image */\n    #contentHeader, #contentBody, #contentFooter, .contentBar, .trFade, tr, #trTop, .thTopMid, .tdCategory, #trPoll td, .trPosts, #topCorners, #bottomCorners {\n        background-image: none;\n    }\n\n    .contentBarButton {\n        background-image: none;\n        color: #fff;\n        line-height: 19px;\n        background-color: #787878;\n        text-indent: 12px;\n    }\n\n    #previousPage, #toForumArchive {\n        display: none;\n    }\n\n    #postANewTopic, #replyToTheTopic {\n        background-color: #303da5;\n    }\n\n    #replyToTheTopic {\n        text-indent: 45px;\n    }\n\n    #postANewTopic {\n        text-indent: 12px;\n    }\n\n    #stopWatching {\n        text-indent: 22px;\n    }\n\n    #markAllAsRead, #viewNewTopics, #watchThisTopic, #writeAMessage, #messageInbox, #sentMessages, #viewNewTopics {\n        background-color: #787878;\n    }\n\n    #watchThisTopic {\n        text-indent: 17px;\n    }\n\n    #viewNewTopics {\n        text-indent: 14px;\n    }\n\n    #markAllAsRead {\n        text-indent: 20px;\n    }\n\n    #messageInbox, #sentMessages {\n        text-indent: 38px;\n        margin-left: 5px;\n    }\n\n    #watchThisForum {\n        background-color: #787878;\n        text-indent: 12px;\n    }\n\n    table, blockquote, textarea, .tdTopic, .tdAuthor, .tdMeta, .tdLast, .postOptions {\n        border-color: #f4f4f4;\n    }\n\n    .trDark {\n        background-color: #f4f4f4;\n    }\n\n    .thTopMid {\n        text-shadow: none;\n    }\n\n    #trTop {\n        background-color: #303da5;\n    }\n\n    table#forum tr:last {\n        border-bottom: 1px solid #f4f4f4;\n    }\n\n    .tdPostAuthor {\n        font-size: 8px;\n        border: none;\n    }\n\n    .tdPostAuthor strong {\n        font-size: 12px;\n    }\n\n    .tdPostAuthor img {\n        margin: 0px;\n    }\n\n    .userSignature {\n        max-height: 50px;\n        border-top: 1px solid #f4f4f4;\n        font-size: 85%;\n    }\n\n    .tdCategory {\n        text-shadow: none;\n        background-color: #787878;\n    }\n\n</style>"
  );
  $(".contentBarButton").each(function(index) {
    var e, id;
    e = $(this);
    id = e.attr("id");
    if (id === "postANewTopic") {
      return e.text("Post a New Topic");
    }
  });
  $("#stopWatching").text("Stop Watching");
  $("#watchThisTopic").text("Watch this topic");
  $("#messageInbox").text("Inbox");
  $("#sentMessages").text("Sent");
  rmBgImage(".trPosts, .trTopBlank");
  $("table").css("border-color", "#f4f4f4");
  $("form#post")
    .parent()
    .parent()
    .parent()
    .find("tr:first-child")
    .css("background-color", "#303da5");
  $("form#post")
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .find("div#topCorners")
    .css("background-image", "none");
  $("form#post")
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .next()
    .css("background-image", "none");
  $("table#forum tr:last").css("border-bottom", "1px solid #f4f4f4");
  $(".trFade td").css("border", "none");
  helmets = $(".tdPostAuthor img[width='48']");
  helmets.attr("width", "36");
  helmets.attr("height", "36");
  $(".tdPostAuthor img[src*='/member_images/badges']").css("height", "12px");
  $(".tdTopic")
    .parent()
    .hover(
      function() {
        return $(this).css("background-color", "#f4f4f4");
      },
      function() {
        return $(this).css("background-color", "#fff");
      }
    );
}
