/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-30 23:50:21
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { AnalySizeOption, analySize, analyUnit } from '@tuimao/core'

import './index.css'

export interface GridProps {
  size?: AnalySizeOption
  gap?: number
  justifyContent?: string
  alignItems?: string
  children?: JSX.Element | JSX.Element[]
}

function Grids(props: GridProps) {
  const size = analySize(props?.size || ['auto', 'auto'])
  const gap = analyUnit(props.gap || '')
  const justifyContent = props.justifyContent || 'space-between'
  const alignItems = props.alignItems || 'initial'
  const style = {
    '--grid-width': size.width,
    '--grid-height': size.height,
    '--grid-justify-content': justifyContent,
    '--grid-align-items': alignItems,
    '--grid-gap': gap
  }
  return (
    <div className="grid__container" style={style as any}>
      {props.children}
    </div>
  )
}
export default Grids
