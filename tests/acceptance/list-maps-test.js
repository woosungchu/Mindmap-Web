import { test } from 'qunit';
import moduleForAcceptance from 'mindmap-web/tests/helpers/module-for-acceptance';
import { currentSession, authenticateSession, invalidateSession } from 'mindmap-web/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | list maps');

test('should redirect to map list', function(assert){
	visit('/');
	andThen(function() {
	  assert.equal(currentURL(), '/maps', 'should redirect automatically');
	});
});

test('should list up-to-date popular maps', function(assert){
	visit('/');
});

test('should list user\'s maps order by up-to-date', function(assert){
	visit('/');
});

test('should link to login page for unauthorized user if new-map button clicked', function(assert){
	visit('/');
	click('a.new-map');
	andThen(function(){
	  assert.equal(currentURL(), '/users/login', 'should send unauthorized user to login page');
	});
});

test('should link to map editor for authorized user', function(assert){
	visit('/');
	authenticateSession(this.application);
	click('a.new-map');
	andThen(function(){
	  assert.equal(currentURL(), '/maps/new', 'should redirect to map editor');
	});
});

test('should link to detail view for a specific map', function(assert){

});

test('should link to sign up and login for an unauthorized user', function(assert){

});

test('should link to logout for an unauthorized user', function(assert){

});

test('should link to map list', function(assert){

});

//test('visiting /list-maps', function(assert) {
//  visit('/list-maps');
//
//  andThen(function() {
//    assert.equal(currentURL(), '/list-maps');
//  });
//});
