import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, find} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | site/rl nav', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.lookup('router:main').setupRouter();
  });

  test('it renders', async function(assert) {
    await render(hbs`{{site/rl-nav}}`);

    assert.ok(find('*').textContent.trim(), 'it renders');
  });
});
