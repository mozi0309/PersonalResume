import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import style from './index.scss'

const Nav = ({ data, history }) => {
  const [show, changeShow] = useState(false)
  return (
    <div className={style.nav} id='nav'>
      <ul className={style.menu}>
        <li>
          <span
            onClick={() => {
              changeShow(!show)
              history.push('/')
            }}
          >PROJECTS</span>
          <ul
            className={style.links}
            style={{
              display: show ? 'block' : 'none'
            }}
          >
            {data.map((i, index) => (
              <span
                key={index}
                onClick={() => {
                  history.push(i.path)
                }}
                className={location.hash.slice(1) === i.path ? style.spanActive : style.spanNor}
              >
                {i.label}
              </span>
            ))}
          </ul>
        </li>
        <li>
          <span
            onClick={() => {
              history.push('/resume')
            }}
          >ABOUT</span>
        </li>
        <li>
          <span>CONTACT</span>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Nav)
