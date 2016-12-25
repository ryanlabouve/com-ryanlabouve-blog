import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let slug = params.slug;
    return this.store.query('article', {
      filter: {
        slug
      }
    });
  },

  activate() {
    this._super(...arguments);
    window.scrollTo(0,0);
  },

  setupController(controller, model) {
    controller.set('model', model.get('firstObject'));
  }
});
