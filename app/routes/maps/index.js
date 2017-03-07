import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(){
    return RSVP.hash({
      hotMaps: this.get('store').findAll('map'),
      userMaps: this.get('store').findAll('map')
    })
  }
});
