import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    title: "Каких камней не бывает в речке?",
    variants: ['драгоценных', 'белых', 'прозрачных','сухих'],
    correct: 3
  },
  {
    title: 'Что может в одно и то же время стоять и ходить, висеть и стоять, ходить, лежать',
    variants: [ 'часы','человек', 'автомобиль', "гирлянда"],
    correct: 0
  },
  {
    title: 'Завязать можно, а развязать нельзя.Что это такое?',
    variants: [
      'шнурки',
      'пакет',
      'разговор',
      "шарик"
    ],
    correct: 2
  }
];

function Result({ correct }) {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>Вы отгадали {correct} из {questions.length}</h2>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className='progress'>
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => <li onClick={() => onClickVariant(index)}>
          {text}</li>)}
      </ul>
    </>
  );
}

const  HardTaskPage = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  
  const onClickVariant = (index) => {
    setStep(step + 1);
    
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  
  return (
    <div className='formForQuestions'>
      <button className="returnBtn"><Link to='/' className="returnBtn__link">Вернуться на главную</Link></button>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default HardTaskPage;