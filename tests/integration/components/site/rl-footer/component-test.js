import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site/rl-footer', 'Integration | Component | site/rl footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site/rl-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site/rl-footer}}
      template block text
    {{/site/rl-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
