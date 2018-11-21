import Route from '@ember/routing/route';

let projects = [
  {
    title: 'dport',
    repo: 'https://github.com/ryanlabouve/dport',
    description: 'A small utility for clearing ports'
  },
  {
    title: 'ember-cli-randoport',
    repo: 'https://github.com/ryanlabouve/ember-cli-randoport',
    description: 'Start your ember projects on a new rando port'
  },
  {
    title: 'caloriculator',
    url: 'http://caloriculator.com/',
    repo: 'https://github.com/ryanlabouve/caloriculator',
    description: 'Lock in your gains with science calculators. Here\'s the code.'
  },
  {
    title: 'ember-cli-rangesliderjs',
    repo: 'https://github.com/ryanlabouve/ember-cli-rangesliderjs',
    description: 'Ember addon for rangeslider.js'
  },
  {
    title: 'input-with-floating-label',
    repo: 'https://github.com/ryanlabouve/input-with-floating-label',
    description: 'Playing with floating label in ember components'
  },
  {
    title: 'ember-timemachine',
    repo: 'https://github.com/ryanlabouve/ember-timemachine',
    description: 'Mock dates in your tests'
  }
];

export default Route.extend({
  titleToken: 'Projects',
  model() {
    return projects;
  }
});
