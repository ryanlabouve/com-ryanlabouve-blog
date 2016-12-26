import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Blog',
  model() {
    return this.store.findAll('article');
  }
});
