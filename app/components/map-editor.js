import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  elementId : 'map-editor',
  targetMap : null,
  actions : {
    postMindMap(){
      let map = this.get('targetMap');

      alert('Are you ready?');
      alert(map.id);

      //action from map/new.js
      this.get('postMindMap')(...arguments);
    }
  }

});
