import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='MainPage-content'>
        <Link to='/easy' className="btnForTask">Закономерность</Link>
        <Link to='/middle' className="btnForTask">Комбинаторика</Link>
        <Link to='/hard' className="btnForTask">Логика</Link>
      </div>
    </div>
  );
};
export default MainPage;