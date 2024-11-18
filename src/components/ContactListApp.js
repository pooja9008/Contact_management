import React from 'react'
import './ContactListApp.css';
import NavBarAndContactList from './NavBarAndContactList/NavBarAndContactList';
import HorizontalNavBar from './Horizontal/HorizontalNavBar';
const ContactListApp=()=>{
    return(
        <div className='contact-list-app'>
            <HorizontalNavBar/>
            <NavBarAndContactList/>
        </div>
    )
}
export default ContactListApp