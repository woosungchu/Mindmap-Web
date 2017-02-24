import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('maps', function(){});
  this.route('map', function() {
    this.route('new');
    this.route('edit', { path: '/:id' });
  });

  this.route('users', function() {
    this.route('login');
    this.route('logout');
    this.route('new');
  });

});

export default Router;
