var TestBuildOne = require('../public/javascripts/TestBuildOne');
console.log(TestBuildOne);
describe('AppSpec', function() {
	describe('hasOwn', function() {
		it('should return true if the object has its own property', function() {
			TestBuildOne.Utils.hasOwn({test: 'test'}, 'test2').should.eql(true);
		});
	});
});