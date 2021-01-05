import React from 'react'

import style from './index.scss'

const SmartCity = () => {
  return (
    <div className={style.iframe}>
      <iframe
        src='http://st.zjqzjs.net/#/home'
        scrolling='auto'
        allowFullScreen={true}
      />
    </div>
  )
}

export default SmartCity
