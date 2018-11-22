import {Factory, faker} from 'ember-cli-mirage';
import {dasherize} from '@ember/string';

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
    return dasherize(faker.internet.userName());
  },

  content() {
    return `<strong>test</strong>`;
  },
});
