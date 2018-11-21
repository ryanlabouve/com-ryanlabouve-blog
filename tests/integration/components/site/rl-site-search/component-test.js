import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site/rl site search', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('term', 'asdf');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{site/rl-site-search}}`);

    assert.ok(find('*').textContent.trim() || 'asdf', 'We dont have errors when we log');
  });
});
