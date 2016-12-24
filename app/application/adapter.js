import DS from 'ember-data';
import config from 'com-ryanlabouve-blog/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.API.host
});
