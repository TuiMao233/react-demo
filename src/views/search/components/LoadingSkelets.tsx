import Skeleton from '@material-ui/lab/Skeleton'

/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 23:01:41
 * @LastEditTime: 2021-08-31 09:45:30
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const fillArray = (num: number, value?: any) => new Array(num).fill(value)

export const LoadingRectSkelets = fillArray(1).map((_, key) => (
  <div key={key}>
    <Skeleton variant="text" />
    <Skeleton className="mt-10" variant="rect" height={192} />
  </div>
))

export const LoadingTextSkelets = fillArray(4).map((_, key) => (
  <div key={key}>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={60} />
    <Skeleton className="mt-10" variant="rect" height={200} />
  </div>
))

export const LoadingArticleSkelets: JSX.Element[] = fillArray(12).map((_, key) => (
  <div key={key}>
    <Skeleton className="mt-10" variant="rect" height={200} />
    <Skeleton className="mt-10" variant="rect" height={100} />
  </div>
))
