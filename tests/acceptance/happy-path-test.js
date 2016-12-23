import { test } from 'qunit';
import moduleForAcceptance from 'com-ryanlabouve-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | happy path');

import sitePage from 'com-ryanlabouve-blog/tests/pages/site';

test('visiting /happy-path', function(assert) {
  sitePage.visit();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

