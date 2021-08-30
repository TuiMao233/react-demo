/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:30:44
 * @LastEditTime: 2021-08-30 22:52:32
 * @Description: ts-react 还未经测试, 目前存在 tsx 无法检测的问题, jsx 没有问题
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const _ = require('lodash')

module.exports = _.merge(require('@tuimao/eslint/ts-react.js'), {
  rules: {
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
})
