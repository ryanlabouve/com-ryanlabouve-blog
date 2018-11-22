import {currentURL} from '@ember/test-helpers';
import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import sitePage from 'com-ryanlabouve-blog/tests/pages/site';

module('Acceptance | happy path', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /happy-path', async function(assert) {
    await sitePage.visit();

    assert.equal(currentURL(), '/');
  });
});
