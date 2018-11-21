import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function safeString(params/*, hash*/) {
  return htmlSafe(params[0]);
}

export default buildHelper(safeString);
