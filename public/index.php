<?php
require '../vendor/autoload.php';
require './tools/utilities.php';
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
    if(file_exists($file)) {
        if(endsWith($file, 'mp3')) {
            header('Content-Type: audio/mpeg');
        } else {
            $file_extension = strtolower(substr(strrchr($file, "."), 1));
            switch($file_extension) {
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
        header('Accept-Ranges: none');
        header('Content-Disposition: filename="' . basename($file) . '"');
        header('Content-length: ' . filesize($file));
        header('Cache-Control: max-age=604800');
        header('Content-Transfer-Encoding: binary');
        flush();
        $chunksize = 1 * (1024 * 1024);
        $handle    = fopen($file, 'rb');
        if($handle === false) {
            return false;
        }
        while(!feof($handle)) {
            print fread($handle, $chunksize);
            flush();
        }
        fclose($handle);
    }
});
Flight::start();