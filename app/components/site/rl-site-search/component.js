import {observer} from '@ember/object';
import {inject as service} from '@ember/service';
import Component from '@ember/component';
import {task, timeout} from 'ember-concurrency';

export default Component.extend({
  store: service(),

  /* eslint ember/no-observers: 0 */
  doSearch: observer('term', function() {
    this.searchTask.perform(this.term);
  }),
  /* eslint ember/no-observers: 1 */

  searchTask: task(function*(term) {
    yield timeout(300);
    let results = yield this.store.query('article', {
      filter: {
        term,
      },
    });
    this.set('searchResults', results);
  }).restartable(),
});
