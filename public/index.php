<?php

// Inject our Composer dependencies. 
require '../vendor/autoload.php';
require './tools/utilities.php';



/*
This is a simple REST API to serve MP3 files.    
Author: Ray Winkelman, raywinkelman@gmail.com
Date: August 2, 2017
*/

Flight::route('/', function()
{
    $file = file_get_contents('./ui/ui.php');
    echo $file;
});

Flight::route('GET /songs', function()
{
    $dir_contents = dirToArray('/mnt/media1/Music/');
    json_response($dir_contents);
});

Flight::route('/mp3', function()
{
    $file = Flight::request()->query['file'];
    
    if (file_exists($file)) {
        
        header('Content-Type: audio/mpeg');
        header('Content-Disposition: filename="' . basename($file) . '"');
        header('Content-length: ' . filesize($file));
        header('Cache-Control: no-cache');
        header("Content-Transfer-Encoding: chunked");
        header('Content-Disposition: inline;filename="' . basename($file) . '"');
        
        readfile($file);
    }
    
});

Flight::start();