import DS from 'ember-data';

export default DS.Model.extend({
  type : DS.attr('string'),
  content : DS.attr('string'),
  map : DS.attr('string')//map.id
});
