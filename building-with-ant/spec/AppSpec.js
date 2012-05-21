describe('AppSpec', function() {
	describe('hasOwn', function() {
		it('should return true if the object has its own property', function() {
			expect(true).toEqual(true);
		});
	});
	describe('namespace', function (){
		it('should create a namespaced object', function(){
			TestBuildOne.Utils.namespace('TestBuildOne.LevelOne.LevelTwo', {
				valid: true
			});
			console.log(TestBuildOne);console.log(TestBuildOne);
			expect(TestBuildOne.LevelOne.LevelTwo.valid).toEqual(true);			
		});
	});
});