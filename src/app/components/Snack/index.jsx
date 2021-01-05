import React from 'react'

import style from './index.scss'

class Snack extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xAxis: 18, // 横向格子数
      yAxis: 10, // 纵向格子数
      SnackArr: [0, 1, 2, 3, 4], // 蛇身体
      mapArr: [], // 地图数组
      other: [], // 蛇身体以外的部分
      foodIndex: undefined, // 食物位置
      dir: 3 // 方向：1为向左移动，2为向上，3位向右移动，默认向右，4为向下
    }
  }

  snackMove (nowDir, prevDir) { // 1为向左移动，2为向上，3位向右移动，默认向右，4为向下
    const { SnackArr, other, mapArr, foodIndex, xAxis, yAxis } = this.state
    console.log(prevDir, nowDir)
    switch (nowDir) {
      case 3:
        if (prevDir === undefined) {
          const interval = setInterval(() => {
            let newRight = SnackArr
            newRight.forEach((i, index) => {
              i++
              if (i % xAxis === 0) {
                i -= xAxis
              }
              newRight[index] = i
              return newRight
            })
            this.setState({
              SnackArr: newRight
            })
          }, 400)
        } else if (prevDir === 2) {
          clearInterval()
          setInterval(() => {
            console.log(22)
          }, 400)
        }
        break

    //   case 1:
    //     let newLeft = SnackArr
    //     newLeft.forEach((i, index) => {
    //       if (i % xAxis === 0) {
    //         i = i + xAxis
    //       }
    //       i--
    //       newLeft[index] = i
    //       return newLeft
    //     })
    //     this.setState({
    //       SnackArr: newLeft
    //     }, 400)
    //     break

    //   case 2:
    //     setInterval(() => {
    //       let newTop = SnackArr
    //       newTop.forEach((i, index) => {
    //         i -= xAxis
    //         if (i - xAxis <= 0) {
    //           i = xAxis * (yAxis - 1)
    //         }
    //         newTop[index] = i
    //         return newTop
    //       })
    //       this.setState({
    //         SnackArr: newTop
    //       })
    //     }, 400)
    //     break

    //   case 4:
    //     setInterval(() => {
    //       let newBottom = SnackArr
    //       newBottom.forEach((i, index) => {
    //         i += xAxis
    //         if (i - xAxis >= xAxis * (yAxis - 1)) {
    //           i -= xAxis * (yAxis - 1)
    //         }
    //         newBottom[index] = i
    //         return newBottom
    //       })
    //       this.setState({
    //         SnackArr: newBottom
    //       })
    //     }, 400)
    //     break
    }
  }

  creatAyy () {
    // const x = 18
    // const y = 10
    const { xAxis, yAxis, SnackArr } = this.state
    const num = xAxis * yAxis
    let Arr = []
    for (var i = 0; i < num; i++) {
      Arr.push(i)
    }
    // return Arr
    let other = Arr.filter(i => !SnackArr.includes(i))
    this.setState({
      mapArr: Arr,
      other: other,
      foodIndex: other[Math.floor(Math.random() * other.length)]
    })
  }

  keys (e) {
    const { dir } = this.state
    switch (e.keyCode) {
      case 37: { // left
        if (dir === 3) break
        else {
          const prevDir = dir
          this.snackMove(1, prevDir)
          this.setState({
            dir: 1
          })
          break
        }
      }
      case 38: { // up
        if (dir === 4) break
        else {
          const prevDir = dir
          this.snackMove(2, prevDir)
          this.setState({
            dir: 2
          })
          break
        }
      }
      case 39: { // right
        if (dir === 1) break
        else {
          const prevDir = dir
          this.snackMove(3, prevDir)
          this.setState({
            dir: 3
          })
          break
        }
      }
      case 40: { // down
        if (dir === 2) break
        else {
          const prevDir = dir
          this.snackMove(4, prevDir)
          this.setState({
            dir: 4
          })
          break
        }
      }
      default: break
    }
  }

  componentDidMount () {
    const { dir } = this.state
    this.creatAyy()
    this.snackMove(3) // 1为向左移动，2为向上，3位向右移动，默认向右，4为向下
    document.addEventListener('keydown', this.keys.bind(this))
  }

  render () {
    const { mapArr, SnackArr, foodIndex } = this.state
    return (
      <div
        className={style.snack}
      >
        {mapArr.map((i) => {
          return (
            <span
              key={i}
              id={i}
              className={
                i !== foodIndex
                  ? SnackArr.includes(i)
                    ? style.act
                    : ''
                  : style.food
              }
            >
              {i}
            </span>
          )
        })}
      </div>
    )
  }
}

export default Snack
