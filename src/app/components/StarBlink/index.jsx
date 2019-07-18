import React from 'react'

import style from './index.scss'

class StarBlink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgLeft: ''
    }
  }
  creatAyy () {
    let Arr = []
    for (var i = 0; i < 30; i++) {
      Arr.push(i)
    }
    return Arr
  }

  Play (ele) {
    let i = Math.floor(Math.random() * 7)
    if (ele !== undefined && ele !== null) {
      setInterval(() => {
        if (i < 7) {
          ele.style.left = -i * 7 + 'px'
          i++
        } else {
          i = 0
        }
      }, 100)
    }
  }

  changeLeft () {
    this.creatAyy().map((i) => {
      let img = document.getElementById(i)
      this.Play(img)
    })
  }

  componentDidMount () {
    this.Play()
    this.changeLeft()
  }

  componentWillUnmount () {
    clearInterval(this.Play())
  }

  render () {
    const Nav = document.getElementById('nav')
    const bodyHeight = document.body.offsetHeight
    const { imgLeft } = this.state
    if (Nav === null) {
      this.props.history.push('/')
    }
    return (
      <div className={style.StarBlink}>
        {this.creatAyy().map(i => (
          <div
            key={i}
            className={style.show}
            style={{
              position: 'relative',
              left: Math.floor(80 * Math.random()) + '%',
              top: Math.floor(70 * Math.random()) + '%'
            }}
          >
            <img
              id={i}
              src={require('./star.png')}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default StarBlink
