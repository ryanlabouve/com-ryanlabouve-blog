import Service from '@ember/service';
import {set} from '@ember/object';

export default Service.extend({
  mode: 'light',

  setupColorSchemePreference(e) {
    const darkModeOn = e.matches;
    console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
    if (darkModeOn) {
      set(this, 'mode', 'dark');
    } else {
      set(this, 'mode', 'light');
    }
  },
  init() {
    this._super(...arguments);
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    this.setupColorSchemePreference(darkModeMediaQuery);
    darkModeMediaQuery.addListener(e => {
      this.setupColorSchemePreference(e);
    });
  },
});
