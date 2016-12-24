import { test } from 'qunit';
import moduleForAcceptance from 'com-ryanlabouve-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog', {
  beforeEach() {
    server.createList('article', 10);
  }
});

import blogPage from 'com-ryanlabouve-blog/tests/pages/blog';

test('We can see articles', function(assert) {
  blogPage.visit();

  andThen(function() {
    assert.equal(
      blogPage.articles().count,
      server.db.articles.length,
      'We see the correct number of articles listed on the home page'
    );
  });
});
