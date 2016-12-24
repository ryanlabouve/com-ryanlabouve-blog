import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('speaking');
  this.route('projects');
  this.route('blog', { path: '/' }, function() {});
  this.route('article', { path: '/:slug' });
});

export default Router;
