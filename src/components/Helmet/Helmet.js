import React from 'react'

const Helmet = (props) => {
    document.title = "T-mart -" + props.title;

  return (
    // tạo tên trang trên tab trình duyệt
    <div className='w-100'>{props.children}</div>

  )
}

export default Helmet