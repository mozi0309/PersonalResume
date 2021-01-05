import React from 'react'

import style from './index.scss'

const MiniProgram = () => {
  return (
    <>
      <div className={style.desc}>
        <div>
          <span>项目名称：</span>
          <p>
            智能鸟干衣宝小程序（微信扫描查看）
          </p>
        </div>
        <div className={style.QRCode}>
          <img src={require('../../../assets/QRCode.jpg')} alt=""/>
        </div>
        <div>
          <span>技术栈：</span>
          <p>
            使用Remax框架完成用户端小程序；
            <br/>
            使用微信小程序原生完成管理端小程序；
            <br/>
            同时配有PC端管理后台使用React完成前端部分。
          </p>
        </div>
      </div>
    </>
  )
}

export default MiniProgram
