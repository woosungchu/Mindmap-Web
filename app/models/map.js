import DS from 'ember-data';

export default DS.Model.extend({
  created : DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  author : DS.belongsTo('user'),
  //author : DS.attr('string'),
  title : DS.attr('string',{
    defaultValue : 'Untitled'
  }),
  //data
  node : DS.hasMany('node')//,
  // descript : DS.hasMany('descript'),
  // path : DS.hasMany('path')

});
