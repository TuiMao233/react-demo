import Skeleton from '@material-ui/lab/Skeleton'

/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 23:01:41
 * @LastEditTime: 2021-08-30 23:25:16
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export const LoadingRectSkelets = new Array(1).fill(
  <div>
    <Skeleton variant="text" />
    <Skeleton className="mt-10" variant="rect" height={192} />
  </div>
)
export const LoadingTextSkelets = new Array(4).fill(
  <div>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={60} />
    <Skeleton className="mt-10" variant="rect" height={200} />
  </div>
)

export const LoadingArticleSkelets: JSX.Element[] = new Array(12).fill(
  <div>
    <Skeleton className="mt-10" variant="rect" height={200} />
    <Skeleton className="mt-10" variant="rect" height={100} />
  </div>
)
