import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site/rl-site-search', 'Integration | Component | site/rl site search', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site/rl-site-search}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#site/rl-site-search}}
      template block text
    {{/site/rl-site-search}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
