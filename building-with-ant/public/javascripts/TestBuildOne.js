/* Build Time: May 21, 2012 01:25:56 */
/*global document */
var root = document,
	TestBuildOne = {};

root.TestBuildOne = TestBuildOne = (function() {
	"use strict";
	
	var global = {};
	global.Utils = {

		hasOwn: function (obj, prop) {
			if (Object.prototype.hasOwnProperty.call(obj, prop)) {
				return true;
			}
			
			return false;
		},

		namespace: function (path, expr) {
			var namespaces = path.split('.'),
			i = 1,
			len = namespaces.length,
			currentLevel = root[namespaces[0]];

			while (i < len) {
				if (!this.hasOwn(currentLevel, namespaces[i])) {
					currentLevel[namespaces[i]] = {};
				}
				currentLevel = currentLevel[namespaces[i]];
				i++;
			}

			for (var prop in expr) {
				if (!this.hasOwn(currentLevel, prop)) {
					currentLevel[prop] = expr[prop];
				}				
			}
		}
	};

	global.Lib = {};
	global.Models = {};

	return global;
	
}());
/*global TestBuildOne*/
(function(){
	"use strict";
	TestBuildOne.Utils.namespace('TestBuildOne.Lib.Class', function () {
		return "This is a Class!";
	});
})();
