/*
 * @Author: Mr.Mao
 * @Date: 2021-08-30 17:21:15
 * @LastEditTime: 2021-08-31 16:05:40
 * @Description:
 * @LastEditors: Mr.Mao<https://github.com/TuiMao233>
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './views/home/Home'
import Search from './views/search/Search'

function App() {
  return (
    <div className="h-screen bg-major">
      <div className="sm:container mx-auto h-full">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search/:text" component={Search} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
