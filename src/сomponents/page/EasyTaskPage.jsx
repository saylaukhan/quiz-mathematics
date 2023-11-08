import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    title: "Продолжи ряд: 25,20,16,13,11",
    variants: ['10', '8', '9','7'],
    correct: 0
  },
  {
    title: 'В последовательности букв ABCDEFG, какие две буквы идут перед G?',
    variants: [ 'D и E','E и F', 'C и D', "B и C"],
    correct: 1
  },
  {
    title: 'В последовательности чисел 1, 4, 9, 16, 25,  какое число будет следующим?',
    variants: [
      '36',
      '49',
      "64",
      "81"
    ],
    correct: 0
  },  {
    title: 'В последовательности букв ABCDEFGH, какие две буквы идут после E?',
    variants: [
      'G и H',
      'H и A',
      "A и B",
      'F и G'
    ],
    correct: 3
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

const EasyTaskPage = () => {
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

export default EasyTaskPage;