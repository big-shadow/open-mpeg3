/*
   This is a simple client for a REST API to play MP3 files.    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 4, 2017
*/
function cleanId(str) {
    return str.replace(/^[^a-z]+|[^\w:.-]+/gi, "");
}

const apiUrl = '';
var nowPlaying;

function getSongs() {
    $.ajax({
        url: apiUrl.concat('/songs'),
        success: function(result) {

            var obj = JSON.parse(result);

            $.each(obj, function(i, v) {

                var albumId = cleanId(i);
                var album = $.el('ol', {
                    'id': albumId
                });

                $("body").append($.el('h3', {}).html(i));


                $.each(v, function(index, value) {

                    if (!value.endsWith(".mp3")) {
                        return;
                    }
                    if (value.endsWith(".jpg") || value.endsWith(".png")) {
                        //$("body").append($.el('img', {}));
                    }

                    album.append($.el('li', {})
                        .append($.el('a', {
                                'href': '#',
                                'rel': 'external',
                                'text': value
                            })
                            .html(value.split(/(\\|\/)/g).pop())
                            .click(function() {
                                getMp3($(this).attr('text'));
                            })
                        ));
                });

                $("body").append(album);
            })
        }
    });
}

function getMp3(filename) {

    if (nowPlaying != undefined && nowPlaying != null) {
        nowPlaying.pause();
    }

    nowPlaying = new Audio(apiUrl + '/mp3?file=' + filename);
    nowPlaying.play();
}

/*
    EVENT HANDLERS =============================================================
*/

$("#pause").click(function() {
    if (nowPlaying != undefined && nowPlaying != null) {
        nowPlaying.pause();
    }
});


$("#play").click(function() {
    if (nowPlaying != undefined && nowPlaying != null) {
        nowPlaying.play();
    }
});

/*
    UTILITIES ==================================================================
*/

$.extend({
    el: function(el, props) {
        var $el = $(document.createElement(el));
        $el.attr(props);
        return $el;
    }
});

/*
    ON LOAD ====================================================================
*/

if (window.addEventListener) window.addEventListener("load", getSongs, false);
else if (window.attachEvent) window.attachEvent("onload", getSongs);
else window.onload = getSongs;