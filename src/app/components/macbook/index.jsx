import React from 'react'

import style from './index.scss'

const Keys = ({ span1, span2 }) => {
  return (
    <div className={style.normalKey}>
      <span>{span1}</span>
      {span2 &&
        <span>{span2}</span>
      }
    </div>
  )
}

const MacBook = () => {
  const first = [
    { span1: '~', span2: '`' },
    { span1: '!', span2: '1' },
    { span1: '@', span2: '2' },
    { span1: '#', span2: '3' },
    { span1: '$', span2: '4' },
    { span1: '%', span2: '5' },
    { span1: '^', span2: '6' },
    { span1: '&', span2: '7' },
    { span1: '*', span2: '8' },
    { span1: '(', span2: '9' },
    { span1: ')', span2: '0' },
    { span1: '_', span2: '-' },
    { span1: '+', span2: '=' }
  ]

  const secondSingle = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'
  ]
  const secondDouble = [
    { span1: '「 {', span2: '【 [' },
    { span1: '」 }', span2: '】 ]' },
    { span1: '|', span2: `、` }
  ]

  const thirdSingle = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdDouble = [
    { span1: ':', span2: ';' },
    { span1: '"', span2: `'` }
  ]

  const fourthSingle = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const fouthDouble = [
    { span1: '《 <', span2: ',' },
    { span1: '》 >', span2: '。 .' },
    { span1: '?', span2: '/' }
  ]

  const lastLeft = [
    { span1: '', span2: 'fn' },
    { span1: '', span2: 'ctrl' },
    { span1: '', span2: 'opt' },
    { span1: '', span2: 'cmd' }
  ]
  const lastRight = [
    { span1: '', span2: 'cmd' },
    { span1: '', span2: 'opt' },
    { span1: '', span2: '←' },
    { span1: '↑', span2: '↓' },
    { span1: '', span2: '→' }
  ]

  return (
    <div className={style.MacBook}>
      <div className={style.blackBar}>
      </div>
      <div className={style.keyBoard}>
        <div className={style.touchBar}>
          <span>esc</span>
          <img src={require('../../../assets/touchBar.jpg')} />
        </div>
        <ul>
          {first.map((i, index) => {
            return (
              <Keys
                key={index}
                span1={i.span1}
                span2={i.span2}
              />
            )
          })}
          <div className={style.tab}>delete</div>
        </ul>
        <ul>
          <div className={style.tab}>tab</div>
          {secondSingle.map((i, index) => (
            <Keys
              key={index}
              span1={i}
            />
          ))}
          {secondDouble.map(i => (
            <Keys
              key={i.span1}
              span1={i.span1}
              span2={i.span2}
            />
          ))}
        </ul>
        <ul>
          <div className={style.enter}>中/英</div>
          {thirdSingle.map(i => (
            <Keys
              key={i}
              span1={i}
            />
          ))}
          {thirdDouble.map((i, index) => (
            <Keys
              key={i.id}
              span1={i.span1}
              span2={i.span2}
            />
          ))}
          <div className={style.enter}>return</div>
        </ul>
        <ul>
          <div className={style.shift}>shift</div>
          {fourthSingle.map(i => (
            <Keys
              key={i}
              span1={i}
            />
          ))}
          {fouthDouble.map((i, index) => (
            <Keys
              key={index}
              span1={i.span1}
              span2={i.span2}
            />
          ))}
          <div className={style.shift}>shift</div>
        </ul>
        <ul>
          {lastLeft.map((i, index) => (
            <Keys
              key={index}
              span1={i.span1}
              span2={i.span2}
            />
          ))}
          <div className={style.space}></div>
          {lastRight.map((i, index) => (
            <Keys
              key={index}
              span1={i.span1}
              span2={i.span2}
            />
          ))}
        </ul>
      </div>
      <div className={style.touch}></div>
    </div>
  )
}

export default MacBook
