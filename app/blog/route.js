import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'Blog',
  model() {
    return this.store.findAll('article');
  }
});
