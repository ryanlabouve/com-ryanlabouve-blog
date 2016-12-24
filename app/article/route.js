import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let slug = params.slug;
    return this.store.queryRecord('article', {
      filter: {
        slug
      }
    });
  }
});
