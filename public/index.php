<?php

// Inject our Composer dependencies. 
require '../vendor/autoload.php';
require './tools/utilities.php';



/*
   This is a simple REST API to serve MP3 files.    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 2, 2017
*/

Flight::route('/', function(){
    $file = file_get_contents('./ui/ui.php');
    echo $file;
});

Flight::route('GET /songs', function(){
    $dir_contents = dirToArray('/home/rw/media1/Music/');
    echo json_encode($dir_contents, JSON_UNESCAPED_UNICODE);
});

Flight::route('GET /file', function($file){
    header("X-Sendfile: $file");
    header("Content-type: audio/x-mpeg-3");
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
});


Flight::start();