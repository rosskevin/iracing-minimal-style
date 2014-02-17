// ==UserScript==
// @name        iRacing minimal style
// @namespace   drinkto.me
// @description iRacing's site has a bit too many pieces of flair. Let's minimize the distractions.
// @include     http://members.iracing.com/jforum/*
// @include     http://members.iracing.com/membersite/member/*
// @version     5
// @grant       none
// ==/UserScript==
var load,execute,loadAndExecute,executeJQuery;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})}
    ,executeJQuery=function(a){if(typeof jQuery=='undefined'){var jqUrl='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';loadAndExecute(jqUrl,a);}else{execute(a);}};

executeJQuery(function () {

    //----------------------------
    // Forum and member site
    //
    function rmBgImage(selector){
        $(selector).css('background-image', 'none');
    }

    // remove background images
    var body = $('body');
    body.css('background-image', 'none');
    body.css('background-color', '#fff');

    //----------------------------
    // Member site
    //
    if (/\/membersite\/member/.test(self.location.href)) {

        // remove the ticker
        $('#ticker_data embed').remove();

        // remove the massive footer
        $('tr td div div a.footer_link').closest('tr').remove()

        // work on the main div
        var mainDiv = $('#maincontent').closest('div');
        mainDiv.css('border-left', '');
        mainDiv.css('border-right', '');

        // work on layout table
        //var layoutTbody = $('body table:first').children('tbody');
        //layoutTbody.children('tr').children('td:first-child').remove();
        //layoutTbody.children('tr').children('td:last-child').remove();

        // remove bogus fb button
        $('.fbPublish').remove();

        // remove series bg images
        //$('.panel_sprite').css('background-image', '');
    }

    //----------------------------
    // Forum
    //
    if (/\/jforum/.test(self.location.href)) {

        $('#header').css('height', '60px');
        rmBgImage('#contentHeader');
        rmBgImage('#contentBody');
        rmBgImage('#contentFooter');

        // remove gradients on posts
        //$('.trFade').remove();
        $('table').css('border-color', '#f4f4f4');
        rmBgImage('.trFade');
        $('.trDark').css('background-color', '#f4f4f4');
        rmBgImage('tr, #trTop, .thTopMid, .tdCategory, #trPoll td');
        // header blue 303da5
        $('.thTopMid').css('text-shadow', 'none');
        $('#trTop').css('background-color', '#303da5');

        // ids are misused by the forum software, so finding the right element is a bit of a pain
        $('form#post').parent().parent().parent().find('tr:first-child').css('background-color', '#303da5');

        // author panel
        $('.tdPostAuthor').css('font-size', '10px');
        $('.tdPostAuthor').css('border', 'none');
        $('.trFade td').css('border', 'none');
        $('.tdPostAuthor img').css('margin', '0px');

        // make helmet smaller
        var helmets = $(".tdPostAuthor img[width='48']");
        helmets.attr('width', '36');
        helmets.attr('height', '36');

        // make badge smaller
        $(".tdPostAuthor img[src*='/member_images/badges']").css('height', '12px');

        // signature
        $('.userSignature').css('max-height', '45px');
        $('.userSignature').css('border-top', '1px solid #f4f4f4');

        // list categories
        $('.tdCategory').css('text-shadow', 'none');
        $('.tdCategory').css('background-color', '#787878');

        $('.tdTopic').parent().hover(function (){
            $(this).css('background-color', '#f4f4f4');
        }, function(){
            $(this).css('background-color', '#fff');
        });
    }
});