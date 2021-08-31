/*
 * @Author: Mr.Mao
 * @Date: 2021-08-31 15:06:45
 * @LastEditTime: 2021-08-31 15:33:03
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { Button, TextField } from '@material-ui/core'
import Header from '@/components/Header/Header'
import { Search as SearchIcon } from '@ricons/ionicons5'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:28
 * @LastEditTime: 2021-08-30 21:14:23
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function Search() {
  const [searchText, setSearchText] = useState('')
  const history = useHistory()

  return (
    <div className="">
      <Header />
      <div className="text-5xl text-center my-72">Search Trends</div>
      <div className="flex gap-20 items-center px-36 lg:w-1000 mx-auto">
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
        <Button variant="outlined" onClick={() => history.push(`/search/${searchText}`)}>
          <SearchIcon className="w-28 h-28" />
        </Button>
      </div>
    </div>
  )
}
export default Search
