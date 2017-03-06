import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  type: 'N',
  content(i){return faker.name.title() + ` ${i+1}`;}
  //map
});
