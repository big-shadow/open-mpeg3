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
        },
        objToStrMap: function(obj) {
            let strMap = new Map();
            for(let k of Object.keys(obj)) {
                strMap.set(k, obj[k]);
            }
            return strMap;
        },
        jsonToStrMap: function(jsonStr) {
            return this.objToStrMap(JSON.parse(jsonStr));
        },
        getDir: function(filename) {
            return filename.substring(0, filename.lastIndexOf("/") + 1);
        }
    }
})();
Array.prototype.indexOfString = function(needle) {
    let x = 0;
    for(i in this) {
        if(typeof this[i] == "string" && this[i].includes(needle)) return x;
        x++;
    }
    return -1;
}