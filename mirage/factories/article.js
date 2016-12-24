import { Factory, faker } from 'ember-cli-mirage';
import Ember from 'ember';

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },

  description() {
   return faker.lorem.paragraph();
  },

  date() {
    return faker.date.past();
  },

  slug() {
    return Ember.String.dasherize(faker.internet.userName());
  },

  content() {
    return `<strong>test</strong>`;
  }
});
