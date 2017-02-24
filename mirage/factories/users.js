import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  username(i){return 'test' + `${i+1}`;},
  password(i){return 'test' + `${i+1}`;},
  email(i){return faker.internet.email();},
});
