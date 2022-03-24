import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import luisCarreraLogo from './images/luiswhite.png';
import { useState } from 'react';

const App = () => {

  const [numClicks, setNumClicks] = useState(0);

  const doClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='luiscarrera-logo-container'>
        <img
          className='luiscarrera-logo'
          src={luisCarreraLogo}
          alt='Logo Luis Carrera' />
      </div>
      <div className="main-container">
        <Counter 
          clicksNumber={numClicks} />
        <Button 
          text='Click'
          isClickButton={true}
          doClick={doClick} />
        <Button 
          text='Reset'
          isClickButton={false}
          doClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
