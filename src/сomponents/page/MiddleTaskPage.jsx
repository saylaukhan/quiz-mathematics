import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    title: "Сколькими способами можно поставить 4 человек в очереди?",
    variants: ['24', '64', '16','40'],
    correct: 0
  },
  {
    title: "Сколькими способами могут быть заняты 1, 2 и 3 места (по одному человеку на место) на соревнованиях, в которых участвуют 5 человек",
    variants: [ '30','40', '50', "60"],
    correct: 3
  },
  {
    title: 'Пять друзей играют в шахматы, и каждый из них играет с каждым по одной партии. Сколько всего партий будет сыграно?',
    variants: [
      '5',
      '10',
      '15',
      "20"
    ],
    correct: 1
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

const MiddleTaskPage = () => {
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

export default MiddleTaskPage;