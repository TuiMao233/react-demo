/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-31 16:09:24
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { useHistory } from 'react-router-dom'

function Header(props?: { right?: JSX.Element }) {
  const history = useHistory()

  return (
    <div className="p-20 flex items-center gap-20 border-b border-gray-200">
      <div className="text-lg cursor-pointer" onClick={() => history.push('/home')}>
        <span className="font-bold">Best</span>
        <span>Search</span>
      </div>
      <div className="flex-1">{props?.right}</div>
    </div>
  )
}
export default Header
