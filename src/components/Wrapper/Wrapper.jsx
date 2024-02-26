import React from 'react'
import "./Wrapper.css";
import Star from '../Star/Star';
import Text from '../Text/Text';
import Rate from '../Rate/Rate';
const Wrapper = () => {
  return (
    <div className='wrapper'>
          <Star />
          <Text />
          <Rate />
    </div>
  )
}

export default Wrapper;