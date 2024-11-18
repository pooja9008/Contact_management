import React from 'react'
import Form from './Form';
import Navbar from './Navbar';
import './VerticalNavBar.css';

const VerticalNavBar = () => {
  return (
    <div className='vertical-nav'>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default VerticalNavBar