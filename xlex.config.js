module.exports = {
  hooks: {},
  tokens: [
    {
      type: 'Identifier',
      rule: '[_a-zA-Z][_a-zA-Z0-9]*'
    },
    {
      type: 'Number',
      rule: '-?[0-9]+.?',
      callback({ type, value }) {
        const num = Number.parseInt(value);
        if (num > Number.MAX_SAFE_INTEGER
          || num < Number.MIN_SAFE_INTEGER) {
          throw new Error(`"${value}" is not an safe integer`);
        }
        return {
          type, value: num
        };
      }
    },
    {
      type: 'Float',
      rule: '-?([0-9]+.[0-9]+|.[0-9]+)',
      callback({ type, value }) {
        const num = Number.parseFloat(value)
        if (!isFinite(num)) {
          throw new Error(`"${value}" is not a leggal float number`);
        }
        return {
          type, value: num
        }
      }
    },
    {
      type: 'String',
      rule: '"([ !#-~]|\\")+"',
      callback({ type, value }) {
        const str = value.replace(/\\"/g, '"');
        return {
          type, value: str.substr(1, str.length - 2)
        }
      }
    },
    {
      type: 'Plus',
      rule: '\\+'
    },
    {
      type: 'Minus',
      rule: '-'
    },
    {
      type: 'Mul',
      rule: '\\*'
    },
    {
      type: 'Div',
      rule: '/'
    },
    {
      type: 'Assignment',
      rule: '='
    },
    {
      type: 'Equal',
      rule: '=='
    },
    {
      type: 'Comma',
      rule: ','
    },
    {
      type: 'Colon',
      rule: ':'
    },
    {
      type: 'Semicolon',
      rule: ';'
    },
    {
      type: 'Dot',
      rule: '.'
    },
    {
      type: 'LessThan',
      rule: '<'
    },
    {
      type: 'MoreThan',
      rule: '>'
    },
    {
      type: 'LessOrEqual',
      rule: '<='
    },
    {
      type: 'MoreOrEqual',
      rule: '>='
    },
    {
      type: 'LRound',
      rule: '\\('
    },
    {
      type: 'RRound',
      rule: '\\)'
    },
    {
      type: 'LBrace',
      rule: '{'
    },
    {
      type: 'RBrace',
      rule: '}'
    }
  ]
};
