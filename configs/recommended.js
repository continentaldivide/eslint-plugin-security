/**
 * @fileoverview the `recommended` config for `eslint.config.js`
 * @author 唯然<weiran.zsd@outlook.com>
 */

'use strict';

const { configs, rules } = require('../index.js');

module.exports = {
  plugins: { security: { rules } },
  rules: configs['recommended'].rules,
};
