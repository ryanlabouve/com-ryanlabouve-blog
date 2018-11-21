
import { safeString } from 'com-ryanlabouve-blog/helpers/safe-string';
import { module, test } from 'qunit';

module('Unit | Helper | safe string', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = safeString([42]);
    assert.ok(result);
  });
});

