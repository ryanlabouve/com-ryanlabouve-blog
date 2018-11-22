import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, find} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rl article li', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.lookup('router:main').setupRouter();
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('article', {
      slug: 'asdf',
    });
    await render(hbs`{{rl-article-li article=article}}`);

    assert.ok(find('*').textContent.trim(), 'it renders');
  });
});
