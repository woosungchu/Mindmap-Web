import DS from 'ember-data';

export default DS.Model.extend({
  //created : DS.attr('date'),
  username : DS.attr('string'),
  password : DS.attr('string'),
  email : DS.attr('string')
});
