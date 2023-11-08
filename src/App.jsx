import React, { useState } from 'react';
import Popup from './сomponents/Popup';
import MainMenu from './сomponents/MainMenu';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  return (
    <div className="App">
      {isPopupOpen && <Popup onClose={closePopup} />}
      <MainMenu/>
    </div>
  );
}

export default App;
