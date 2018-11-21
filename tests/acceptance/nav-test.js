import { currentURL } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

import sitePage from 'com-ryanlabouve-blog/tests/pages/site';

module('Acceptance | nav', function(hooks) {
  setupApplicationTest(hooks);

  test('navigating to all the major pages', function(assert) {
    assert.expect(7);

    sitePage.visit();
    assert.equal(
      currentURL(),
      '/',
      'We start on the home page'
    );


    let majorPages = ['Blog', 'Speaking', 'Projects', 'About'];
    assert.equal(
      majorPages.length,
      4,
      'We can see a link for each for major page'
    );

    sitePage.nav.blogLink.visit();
    assert.equal(
      currentURL(),
      '/',
      'We are on the blog page'
    );

    sitePage.nav.speakingLink.visit();
    assert.equal(
      currentURL(),
      '/speaking',
      'We are on the speaking page'
    );

    sitePage.nav.projectsLink.visit();
    assert.equal(
      currentURL(),
      '/projects',
      'We are on the projects page'
    );

    sitePage.nav.aboutLink.visit();
    assert.equal(
      currentURL(),
      '/about',
      'We are on the about page'
    );


    sitePage.nav.brandLink.visit();
    assert.equal(
      currentURL(),
      '/',
      'We are on the blog page after clicking on the branding link'
    );
  });
});

