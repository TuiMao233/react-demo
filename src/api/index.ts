import http from './http.config'

/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 22:50:12
 * @LastEditTime: 2021-08-30 23:30:52
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
interface Response<T> {
  status: string
  msg: string
  data: T
}

export const reqInterview = (searchText?: string) => {
  type Data = { product_launch_data: any[]; product_trends: any[]; products: any[] }
  return http.post<Response<Data>>('/interview/keyword_search', {
    login_token: 'INTERVIEW_SIMPLY2021',
    search_phrase: searchText
  })
}
