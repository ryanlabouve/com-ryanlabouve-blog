import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site/rl content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{site/rl-content}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#site/rl-content}}
        template block text
      {{/site/rl-content}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
