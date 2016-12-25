import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  doSearch: Ember.observer('term', function() {
    this.get('searchTask').perform(this.get('term'));
  }),

  searchTask: task(function*(term) {
    yield timeout(300);
    let results = yield this.get('store').query('article', {
      filter: {
        term
      }
    });
    this.set('searchResults', results);
  }).restartable()
});
