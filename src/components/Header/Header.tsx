/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-30 21:17:09
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

function Header(props?: { right?: JSX.Element }) {
  return (
    <div className="p-20 flex items-center gap-20 border-b border-gray-200">
      <div className="text-lg">
        <span className="font-bold">Best</span>
        <span>Search</span>
      </div>
      <div className="flex-1">{props?.right}</div>
    </div>
  )
}
export default Header
