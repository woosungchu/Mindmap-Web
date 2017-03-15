import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: 'svg',
  elementId : 'map-editor',
  targetMap : null,

  init(){
    this._super(...arguments);

    let map = this.get('map'),
        nodes = map.get('nodes'),
        node = null;

    if(nodes.get('length') === 0){
      // Add one node for empty map
      node = this.get('store').createRecord('node',{
        map: map.id,
        content: 'node'
      })
      node.save().then((node) =>{
        nodes.pushObject(node);
        map.save();
        this.set('targetMap',map);
      });
    }
  },

  actions : {
    postMindMap(){
      let map = this.get('targetMap');

      alert('Are you ready?');
      alert(map.id);

      //action from map/new.js
      // this.get('postMindMap')(...arguments);
    }
  }

});
