import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'

import { randomArr } from './utils'
import MacBook from './components/macbook'
import Nav from './components/Nav'
import MiniProgram from './components/miniProgram'
import StarBlink from './components/StarBlink'
import Snack from './components/Snack'
import HIWANTWap from './components/hiwantWap'
import HIWANTPc from './components/hiwantpc'
import Home from './components/home'
import Resume from './components/resume'
import SmartCity from './components/smartCity'

import './index.css'
import Numi from './components/numi'

const menu = [
  {
    label: 'MACBOOK',
    path: '/mac'
  },
  {
    label: 'StarBlink',
    path: '/star'
  },
  {
    label: 'HiwantWap',
    path: '/hiwantWap'
  },
  {
    label: 'HiwantPc',
    path: '/hiwantPc'
  },
  // {
  //   label: 'Snack',
  //   path: '/snack'
  // },
  {
    label: 'Numi',
    path: '/numi'
  },
  {
    label: 'MiniProgram',
    path: '/mini'
  },
  {
    label: 'SmartCity',
    path: '/smartCity'
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
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mac' exact component={MacBook} />
          <Route path='/star' exact component={StarBlink} />
          <Route path='/hiwantWap' exact component={HIWANTWap} />
          <Route path='/hiwantPc' exact component={HIWANTPc} />
          <Route path='/snack' exact component={Snack} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/numi' exact component={Numi} />
          <Route path='/mini' exact component={MiniProgram} />
          <Route path='/smartCity' exact component={SmartCity} />
        </Switch>
      </div>
    )
  }
}

export default hot(App)
