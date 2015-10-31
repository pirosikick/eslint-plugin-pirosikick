'use strict';

import rule, {message} from '../../lib/rules/avoid-ios9-viewport-bug';
import {RuleTester} from 'eslint';

const ruleTester = new RuleTester();

const valid = [
  {
    code: 'var width = document.documentElement.clientWidth;'
  }
];

const invalid = [
  {
    code: 'var innerWidth = window.innerWidth;',
    errors: [{
      line: 1,
      column: 18,
      message: message.width
    }]
  },
  {
    code: 'someFunction(window.innerHeight);',
    errors: [{
      line: 1,
      column: 14,
      message: message.height
    }]
  }
];

ruleTester.run("avoid-ios9-viewport-bug", rule, { valid, invalid });
