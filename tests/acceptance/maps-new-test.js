import { test } from 'qunit';
import moduleForAcceptance from 'mindmap-web/tests/helpers/module-for-acceptance';
import { currentSession, authenticateSession, invalidateSession } from 'mindmap-web/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | maps new');

test('display title, author and created date', function(assert) {
  let user = server.create('user',{id:3,username:'mapmaker',password:'test1234'});

  authenticateSession(this.application, {
    userId: user.id,
    token :"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoidGVzdCIsImV4cCI6MTQ4OTE2MTk1Niwib3JpZ19pYXQiOjE0ODkxNjE2NTZ9.75zVE9KAovvgjInPL0XqiD7hiR0IaoMcKx0sRoWZ2IQ"
  });

  visit('/maps/new');

  andThen(function(){
		assert.notEqual(find('.pagehead .title').text(), '', 'Not empty title');
    assert.equal(find('.pagehead .author').text(), 'mapmaker', 'Correct author username');
    assert.notEqual(find('.pagehead .created').text(), '',' Not empty created');
	});

});

test('new map should have one default node', function(assert) {
});
