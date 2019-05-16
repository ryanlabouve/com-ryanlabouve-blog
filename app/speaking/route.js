import Route from '@ember/routing/route';

let talks = [
  {
    title: 'Ember new Indie Software',
    video: 'https://www.youtube.com/watch?v=MW8LGwdY3lk&t=3s',
    date: 'March 18, 2019',
  },
  {
    title: 'Turning an Idea into Software',
    meetup: 'https://www.meetup.com/FreeCodeCampOKC/events/256959962/',
    video: 'https://www.youtube.com/watch?v=KiRSFnk2t-s',
    date: 'December 9, 2018',
  },
  {
    title: 'A Programmer Has No Name',
    meetup: 'https://www.meetup.com/OKC-Ruby/events/255619218/',
    date: 'November 8, 2018',
  },
  {
    title: 'The Fearless Interview',
    video: 'https://youtu.be/vI3qsCbMcKI?t=13',
    meetup: 'https://www.meetup.com/FreeCodeCampOKC/events/249226726/',
    date: 'April 15, 2018',
  },
  {
    title: 'A Guide to Surviving Sidekiq',
    video: 'https://youtu.be/7RByFVcvbBU?t=8',
    meetup: 'https://www.meetup.com/OKC-Ruby/events/240562499/',
    slides: 'https://github.com/ryanlabouve/dungeons_and_wizards_fe',
    date: 'June 8, 2017',
  },
  {
    title: 'Contributing to Open Source',
    slides: 'http://slides.com/ryanlabouve/contribute-to-open-source#/',
    meetup: 'https://www.meetup.com/OKC-js/events/228003769/',
    date: 'June 21, 2016',
  },
  {
    title: 'Start Your Engines',
    slides: 'http://slides.com/ryanlabouve/start-your-engines#/',
    date: 'July 12, 2016',
  },
  {
    title: 'Reacting to Change (in Ember)',
    slides: 'https://github.com/ryanlabouve/reacting-to-change-emberjs',
    meetup: 'http://okcjs.com/2015/12/15/2015-12-15-lightning-talks-11/',
    date: 'Dec 15, 2015',
  },
  {
    title: 'Fake it While We Make It (Featuring Ember.js and Rails API)',
    meetup: 'http://www.okcruby.org/blog/2015/02/05/february-2015-meeting/',
    slides:
      'http://www.slideshare.net/ryanlabouve/fake-it-while-we-make-it-datadriven-prototyping?ref=http://ryanlabouve.com/speaking/',
    date: 'Feb 12, 2015',
  },
  {
    title: 'Content Security Policy (Featuring Ember.js)',
    meetup: 'http://okcjs.com/2015/02/04/2015-02-17-lightning-talks-7/',
    slides:
      'http://www.slideshare.net/ryanlabouve/content-security-policy-44793165?ref=http://ryanlabouve.com/speaking/',
    date: 'Feb 17, 2015',
  },
  {
    title: 'TodoMVC in Ember-CLI',
    video: 'https://www.youtube.com/watch?v=tonV3G2cPrA',
    date: 'Dec 1, 2014',
  },
  {
    title: 'Web Typography (A Long Dark Rant)',
    slides:
      'http://www.slideshare.net/ryanlabouve/web-typography-a-long-dark?ref=http://ryanlabouve.com/speaking/',
    date: 'Aug 15, 2014',
  },
  {
    title: 'Understanding Responsive Web Design',
    slides:
      'http://www.slideshare.net/ryanlabouve/understanding-responsivewebdesign?ref=http://ryanlabouve.com/speaking/',
    date: 'Dec 22, 2014',
  },
];

export default Route.extend({
  titleToken: 'Speaking',
  model() {
    return talks;
  },
});
