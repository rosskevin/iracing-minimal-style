#----------------------------
# Forum and member site
#

# remove background images
body = $('body')
body.css 'background-image', 'none'
body.css 'background-color', '#fff'

rmBgImage = (selector) ->
  $(selector).css 'background-image', 'none'

# Attach the custom css
attachCss = (cssBlock) ->
  $('head').append $(cssBlock)

#----------------------------
# Member site
#
if /\/membersite\/member/.test(self.location.href)
  # remove the ticker
  $('#ticker_data embed').remove()
  # remove the massive footer
  $('tr td div div a.footer_link').closest('tr').remove()
  # work on the main div
  mainDiv = $('#maincontent').closest('div')
  mainDiv.css 'border-left', ''
  mainDiv.css 'border-right', ''
  # work on layout table
  #var layoutTbody = $('body table:first').children('tbody');
  #layoutTbody.children('tr').children('td:first-child').remove();
  #layoutTbody.children('tr').children('td:last-child').remove();
  # remove bogus fb button
  $('.fbPublish').remove()
# remove series bg images
#$('.panel_sprite').css('background-image', '');


#----------------------------
# Forum and member site
#

# remove background images
body = $('body')
body.css 'background-image', 'none'
body.css 'background-color', '#fff'

rmBgImage = (selector) ->
  $(selector).css 'background-image', 'none'

#----------------------------
# Member site
#
if /\/membersite\/member/.test(self.location.href)
  # remove the ticker
  $('#ticker_data embed').remove()
  # remove the massive footer
  $('tr td div div a.footer_link').closest('tr').remove()
  # work on the main div
  mainDiv = $('#maincontent').closest('div')
  mainDiv.css 'border-left', ''
  mainDiv.css 'border-right', ''

  $('.fbPublish').remove()

#----------------------------
# Forum
#
if /\/jforum/.test(self.location.href)
  #        $('#header').css('height', '60px');
  #        rmBgImage('#contentHeader');
  #        rmBgImage('#contentBody');
  #        rmBgImage('#contentFooter');
  attachCss """
     <style type='text/css'>

        #header {
            height: 60px;
        }

        /* no bg image */
        #contentHeader, #contentBody, #contentFooter, .contentBar, .trFade, tr, #trTop, .thTopMid, .tdCategory, #trPoll td, .trPosts, #topCorners, #bottomCorners {
            background-image: none;
        }

        .contentBarButton {
            background-image: none;
            color: #fff;
            line-height: 19px;
            background-color: #787878;
            text-indent: 12px;
        }

        #previousPage, #toForumArchive {
            display: none;
        }

        #postANewTopic, #replyToTheTopic {
            background-color: #303da5;
        }

        #replyToTheTopic {
            text-indent: 45px;
        }

        #postANewTopic {
            text-indent: 12px;
        }

        /
        /
        #markAllAsRead, #viewNewTopics, #watchThisTopic, #writeAMessage, #messageInbox, #sentMessages, #viewNewTopics {
            background-color: #787878;
        }

        #watchThisTopic {
            text-indent: 17px;
        }

        #viewNewTopics {
            text-indent: 14px;
        }

        #markAllAsRead {
            text-indent: 20px;
        }

        #messageInbox, #sentMessages {
            text-indent: 38px;
            margin-left: 5px;
        }

        #watchThisForum {
            background-color: #787878;
            text-indent: 12px;
        }

        table, blockquote, textarea, .tdTopic, .tdAuthor, .tdMeta, .tdLast, .postOptions {
            border-color: #f4f4f4;
        }

        .trDark {
            background-color: #f4f4f4;
        }

        .thTopMid {
            text-shadow: none;
        }

        #trTop {
            background-color: #303da5;
        }

        table#forum tr:last {
            border-bottom: 1px solid #f4f4f4;
        }

        .tdPostAuthor {
            font-size: 8px;
            border: none;
        }

        .tdPostAuthor strong {
            font-size: 12px;
        }

        .tdPostAuthor img {
            margin: 0px;
        }

        .userSignature {
            max-height: 50px;
            border-top: 1px solid #f4f4f4;
            font-size: 85%;
        }

        .tdCategory {
            text-shadow: none;
            background-color: #787878;
        }

    </style>
  """

  $('.contentBarButton').each (index) ->
    e = $(this)
    id = e.attr('id')
    #            console.log(id);
    if id == 'postANewTopic'
      e.text 'Post a New Topic'

  $('#watchThisTopic').text 'Watch this topic'
  $('#messageInbox').text 'Inbox'
  $('#sentMessages').text 'Sent'

  # remove gradients on posts
  rmBgImage '.trPosts, .trTopBlank'
  $('table').css 'border-color', '#f4f4f4'

  # kill rounded corners up top
  # ids are misused by the forum software, so finding the right element is a bit of a pain
  $('form#post').parent().parent().parent().find('tr:first-child').css 'background-color', '#303da5'
  $('form#post').parent().parent().parent().parent().parent().find('div#topCorners').css 'background-image', 'none'
  $('form#post').parent().parent().parent().parent().parent().next().css 'background-image', 'none'

  # add a border to the last post
  $('table#forum tr:last').css 'border-bottom', '1px solid #f4f4f4'
  $('.trFade td').css 'border', 'none'

  # make helmet smaller
  helmets = $('.tdPostAuthor img[width=\'48\']')
  helmets.attr 'width', '36'
  helmets.attr 'height', '36'

  # make badge smaller
  $('.tdPostAuthor img[src*=\'/member_images/badges\']').css 'height', '12px'

  # signature
  #        $('.userSignature').css('max-height', '50px');
  #        $('.userSignature').css('border-top', '1px solid #f4f4f4');
  #        $('.userSignature').css('font-size', '85%');
  # list categories
  #        $('.tdCategory').css('text-shadow', 'none');
  #        $('.tdCategory').css('background-color', '#787878');
  $('.tdTopic').parent().hover (->
    $(this).css 'background-color', '#f4f4f4'
  ), ->
    $(this).css 'background-color', '#fff'
