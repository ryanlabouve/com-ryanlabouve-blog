import {
  create,
  visitable,
  collection,
  clickable,
  text,
  count,
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  header: clickable(),
  nav: {
    scope: '[data-test-nav]',

    blogLink: {
      scope: ` a:contains('Blog')`,
      visit: clickable(),
    },
    speakingLink: {
      scope: ` a:contains('Speaking')`,
      visit: clickable(),
    },

    projectsLink: {
      scope: ` a:contains('Projects')`,
      visit: clickable(),
    },

    aboutLink: {
      scope: ` a:contains('About')`,
      visit: clickable(),
    },

    brandLink: {
      scope: '[data-test-brand]',
      visit: clickable(),
    },

    links: collection({
      itemScope: '.js-nav-link',
      count: count(),
      item: {
        visit: visitable(),
        text: text(),
      },
    }),
  },
});
