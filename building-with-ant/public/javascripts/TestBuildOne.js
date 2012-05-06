/* Build Time: May 6, 2012 02:08:20 */
var TestBuildOne;
(function(global) {
	"use strict";
	global = {};
	global.Utils = {

		hasOwn: function (obj, prop) {
			if (Object.prototype.hasOwnProperty.call(obj, prop)) {
				return true;
			}

			return false;
		},

		namespace: function (path, expr) {
			var namespaces = path.split('.'),
				i = 0,
				len = namespaces.length,
				currentLevel = global;

			while (i < len) {
				if (i === len - 1) {
					currentLevel[namespaces[i]] = expr;
					break;
				}
				else if (!TestBuildOne.Utils.hasOwn(currentLevel, namespaces[i])) {
					currentLevel = currentLevel[namespaces[i]] = {};
				}
				i++;
			}
		}
	};

	global.Lib = {};
	global.Models = {};

	return global;
	
})(TestBuildOne);
/*global TestBuildOne*/
(function(){
	"use strict";
	TestBuildOne.Utils.namespace('TestBuildOne.Lib.Class', function () {
		return "This is a Class!";
	});
})();
