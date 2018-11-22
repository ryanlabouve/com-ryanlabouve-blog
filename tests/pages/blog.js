import {create, visitable, collection, clickable} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  articles: collection({
    itemScope: '[data-test-article-listing]',
    item: {
      title: '[data-test-article-title]',
      description: '[data-test-article-description]',
      date: '[data-test-article-date]',
      visit: clickable('[data-test-article-link]'),
    },
  }),
});
