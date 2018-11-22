import {next} from '@ember/runloop';
import {computed} from '@ember/object';
import {not} from '@ember/object/computed';
import $ from 'jquery';
import Component from '@ember/component';
import Ember from 'ember';

const LINKS = [
  {
    title: 'Blog',
    path: 'blog',
  },
  {
    title: 'Speaking',
    path: 'speaking',
  },
  {
    title: 'Projects',
    path: 'projects',
  },
  {
    title: 'About',
    path: 'about',
  },
];

const SOCIAL_LINKS = [
  {
    title: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/ryanlabouve',
    color: '#1da1f2',
  },
  {
    title: 'Github',
    icon: 'github',
    link: 'https://github.com/ryanlabouve',
    color: '#333333',
  },
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/ryanlabouve',
    color: '#0077b5',
  },
];

export default Component.extend({
  showMobileMenuAt: 960,
  _showMobileMenu: false,

  init() {
    this._super(...arguments);
    this.setWindowSize();
  },

  links: LINKS,
  socialLinks: SOCIAL_LINKS,
  setWindowSize() {
    this.set('windowSize', window.innerWidth);
  },

  _canWormhole: false,

  canWormhole() {
    let canWormhole = $('#menu').length && $('#search').length;
    this.set('_canWormhole', canWormhole);
    return canWormhole;
  },

  didInsertElement() {
    this.canWormhole();
    $(window).on(`resize.${this.id}`, () => {
      next(function() {
        window.requestAnimationFrame(() => {
          this.set('_showMobileMenu', false);
          this.setWindowSize();
        });
      });
    });
  },

  willDestroyElement() {
    $(window).off(`resize.${this.id}`);
  },

  hideMobileMenu: not('showMobileMenu'),
  showMobileMenu: computed('windowSize', function() {
    return this.windowSize <= this.showMobileMenuAt && !Ember.testing;
  }),

  actions: {
    toggleMobileMenu() {
      this.toggleProperty('_showMobileMenu');
    },

    toggleSearchBar() {
      this.toggleProperty('_showSearchBar');
      if (this._showSearchBar) {
        next(() => {
          $('#search input').focus();
        });
      }
    },

    closeMenu() {
      this.set('_showMobileMenu', false);
    },

    closeSearch() {
      this.set('_showSearchBar', false);
    },
  },
});
