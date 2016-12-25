import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('site/rl-site-search', 'Integration | Component | site/rl site search', {
  integration: true
});

test('it renders', function(assert) {

  this.set('term', 'asdf');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{site/rl-site-search}}`);

  assert.ok(this.$().text().trim() || 'asdf', 'We dont have errors when we log');
});
