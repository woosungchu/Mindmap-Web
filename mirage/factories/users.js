import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  username(i){return 'username' + `${i+1}`;},
  email(i){return faker.internet.email();}
});
