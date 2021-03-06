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
  let user = server.create('user');

	server.create('map', {title:'before',created:new Date(),author: user});
	server.create('map', {title:'after',created:new Date(),author: user});

	visit('/');

	andThen(function(){
		assert.equal(find('div.hot-maps div.panel-heading:first').text(), 'after');
		assert.equal(find('div.hot-maps div.panel-heading:last').text(), 'before');
	});
});

test('should list user\'s maps order by up-to-date', function(assert){
	let user = server.create('user',{id:3,username:'test',password:'test1234'}),
			other = server.create('user');

  authenticateSession(this.application, {
    userId: user.id,
    token :"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTQ4OTE2MTk1Niwib3JpZ19pYXQiOjE0ODkxNjE2NTZ9.75zVE9KAovvgjInPL0XqiD7hiR0IaoMcKx0sRoWZ2IQ"
  });

	server.createList('map',3, {title:'user-map-test',author: user});
	server.createList('map',5, {title:'user-map-test',author: other});

	visit('/');

	andThen(function(){
		assert.equal(find('div.user-maps li span.title:contains("user-map-test")').length, 3);
	});
});

test('should link to login page for unauthorized user if new-map button clicked', function(assert){
	visit('/');
	click('a.map-new');
	andThen(function(){
	  assert.equal(currentURL(), '/users/login', 'should send unauthorized user to login page');
	});
});

test('should link to map edtior for new ', function(assert){
	visit('/');
	authenticateSession(this.application);
	click('a.map-new');
	andThen(function(){
	  assert.equal(currentURL(), '/maps/new', 'should redirect to map editor');
	});
});

test('should link to detail view for a specific map', function(assert){
	server.createList('map',3);
	visit('/');
	click('a.maps-detail:first');
	andThen(function(){
	  assert.equal(currentRouteName(), 'maps.detail', 'should redirect to detail view');
	});
});

test('should link to sign up and login for an unauthorized user', function(assert){
	invalidateSession(this.application);
	visit('/');

	andThen(function(){
		assert.equal(find('a.login').length, 1, 'should show login button for unauthorized user');
		assert.equal(find('a.signup').length, 1, 'should show signup button for unauthorized user');
	});

	click('a.login');
	andThen(function(){
		assert.equal(currentRouteName(), 'users.login', 'should redirect to login form page');
	});

	visit('/');
	click('a.signup');
	andThen(function(){
		assert.equal(currentRouteName(), 'users.new', 'should redirect to signup page');
	});
});

test('should link to logout for an authorized user', function(assert){
	authenticateSession(this.application);
	visit('/');

	let session = currentSession(this.application);
	andThen(function(){
		assert.equal(session.get('isAuthenticated'), true, 'session should be validated');
	});


	click('a.logout');
	visit('/');
	andThen(function(){
		assert.equal(find('a.login').length, 1, 'should show login button for unauthorized user');
		assert.equal(session.get('isAuthenticated'), false, 'should invalidate session');
	});
});

test('should link to map list', function(assert){
	visit('/');
	click('a.maps-list');
	andThen(function(){
		assert.equal(currentRouteName(), 'maps.index', 'should redirect to map list view');
	});
});
