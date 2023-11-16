import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NameOfFlag() {
    const home = useNavigate()

  const nameOfFlagStages = [
    { id: 1, flag: 'ad.svg', options: ['Afghanistan', 'Albania', 'Algeria', 'Andorra'], correct: 3 },
    { id: 2, flag: 'ai.svg', options: ['A.Barbuda', 'Argentina', 'Armenia', 'Australia'], correct: 0 },
    { id: 3, flag: 'ar.svg', options: ['Angola', 'Argentina', 'Armenia', 'Australia'], correct: 1 },
    { id: 4, flag: 'at.svg', options: ['Austria', 'Australia', 'Azerbaijan', 'Argentina'], correct: 0 },
    { id: 5, flag: 'az.svg', options: ['Afghanistan', 'Azerbaijan', 'Albania', 'Algeria'], correct: 1 },
    { id: 6, flag: 'ba.svg', options: ['Bosnia and Herzegovina', 'fenland', 'ecuador', 'danmark'], correct: 0 },
    { id: 7, flag: 'bd.svg', options: ['zimbabwe', 'Bangladesh', 'benin', 'morroco'], correct: 1 },
    { id: 8, flag: 'be.svg', options: ['france', 'italy', 'belgium', 'germany'], correct: 2 },
    { id: 9, flag: 'bg.svg', options: ['bulgaria', 'hangary', 'italy', 'latvia'], correct: 0 },
    { id: 10, flag: 'bh.svg', options: ['danmark', 'qatar', 'oman', 'bahrain'], correct: 3 }
  ];

  const [score, setScore] = useState(1);
  const [currentStage, setCurrentStage] = useState(1);
//   const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const stage = nameOfFlagStages.find((item) => item.id === currentStage);

    if (stage.correct === selectedOption) {
      setScore(score + 1);
    }

    if (currentStage < nameOfFlagStages.length) {
      setCurrentStage(currentStage + 1);
    } else {
        // alert('Quiz complete! Your final score: ' + score);
        home(`/${score}`)
    }
  };


  function showQuestion() {
    const currentStageInfo = nameOfFlagStages.find((item) => item.id === currentStage);

    return (
      <Fragment>
        <div key={currentStageInfo.id} >
          <img style={{width:"140px", margin:'5px', borderRadius:'10px', boxShadow:'0 0 100px 4px white'}} src={`Flags/${currentStageInfo.flag}`} alt={`Flag ${currentStageInfo.id}`} /><br/><br/>
          <h5 className="question">Guess the country: </h5>
          <div className="optionSection">
            {currentStageInfo.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)} className="btnOption">
                {option}
              </button>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <center>
        <div className="body">
          <div className="game">
          <button class="Goback" onClick={()=>(home('/'))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
          </button>
            <h1>NAME OF FLAG</h1>
            <div className="options">{showQuestion()}</div>
          </div>
        </div>
      </center>
    </Fragment>
  );
}
