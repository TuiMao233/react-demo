/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 22:48:13
 * @LastEditTime: 2021-08-30 22:49:17
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://3.141.23.218:5000'
})

export default http
