import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h1>Всем, привет 🖐️</h1>
        <p>Я ученик <span>9it1</span>, Сайлаухан Айдос <br/><br/> Вам приготовил пару задания на Закономерности, Комбинаторику, Логику. <br/> Чтобы продолжить далее, можете нажать на кнопку <span>Начать</span></p>
        <button className="close-button" onClick={onClose}>Начать</button>
      </div>
    </div>
  );
};

export default Popup;
