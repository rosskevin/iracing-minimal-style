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

    if (/\/membersite\/member/.test(self.location.href)) {

        // remove background images
        var body = $('body');
        body.css('background-image', '');
        body.css('background-color', '#fff');

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
});