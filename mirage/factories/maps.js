import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  //author:
  title(i){return faker.name.title() + ` ${i+1}`;}
  // nodes:
  //created
});
