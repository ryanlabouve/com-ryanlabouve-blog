import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site/rl-footer/rl-footer-box', 'Integration | Component | site/rl footer/rl footer box', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site/rl-footer/rl-footer-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site/rl-footer/rl-footer-box}}
      template block text
    {{/site/rl-footer/rl-footer-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
