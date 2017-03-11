import DS from 'ember-data';

export default DS.Model.extend({
  author : DS.belongsTo('user'),
  title : DS.attr('string',{
    defaultValue : 'Untitled'
  }),
  nodes : DS.hasMany('node'),
  created: DS.attr('date')
});
