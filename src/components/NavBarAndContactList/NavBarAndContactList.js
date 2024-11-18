import React from 'react'
import ContactList from './ContactList/ContactList';
import './NavBarAndContactList.css';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar';

const NavBarAndContactList = () => {
  return (
    <div className='navbar-and-list'>
      <VerticalNavBar />
      <ContactList />
    </div>
  )
}

export default NavBarAndContactList