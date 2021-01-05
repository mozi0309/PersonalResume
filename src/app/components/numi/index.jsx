import React from 'react'

import style from './index.scss'

const Numi = () => {
  return (
    <>
      <div className={style.iframe}>
        <iframe
          src='http://ab.numi.cn/#/'
          scrolling='auto'
          allowFullScreen={true}
        />
      </div>
      <div className={style.desc}>
        <div>
          <span>项目名称：</span>
          <p>
            怒米有声小说(网页版)
          </p>
        </div>
        <div>
          <span>技术栈：</span>
          <p>
            负责前端部分，使用React框架，目前版本已不再更新，主要供网页端使用，移动端已用Uni-App重构;
            <br/>
            使用Redux技术实现全局播放；
            <br/>
            数据皆为mock数据为演示所用
          </p>
        </div>
        {/* <div>
          <span>测试账号：</span>
          <p>
            账号：18000000001<br/>密码：123456
          </p>
        </div> */}
      </div>
    </>
  )
}

export default Numi
