import {currentURL} from '@ember/test-helpers';
import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import blogPage from 'com-ryanlabouve-blog/tests/pages/blog';

module('Acceptance | blog', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    server.createList('article', 10);
  });

  test('We can see articles', function(assert) {
    blogPage.visit();

    assert.equal(
      blogPage.articles().count,
      server.db.articles.length,
      'We see the correct number of articles listed on the home page',
    );
  });

  test('We can visit an article', function(assert) {
    blogPage.visit();
    blogPage.articles(0).visit();

    assert.equal(
      currentURL(),
      `/${server.db.articles[0].slug}`,
      'We are looking at the article page',
    );
  });
});
