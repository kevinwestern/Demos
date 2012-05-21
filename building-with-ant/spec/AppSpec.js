describe('AppSpec', function() {
	describe('hasOwn', function() {
		var obj = {
			present: true
		};
		it('should return true if the object has its own property', function() {
			expect(TestBuildOne.Utils.hasOwn(obj, 'present')).toEqual(true);
		});
		it('should return false when it does not have its own property', function () {
			var F = function(){};
			F.prototype = obj;
			var newObj = new F;

			expect(TestBuildOne.Utils.hasOwn(newObj, 'present')).toEqual(false);
		});
	});
	describe('namespace', function (){
		it('should create a namespaced object', function(){
			TestBuildOne.Utils.namespace('TestBuildOne.LevelOne.LevelTwo', {
				valid: true
			});
			expect(TestBuildOne.LevelOne.LevelTwo.valid).toEqual(true);			
		});
	});
});