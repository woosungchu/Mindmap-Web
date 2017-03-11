import Ember from 'ember';

export default Ember.Controller.extend({
  sorter: ['created:desc'],
  sortedUserMaps: Ember.computed.sort('model.userMaps','sorter'),
  sortedHotMaps: Ember.computed.sort('model.hotMaps','sorter')
});
