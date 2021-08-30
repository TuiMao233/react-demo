import { Button, TextField } from '@material-ui/core'
import Header from '../../components/Header/Header'
import { Search as SearchIcon } from '@ricons/ionicons5'
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:52:28
 * @LastEditTime: 2021-08-30 21:14:23
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
function Search() {
  const RightContent = (
    <div className="flex gap-20 items-center">
      <TextField
        className="flex-1"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
      />
      <Button variant="outlined">
        <SearchIcon className="w-28 h-28" />
      </Button>
    </div>
  )
  return (
    <div className="">
      <Header right={RightContent} />
    </div>
  )
}
export default Search
