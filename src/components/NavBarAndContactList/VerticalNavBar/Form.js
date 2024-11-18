import React from 'react';
import './Form.css';
import addnewImage from "../../../assets/add-new.svg";
import Button from '../../Ui/Button.js';

const Form = () => {
  return (
    <form className='form'>
      <div className='add-new-img'>
        <img src={addnewImage} alt="Add new contact" /> {/* Add alt text */}
      </div>
      <div className='input-text'>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='surname' />
      </div>
      <div className='input-tel'>
        <input type='text' placeholder='7854809325' />
      </div>
      <Button name='Add' />
    </form>
  );
};

export default Form;
