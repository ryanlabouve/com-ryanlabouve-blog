## Module Report
### Unknown Global

**Global**: `Ember.testing`

**Location**: `app/components/site/rl-nav/component.js` at line 81

```js
  hideMobileMenu: Ember.computed.not('showMobileMenu'),
  showMobileMenu: Ember.computed('windowSize', function() {
    return this.get('windowSize') <= this.get('showMobileMenuAt') && !Ember.testing;
  }),

```
