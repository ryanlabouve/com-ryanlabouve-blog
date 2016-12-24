import {
  create,
  visitable,
  collection,
  clickable
} from 'ember-cli-page-object';

import testSelector from 'com-ryanlabouve-blog/tests/helpers/ember-test-selectors';

export default create({
  visit: visitable('/'),
  articles: collection({
    itemScope: testSelector('article-listing'),
    item: {
      title: testSelector('article-title'),
      description: testSelector('article-description'),
      date: testSelector('article-date'),
      visit: clickable(testSelector('article-link'))
    }
  })
});
