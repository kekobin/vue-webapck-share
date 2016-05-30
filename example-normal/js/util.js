/***
** Util Module
**
***/

;(function(global) {
	var slice = Array.prototype.slice;

	var Util = {
		extend: function() {
			var target, opts, length, i;

			target = arguments[0];
			length = arguments.length;

			if(length > 1) {
				opts = slice.call(arguments, 1);
			}

			if(opts) {
				for(i = 0;i < length - 1; i++) {
					var temp = opts[i];

					for(var key in temp) {
						target[key] = temp[key];
					}
				}
			}

			return target;
		}
	};

	if (typeof module !== 'undefined' && module.exports) {
        module.exports = Util;
    } else if (typeof define === 'function' && define.cmd) {
        define(function(){return Util;});
    } else {
        global.Util = Util;
    }
}(window));

