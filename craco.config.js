/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:43:56
 * @LastEditTime: 2021-08-31 00:23:37
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// craco.config.js
const path = require('path')
module.exports = {
  webpack: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  style: {
    postcss: { plugins: [require('tailwindcss'), require('autoprefixer')] }
  }
}
