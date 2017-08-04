function autorun(){getSongs();}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;

/*
   This is a simple client for a REST API to play MP3 files.    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 4, 2017
*/

const apiUrl = '';

function getSongs(){
    $.ajax({url: apiUrl.concat('/songs'), success: function(result){

        var obj = JSON.parse(result);

        $.each(obj, function(index, value) {
            
            $("body").append('<h3>'+index+'</h3>');
            $("body").append('<ol>');

            $.each(value, function(index, value) {
                $("body").append('<li>'+value+'</li>');
            });

            $("body").append('</ol>');
        });

        console.log(obj);

    }});
}