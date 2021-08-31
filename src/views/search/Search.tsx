/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:22
 * @LastEditTime: 2021-08-31 16:08:34
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
import { useParams } from 'react-router-dom'

const LoadingRectSkelets = _LoadingRectSkelets.map((v, k) => (
  <Grid key={k} item xs={6}>
    {v}
  </Grid>
))

function Home() {
  const params = useParams<{ text: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState(params?.text || '')
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

  const createLineOption = (item: any, xy: any[][], color: string) => {
    const options: EChartOption = {
      grid: { top: '30%', left: '5%', right: '5%', bottom: '0%' },
      tooltip: { show: true },
      title: { text: item.name, top: '20px', left: '10px', subtext: `Growth ${item.msv_len}%` },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xy[0],
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
          type: 'line',
          data: xy[1],
          areaStyle: { color },
          smooth: true,
          symbol: 'none',
          tooltip: { borderColor: 'red' },
          lineStyle: { color: 'none' }
        }
      ]
    }
    return options
  }

  const getLineOptions = (item: any) => {
    const forecastSearchData = [
      item.forecast_search_msv.map((v: any) => v.date) as any[],
      item.forecast_search_msv.map((v: any) => v.sv) as any[]
    ]
    const searchMsv = [
      item.search_msv.map((v: any) => v.date) as any[],
      item.search_msv.map((v: any) => v.sv) as any[]
    ]
    const dates = [
      createLineOption(item, forecastSearchData, '#95BDDD'),
      createLineOption(item, searchMsv, '#96CBB5')
    ]
    return dates
  }

  return (
    <div className="h-full flex flex-col">
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
      {/* py-36 px-36  */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="lg:w-1000 mx-auto flex flex-col gap-28 p-20">
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
                : interviews.product_trends?.flatMap((value, index) =>
                    getLineOptions(value).map((item, index2) => {
                      return (
                        <Card key={index + '' + index2} variant="outlined">
                          <ReactECharts className="h-192" option={item} />
                          <div className="py-10 text-center text-xs text-gray-500">
                            May 2018 - May 2020
                          </div>
                        </Card>
                      )
                    })
                  )}
            </Grids>

            <div>Related new products published in the last 7 days</div>

            <Grids size={['200px', 'auto']} gap={10}>
              {isLoading
                ? LoadingArticleSkelets
                : interviews.products?.flatMap((value, index) => (
                    <Card variant="outlined" key={index}>
                      <img className="h-192 w-full object-cover" src={value.image} />
                      <div className="border-top border-gray-300 py-20 px-10 text-sm flex flex-col gap-8">
                        <div className="text-gray-500">Published 4 day ogo</div>
                        <div>{value.title}</div>
                        <div className="text-gray-500">{value.price}$</div>
                        <div className="text-gray-500">{value.store_domain}</div>
                      </div>
                    </Card>
                  ))}
            </Grids>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
