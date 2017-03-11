import Ember from 'ember';
import RSVP from 'rsvp';

const { service } = Ember.inject;

export default Ember.Route.extend({
  currentUser: service(),
  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  model(){
    let currentUserService = this.get('currentUser'),
        currentUser = currentUserService.get('user'),
        userMaps = null;

    if(currentUser){
        userMaps = this.get('store').query('map',{author : currentUser.id});
    }

    return RSVP.hash({
      hotMaps: this.get('store').findAll('map').then(function(items){
        return items.sortBy('date');
      }),
      userMaps: userMaps
    })
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },
});
