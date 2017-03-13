import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  session : service('session'),
  currentUser: service(),

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },

  beforeModel() {
    this._super(...arguments);
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('users.login');
    }else{
      return this._loadCurrentUser();
    }
  },

  model(){
    let currentUserService = this.get('currentUser'),
        currentUser = currentUserService.get('user'),
        newMap = null;

    newMap = this.get('store').createRecord('map',{
      title : 'Title',
      author : currentUser,
      created : new Date()
    });

    return newMap.save();

  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

});
