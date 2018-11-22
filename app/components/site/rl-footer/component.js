import {computed} from '@ember/object';
import {inject as service} from '@ember/service';
import Component from '@ember/component';

const SOCIAL_LINKS = [
  {
    title: 'RSS',
    icon: 'rss',
    link: 'https://github.com/ryanlabouve/com-ryanlabouve-blog/issues/25',
    color: '#c7b572',
  },
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
  {
    title: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/ryanlabouve/',
    color: '405de6',
  },
  {
    title: 'Dribbble',
    icon: 'dribbble',
    link: 'https://www.linkedin.com/in/ryanlabouve',
    color: '#ea4c89',
    last: true,
  },
];
export default Component.extend({
  store: service(),
  recentArticles: computed(function() {
    return this.store.query('article', {
      filter: {
        limit: 5,
      },
    });
  }),
  socialLinks: SOCIAL_LINKS,
});
