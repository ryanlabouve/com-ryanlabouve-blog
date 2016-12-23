import Ember from 'ember';

export default Ember.Component.extend({
  links: [
    {
      title: 'Blog',
      path: 'index'
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
  ]
});
