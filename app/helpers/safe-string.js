import Ember from 'ember';

export function safeString(params/*, hash*/) {
  return Ember.String.htmlSafe(params[0]);
}

export default Ember.Helper.helper(safeString);
