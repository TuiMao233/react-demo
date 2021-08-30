/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-30 23:58:46
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import Header from '../../components/Header/Header'
import { Button, Card, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {
  LoadingArticleSkelets,
  LoadingRectSkelets as _LoadingRectSkelets,
  LoadingTextSkelets
} from './LoadingSkelets'
import { useEffect, useState } from 'react'
import { reqInterview } from '../../api'
import Grids from '../../components/Grids/Grids'
import { Search as SearchIcon } from '@ricons/ionicons5'
import ReactECharts from 'echarts-for-react'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [interviews, setInterviews] = useState({
    product_launch_data: undefined as undefined | any[],
    product_trends: undefined as undefined | any[],
    products: undefined as undefined | any[]
  })

  const resetInterview = async () => {
    setIsLoading(true)
    const { data } = await reqInterview(searchText)
    setInterviews(data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    resetInterview()
  }, [])

  const LoadingRectSkelets = _LoadingRectSkelets.map((v, k) => (
    <Grid key={k} item xs={6}>
      {v}
    </Grid>
  ))
  const RightContent = (
    <div className="flex gap-20 items-center">
      <TextField
        className="flex-1"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
        defaultValue={searchText}
        placeholder="请输入搜索内容"
        onChange={(el) => setSearchText(el.target.value)}
      />
      <Button variant="outlined">
        <SearchIcon className="w-28 h-28" />
      </Button>
    </div>
  )

  return (
    <>
      <Header right={RightContent} />
      <div className="py-36 px-36 lg:w-1000 mx-auto flex flex-col gap-28">
        <div>Recent product launches</div>

        <Grid container spacing={3}>
          {isLoading
            ? LoadingRectSkelets
            : interviews.product_launch_data?.map((value, key) => {
                return <ReactECharts key={key} option={{}} />
              })}
        </Grid>

        <div>Related product trends</div>

        <Grids size={['200px', 'auto']} gap={10}>
          {isLoading ? LoadingTextSkelets : <Card variant="outlined"></Card>}
        </Grids>

        <div>Related new products published in the last 7 days</div>

        <Grids size={['200px', 'auto']} gap={10}>
          {isLoading ? (
            LoadingArticleSkelets
          ) : (
            <Card variant="outlined">
              <img className="h-192" />
            </Card>
          )}
        </Grids>
      </div>
    </>
  )
}

export default Home
