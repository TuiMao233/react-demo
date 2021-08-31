/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-31 11:58:59
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import Header from '@/components/Header/Header'
import { Button, Card, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {
  LoadingArticleSkelets,
  LoadingRectSkelets as _LoadingRectSkelets,
  LoadingTextSkelets
} from './components/LoadingSkelets'
import { useEffect, useState } from 'react'
import { reqInterview } from '@/api'
import Grids from '@/components/Grids/Grids'
import { Search as SearchIcon } from '@ricons/ionicons5'
import ReactECharts from 'echarts-for-react'
import { EChartOption } from 'echarts'

const LoadingRectSkelets = _LoadingRectSkelets.map((v, k) => (
  <Grid key={k} item xs={6}>
    {v}
  </Grid>
))

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

  const getBarOptions = () => {
    const xAxisData = interviews.product_launch_data?.map((v) => v.key_as_string)
    const yAxisData = interviews.product_launch_data?.map((v) => v.doc_count)
    const options: EChartOption = {
      title: { text: 'Hat', top: '20px', left: '10px' },
      grid: { top: '30%', left: '5%', right: '5%', bottom: '5%' },
      backgroundColor: '#ffffff',
      series: [
        {
          type: 'bar',
          data: yAxisData,
          itemStyle: { color: '#96CBB5' },
          markPoint: {
            data: [{ type: 'max' }],
            symbol: 'image://none',
            label: { offset: [0, -10], color: '#000000' }
          }
        }
      ],
      tooltip: { show: true },
      xAxis: {
        type: 'category',
        data: xAxisData,
        splitLine: { show: false },
        minorSplitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
      }
    }
    return options
  }

  const getLineOptions = (item: any) => {
    const options: EChartOption = {
      grid: { top: '30%', left: '5%', right: '5%', bottom: '5%' },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        splitLine: { show: false },
        minorSplitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    }
    return options
  }

  return (
    <>
      <Header
        right={
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
            <Button variant="outlined" onClick={resetInterview}>
              <SearchIcon className="w-28 h-28" />
            </Button>
          </div>
        }
      />
      <div className="py-36 px-36 lg:w-1000 mx-auto flex flex-col gap-28">
        <div>Recent product launches</div>

        <Grid container spacing={3}>
          {isLoading ? (
            LoadingRectSkelets
          ) : (
            <Grid item xs={12} lg={6}>
              <ReactECharts className="xl:h-224" option={getBarOptions()} />
            </Grid>
          )}
        </Grid>

        <div>Related product trends</div>

        <Grids size={['200px', 'auto']} gap={10}>
          {isLoading
            ? LoadingTextSkelets
            : interviews.product_trends?.map((value, index) => (
                <Card key={index} variant="outlined">
                  <ReactECharts className="h-192" option={getLineOptions(value)} />
                  <div className="py-10 text-center text-xs text-gray-500">May 2018 - May 2020</div>
                </Card>
              ))}
        </Grids>

        <div>Related new products published in the last 7 days</div>

        <Grids size={['200px', 'auto']} gap={10}>
          {isLoading
            ? LoadingArticleSkelets
            : interviews.products?.map((value, index) => (
                <Card variant="outlined" key={index}>
                  <img className="h-192 w-full object-cover" src={value.image} />
                </Card>
              ))}
        </Grids>
      </div>
    </>
  )
}

export default Home
