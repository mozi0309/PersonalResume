import React from 'react'

import style from './index.scss'

const HIWANTPc = () => {
  return (
    <div className={style.iframe}>
      <iframe
        src='http://hw1.numi.cn/#/'
        scrolling='auto'
        allowFullScreen={true}
      />
    </div>
  )
}

export default HIWANTPc
