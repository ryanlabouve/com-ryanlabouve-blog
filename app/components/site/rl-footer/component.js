import Ember from 'ember';

export default Ember.Component.extend({
  socialLinks: [
    {
      title: 'RSS',
      icon: 'rss',
      link: '#',
      color: '#c7b572'
    },
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
    },
    {
      title: 'Instagram',
      icon: 'instagram',
      link: 'https://www.linkedin.com/in/ryanlabouve',
      color: '405de6'
    },
    {
      title: 'Dribbble',
      icon: 'dribbble',
      link: 'https://www.linkedin.com/in/ryanlabouve',
      color: '#ea4c89',
      last: true
    },
  ],
});
