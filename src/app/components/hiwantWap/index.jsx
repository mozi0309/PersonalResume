import React from 'react'

import style from './index.scss'

const HIWANTWap = () => {
  return (
    <>
      <div className={style.iframe}>
        <iframe
          src='http://hw2.numi.cn/#/'
          scrolling='auto'
          allowFullScreen={true}
        />
      </div>
      <div className={style.desc}>
        <div>
          <span>项目名称：</span>
          <p>
            海王电竞移动端
          </p>
        </div>
        <div>
          <span>技术栈：</span>
          <p>
            负责前端部分，使用React框架，支持网页和移动端(使用Hbuilder打包安卓及iOS端);
            同时布有PC网页端，功能相同，PC页面不再赘述
          </p>
        </div>
        <div>
          <span>测试账号：</span>
          <p>
            账号：18000000001<br/>密码：123456
          </p>
        </div>
      </div>
    </>
  )
}

export default HIWANTWap
