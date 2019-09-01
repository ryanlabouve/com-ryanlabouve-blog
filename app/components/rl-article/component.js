/* globals hljs */
import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$('pre code')
      .toArray()
      .forEach(block => {
        this.$(block).addClass('ba b--black-10');
        hljs.highlightBlock(block);
      });
  },
});
