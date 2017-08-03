<?php

// Inject our Composer dependencies. 
require '../vendor/autoload.php';


/*
   This is a simple REST API to serve MP3 files.    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 2, 2017
*/

Flight::route('/', function(){
    echo 'Snoop Doggy Dog!';
});


Flight::start();