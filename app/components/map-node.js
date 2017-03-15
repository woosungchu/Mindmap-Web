import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'svg',
  classNames : ['node'],

  //attr
  attributeBindings: ['x','y','width','height'],
  x:'0',y:'0',width:'200px',height:'100px',// resizable, draggable

  bgcolor:'rgba(39, 137, 216, .20)',
});
