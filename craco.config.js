/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:43:56
 * @LastEditTime: 2021-08-30 17:43:56
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
