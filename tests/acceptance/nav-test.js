import { test } from 'qunit';
import moduleForAcceptance from 'com-ryanlabouve-blog/tests/helpers/module-for-acceptance';

import sitePage from 'com-ryanlabouve-blog/tests/pages/site';

moduleForAcceptance('Acceptance | nav');

test('navigating to all the major pages', function(assert) {
  assert.expect(7);

  sitePage.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/',
      'We start on the home page'
    );
  });


  let majorPages = ['Blog', 'Speaking', 'Projects', 'About'];
  andThen(function() {
    assert.equal(
      majorPages.length,
      4,
      'We can see a link for each for major page'
    );
  });

  sitePage.nav.blogLink.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/',
      'We are on the blog page'
    );
  });

  sitePage.nav.speakingLink.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/speaking',
      'We are on the speaking page'
    );
  });

  sitePage.nav.projectsLink.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/projects',
      'We are on the projects page'
    );
  });

  sitePage.nav.aboutLink.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/about',
      'We are on the about page'
    );
  });


  sitePage.nav.brandLink.visit();
  andThen(function() {
    assert.equal(
      currentURL(),
      '/',
      'We are on the blog page after clicking on the branding link'
    );
  });
});

