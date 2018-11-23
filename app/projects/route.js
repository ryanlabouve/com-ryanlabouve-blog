import Route from '@ember/routing/route';

let projects = [
  {
    title: 'Ember Minesweep',
    url: 'http://ember-minesweep.surge.sh/',
    repo: 'https://github.com/ryanlabouve/ember-minesweep',
    description: 'Game jam: Minesweeper in 1 night with @chundabear',
  },
  {
    title: 'dport',
    repo: 'https://github.com/ryanlabouve/dport',
    description: 'A small utility for clearing ports',
  },
  {
    title: 'ember-cli-randoport',
    repo: 'https://github.com/ryanlabouve/ember-cli-randoport',
    description: 'Start your ember projects on a new rando port',
  },
  {
    title: 'ember-cli-o',
    repo: 'https://github.com/ryanlabouve/ember-cli-o',
    description: 'Open your Ember project from the command line',
  },
  {
    title: 'A Day',
    url: 'https://ryanlabouve.github.io/a-day/index.html',
    repo: 'https://github.com/ryanlabouve/a-day',
    description:
      'A simple business calculator: how much would I need to make a day for this silly idea to work',
  },
  {
    title: 'Minimal Tray Clock',
    repo: 'https://github.com/ryanlabouve/minimal-tray-clock',
    description: 'Tired of knowing exactly what time it is? Got you covered.',
  },
  {
    title: 'caloriculator',
    url: 'http://caloriculator.com/',
    repo: 'https://github.com/ryanlabouve/caloriculator',
    description:
      "Lock in your gains with science calculators. Here's the code.",
  },
  {
    title: 'Five-3-1 Calculator',
    url:
      'http://five-3-1.surge.sh/?benchMax=250&deadliftMax=360&pressMax=170&squatMax=315',
    repo: 'https://github.com/ryanlabouve/five-3-1',
    description: 'Figure out your number when you are lifint with five-3-1',
  },
  {
    title: 'ember-cli-rangesliderjs',
    repo: 'https://github.com/ryanlabouve/ember-cli-rangesliderjs',
    description: 'Ember addon for rangeslider.js',
  },
  {
    title: 'input-with-floating-label',
    repo: 'https://github.com/ryanlabouve/input-with-floating-label',
    description: 'Playing with floating label in ember components',
  },
  {
    title: 'ember-timemachine',
    repo: 'https://github.com/ryanlabouve/ember-timemachine',
    description: 'Mock dates in your tests',
  },
];

export default Route.extend({
  titleToken: 'Projects',
  model() {
    return projects;
  },
});
