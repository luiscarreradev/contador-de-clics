import React from 'react';
import '../styles/button.css'

const Button = ({ text, isClickButton, doClick } ) => {
  return (
    <button
      className={ isClickButton ? 'click-button' : 'reset-button' } 
      onClick={doClick} >
      {text}
    </button>
  );
}

export default Button;