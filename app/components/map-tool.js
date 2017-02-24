import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'svg',
  elementId: 'tool',
  // classNames : ['draggable'],

  //attr
  attributeBindings: ['x','y','width','height'],
  x:'30%',y:'0',width:'40%',height:'45px',

  actions: {
    test(/*evt*/){
      alert('test');
    },
    save(/*evt*/){
      alert('Save');
      let postMindMap = this.get('postMindMap');
      postMindMap();
    }
  }

});
