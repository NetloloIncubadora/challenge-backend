'use strict';

module.exports = {
  params: {
    type: 'object',
    properties: {
      values: { type: 'string' }
    },
    required: [
      'values',
    ]
  }
};