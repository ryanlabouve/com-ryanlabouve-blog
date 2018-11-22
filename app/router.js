import {getWithDefault} from '@ember/object';
import {scheduleOnce} from '@ember/runloop';
import {inject as service} from '@ember/service';
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title = getWithDefault('currentRouteName', 'unknown');

      this.metrics.trackPage({page, title});
    });
  },
});

Router.map(function() {
  this.route('about');
  this.route('speaking');
  this.route('projects');
  this.route('blog', {path: '/'}, function() {});
  this.route('article', {path: '/:slug'});
});

export default Router;
