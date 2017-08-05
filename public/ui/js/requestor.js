/*
   This is a simple client for a REST API to play MP3 files.    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 4, 2017
*/
const apiUrl = '';
var nowPlaying;

function getSongs() {
    $.ajax({
        url: apiUrl.concat('/songs'),
        success: function(result) {

            var obj = JSON.parse(result);
            var table = $.el('table', {
                'class': 'pure-table pure-table-horizontal'
            }).append('<thead><tr><th>#</th><th>Album</th><th>Song</th></tr></thead><tbody>');

            var x = 0;
            $.each(obj, function(i, v) {
                x++;
                $.each(v, function(index, value) {

                    if (!value.endsWith(".mp3")) {
                        return;
                    }
                    if (value.endsWith(".jpg") || value.endsWith(".png")) {
                        //$("body").append($.el('img', {}));
                    }

                    var params = x % 2 == 0 ? {
                        'class': 'pure-table-odd'
                    } : {}

                    table.append($.el('tr', params)
                        .append($.el('td', {})
                            .append(index))
                        .append($.el('td', {})
                            .append(i))

                        .append($.el('td', {})
                            .append($.el('a', {
                                    'href': '#',
                                    'rel': 'external',
                                    'text': value
                                })
                                .html(value.split(/(\\|\/)/g).pop().replace('.mp3', ''))
                                .click(function() {
                                    getMp3($(this).attr('text'));
                                })
                            ))
                    )


                });

                $("body").append(table);
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

    $('title').html(filename.split(/(\\|\/)/g).pop());
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