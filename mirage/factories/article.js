import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },

  description() {
   return faker.lorem.paragraph();
  },

  date() {
    return faker.date.past();
  }
});
