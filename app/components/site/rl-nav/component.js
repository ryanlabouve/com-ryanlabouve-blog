import Ember from 'ember';

export default Ember.Component.extend({
  showMobileMenuAt: 960,
  _showMobileMenu: false,

  init() {
    this._super(...arguments);
    this.setWindowSize();
  },

  links: [
    {
      title: 'Blog',
      path: 'blog'
    },
    {
      title: 'Speaking',
      path: 'speaking'
    },
    {
      title: 'Projects',
      path: 'projects'
    },
    {
      title: 'About',
      path: 'about'
    }
  ],

  socialLinks: [
    {
      title: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/ryanlabouve',
      color: '#1da1f2'
    },
    {
      title: 'Github',
      icon: 'github',
      link: 'https://github.com/ryanlabouve',
      color: '#333333'
    },
    {
      title: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/ryanlabouve',
      color: '#0077b5'
    }
  ],

  setWindowSize() {
    this.set('windowSize', Ember.$(window).width());
  },

  didInsertElement() {
    Ember.$(window).on(`resize.${this.id}`, () => {
      window.requestAnimationFrame(() => {
        this.set('_showMobileMenu', false);
        this.setWindowSize();
      });
    });
  },

  willDestroyElement() {
    Ember.$(window).off(`resize.${this.id}`);
  },

  hideMobileMenu: Ember.computed.not('showMobileMenu'),
  showMobileMenu: Ember.computed('windowSize', function() {
    return this.get('windowSize') <= this.get('showMobileMenuAt') && !Ember.testing;
  }),

  actions: {
    toggleMobileMenu() {
      this.toggleProperty('_showMobileMenu');
    },

    toggleSearchBar() {
      this.toggleProperty('_showSearchBar');
      if (this.get('_showSearchBar')) {
        Ember.run.next(() => {
          Ember.$('#search input').focus();
        });
      }
    },

    closeMenu() {
      this.set('_showMobileMenu', false);
    }
  }
});
