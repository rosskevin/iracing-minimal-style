// to debug/load and debug from external
/*
 var e = document.createElement("script");
 e.src = 'https://dl-web.dropbox.com/get/racing/apps/userscripts/iracing-minimal-style/minimal-style-test.js?_subject_uid=136943504&w=AABMGG1_kGYXxbYBLSazfR4lsMZALP3QX4Yph3skRKOX0g&dl=1';
 e.type="text/javascript";
 document.getElementsByTagName("head")[0].appendChild(e);
 */
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
//        rmBgImage('#contentHeader');
//        rmBgImage('#contentBody');
//        rmBgImage('#contentFooter');

        var cssBlock = "<style type='text/css'> \
        \
                /* no bg image */ \
                #contentHeader, #contentBody, #contentFooter, .contentBar, .trFade,\
                  tr, #trTop, .thTopMid, .tdCategory, #trPoll td,\
                   #topCorners, #bottomCorners { \
                    background-image: none; \
                } \
                \
	            .contentBarButton { \
	               background-image: none; \
	               color: #fff; \
	               line-height: 19px;\
	            } \
	            \
	            #postANewTopic { \
	                background-color: #303da5; \
	                text-indent: 12px; \
	            } \
	            \
	            #markAllAsRead { \
	                background-color: #787878; \
                    text-indent: 20px; \
	            } \
	            \
	            #watchThisForum { \
	                background-color: #787878; \
                    text-indent: 12px; \
	            } \
	        </style>";

        $(cssBlock).appendTo("head");


//        var contentBarButton = $('.contentBarButton');
//        contentBarButton.css('background-image', 'none');
//        contentBarButton.css('color', '#fff');
//        contentBarButton.css('line-height', '19px');

        var postNew = $('#postANewTopic');
        postNew.text('Post a New Topic');
//        postNew.css('background-color', '#303da5');
//        postNew.css('text-indent', '12px');

//        var markAllAsRead = $('#markAllAsRead');
//        markAllAsRead.css('background-color', '#787878');
//        markAllAsRead.css('text-indent', '20px');

//        var watchThisForum = $('#watchThisForum');
//        watchThisForum.css('background-color', '#787878');
//        watchThisForum.css('text-indent', '12px');

        // remove gradients on posts
//        rmBgImage('.contentBar');
        $('table').css('border-color', '#f4f4f4');
//        rmBgImage('.trFade');
        $('.trDark').css('background-color', '#f4f4f4');
//        rmBgImage('tr, #trTop, .thTopMid, .tdCategory, #trPoll td');
        // header blue 303da5
        $('.thTopMid').css('text-shadow', 'none');
        $('#trTop').css('background-color', '#303da5');

        // kill rounded corners up top
//        rmBgImage('#topCorners, #bottomCorners');

        // ids are misused by the forum software, so finding the right element is a bit of a pain
        $('form#post').parent().parent().parent().find('tr:first-child').css('background-color', '#303da5');
//        $('form#post').parent().parent().parent().parent().parent().find('div#topCorners').css('background-image', 'none');
//        $('form#post').parent().parent().parent().parent().parent().next().css('background-image', 'none');

        // add a border to the last post
        $('table#forum tr:last').css('border-bottom', '1px solid #f4f4f4');

        //
        $('blockquote, textarea, .tdTopic, .tdAuthor, .tdMeta, .tdLast').css('border-color', '#f4f4f4');

        // author panel
        $('.tdPostAuthor').css('font-size', '8px');
        $('.tdPostAuthor strong').css('font-size', '12px');
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
        $('.userSignature').css('max-height', '50px');
        $('.userSignature').css('border-top', '1px solid #f4f4f4');
        $('.userSignature').css('font-size', '85%');

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