import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  // session : service('session'),
  // beforeModel() {
  //   this._super(...arguments);
  //   if (!this.get('session.isAuthenticated')) {
  //     this.replaceWith('users.login');
  //   }
  // }
});
