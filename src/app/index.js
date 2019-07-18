import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'

import { randomArr } from './utils'
import MacBook from './components/macbook'
import Nav from './components/Nav'
import StarBlink from './components/StarBlink'

import './index.css'

const menu = [
  {
    label: 'MACBOOK',
    path: '/mac'
  },
  {
    label: 'StarBlink',
    path: '/star'
  }
]

const bgData = [
  require('../assets/bg/bg1.jpg'),
  require('../assets/bg/bg2.jpg'),
  require('../assets/bg/bg3.jpg'),
  require('../assets/bg/bg4.jpg')
]

class App extends React.Component {
  render () {
    return (
      <div
        className='bgFull'
        style={{
          backgroundImage: `url(${randomArr(bgData)})`,
          backgroundSize: 'cover'
        }}
      >
        <Nav
          data={menu}
        />
        {/* <div className='welcome'>
          <h1>Welcome</h1>
          <p>By Lisa</p>
        </div> */}
        <Switch>
          <Route path='/mac' exact component={MacBook} />
          <Route path='/star' exact component={StarBlink} />
        </Switch>
      </div>
    )
  }
}

export default hot(App)
