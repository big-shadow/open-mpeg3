/*
   Useful utilities.

   This modules uses an object interface module pattern.
   https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
    
   Author: Ray Winkelman, raywinkelman@gmail.com
   Date: August 4, 2017
*/
var utilities = (function() {

    return {
        getSongName: function(fullpath) {
            return fullpath.split(/(\\|\/)/g).pop().replace('.mp3', '');
        }
    }
})();