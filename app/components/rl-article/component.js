/* globals hljs */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('pre code').toArray().forEach((block) => {
      this.$(block).addClass("ba b--black-10");
      hljs.highlightBlock(block);
    });

    this.$('p, li').addClass('measure lh-copy');
  }
});
