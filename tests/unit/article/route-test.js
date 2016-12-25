import { moduleFor, test } from 'ember-qunit';

moduleFor('route:article', 'Unit | Route | article', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:metrics',
    'ember-metrics@metrics-adapter:google-analytics'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
