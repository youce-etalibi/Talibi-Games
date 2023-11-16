import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FlagOfName() {
  const flagOfNameStages = [
    { id: 1, name: 'afghanistan', flags: ['ad.svg', 'ae.svg', 'af.svg', 'ag.svg'], correct: 2 },
    { id: 2, name: 'albania', flags: ['ai.svg', 'al.svg', 'am.svg', 'ao.svg'], correct: 1 },
    { id: 3, name: 'argentine', flags: ['aq.svg', 'ar.svg', 'arab.svg', 'as.svg'], correct: 1 },
    { id: 4, name: 'austria', flags: ['at.svg', 'au.svg', 'aw.svg', 'ax.svg'], correct: 0 },
    { id: 5, name: 'azerbaijan', flags: ['az.svg', 'ba.svg', 'bb.svg', 'bd.svg'], correct: 0 },
    { id: 6, name: 'Balgaria', flags: ['be.svg', 'bf.svg', 'bg.svg', 'bh.svg'], correct: 2 },
    { id: 7, name: 'benin', flags: ['bi.svg', 'bj.svg', 'bl.svg', 'bm.svg'], correct: 1 },
    { id: 8, name: 'netherland', flags: ['bn.svg', 'bo.svg', 'bq.svg', 'br.svg'], correct: 2 },
    { id: 9, name: 'norwich', flags: ['bs.svg', 'bt.svg', 'bv.svg', 'bw.svg'], correct: 2 },
    { id: 10, name: 'belarus', flags: ['by.svg', 'bz.svg', 'ca.svg', 'cc.svg'], correct: 3 },
    { id: 11, name: 'Republic Congo', flags: ['cd.svg', 'cefta.svg', 'cf.svg', 'cg.svg'], correct: 3 },
    { id: 12, name: 'chile', flags: ['ch.svg', 'ci.svg', 'ck.svg', 'cl.svg'], correct: 0 },
    { id: 13, name: 'Cameron', flags: ['cm.svg', 'cn.svg', 'co.svg', 'cp.svg'], correct: 1 },
    { id: 14, name: 'cuba', flags: ['cr.svg', 'cu.svg', 'cv.svg', 'cw.svg'], correct: 1 },
    { id: 15, name: 'Cyprus', flags: ['cx.svg', 'cy.svg', 'cz.svg', 'de.svg'], correct: 1 },
    { id: 16, name: 'Danmark', flags: ['dg.svg', 'dj.svg', 'dk.svg', 'dm.svg'], correct: 2 },
    { id: 17, name: 'ecuador', flags: ['do.svg', 'dz.svg', 'td.svg', 'ec.svg'], correct: 3 },
    { id: 18, name: 'egypte', flags: ['ee.svg', 'eg.svg', 'eg.svg', 'er.svg'], correct: 2 },
    { id: 19, name: 'vetnam', flags: ['es.svg', 'es-pv.svg', 'vn.svg', 'eu.svg'], correct: 2 },
    { id: 20, name: 'fenland', flags: ['fi.svg', 'fj.svg', 'fk.svg', 'fm.svg'], correct: 0 },
    { id: 21, name: 'zimbabwe', flags: ['fo.svg', 'fm.svg', 'zm.svg', 'fr.svg'], correct: 2 },
    { id: 22, name: 'wales', flags: ['ga.svg', 'gb-eng.svg', 'gb-sct.svg', 'gb-wls.svg'], correct: 3 },
    { id: 23, name: 'georgia', flags: ['gb-nir.svg', 'gb.svg', 'gd.svg', 'ge.svg'], correct: 3 },
  ];

  const home = useNavigate();
  const [score, setScore] = useState(1);
  const [currentStage, setCurrentStage] = useState(1);

  const handleAnswerClick = (flagSelected) => {
    const stage = flagOfNameStages.find((item) => item.id === currentStage);

    if (stage.correct === flagSelected) {
      setScore(score + 1);
    }

    if (currentStage < flagOfNameStages.length) {
      setCurrentStage(currentStage +  1);
    } else {
      // alert('Quiz complete! Your final score: ' + score);
      home(`/${score}`)
    }
  };

  function showQuestion() {
    const currentStageInfo = flagOfNameStages.find((item) => item.id === currentStage);

    return (
      <Fragment>
        <div key={currentStageInfo.id} >
          <h2 className="question">{currentStageInfo.name} ? </h2>
          <div className="optionSection">
            {currentStageInfo.flags.map((flag, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)} className="option">
                <img src={`/Flags/${flag}`} alt={currentStageInfo.name} style={{ width: '100px' }} />
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
            <h1>Flag of name</h1>
            <div className="options">{showQuestion()}</div>
          </div>
        </div>
      </center>
    </Fragment>
  );
}
