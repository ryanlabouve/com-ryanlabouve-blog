import Ember from 'ember';

export default Ember.Component.extend({
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
      title: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/ryanlabouve'
    },
    {
      title: 'github',
      icon: 'github',
      link: 'https://github.com/ryanlabouve'
    },
    {
      title: 'linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/ryanlabouve'
    }
  ]
});
