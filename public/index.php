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
Flight::route('GET /files', function()
{
    $dir_contents = dirToArray('/mnt/media1/Music/');
    json_response($dir_contents);
});
Flight::route('/file', function()
{
    $file = Flight::request()->query['file'];
    if (file_exists($file)) {
        if (endsWith($file, 'mp3')) {
            header('Content-Type: audio/mpeg');
        } else {
            $file_extension = strtolower(substr(strrchr($file, "."), 1));
            switch ($file_extension) {
                case "png":
                    $ctype = "image/png";
                    break;
                case "jpeg":
                case "jpg":
                    $ctype = "image/jpeg";
                    break;
                default:
            }
            header('Content-Type: ' . $ctype);
        }
        header('Content-Disposition: filename="' . basename($file) . '"');
        header('Content-length: ' . filesize($file));
        header('Cache-Control: no-cache');
        header("Content-Transfer-Encoding: chunked");
        header('Content-Disposition: inline;filename="' . basename($file) . '"');
        readfile($file);
    }
});
Flight::start();