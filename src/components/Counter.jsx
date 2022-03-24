import React from 'react';
import '../styles/counter.css';

const Counter = ({ clicksNumber }) => {
  return (
    <div className="counter">
      {clicksNumber}
    </div>
  );
}

export default Counter;