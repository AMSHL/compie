import React, { useCallback, useState, useEffect } from 'react'

import { FLASH_DELAY, NUMBER_OF_CIRCULES, SCORE_STEP } from '../../config';

import { Circule } from './Circule';

export const Game = ({ playerName, updateScoreHistory, scoreHistory }) => {
  const [level, setLevel] = useState(0);
  const [circulesToLight, setCirculesToLight] = useState([]);
  const [usersChoise, setUsersChoise] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const createArray = [...Array(NUMBER_OF_CIRCULES).keys()];

  useEffect(() => setLevel(1), []);

  const handleUsersChoise = useCallback((id) => {
    setUsersChoise([...usersChoise, id])
  }, [setUsersChoise, usersChoise]);

  useEffect(() => {
    const isCorrect = usersChoise.every((val, index) => val === circulesToLight[index])
    console.log(usersChoise, circulesToLight)
    if (isCorrect && usersChoise.length > 0 && usersChoise.length === circulesToLight.length) {
      setLevel(level + 1)
      setCurrentScore(currentScore + SCORE_STEP);
      setUsersChoise([]);
      alert('sucsess!');
    }

    if (!isCorrect) {
      updateScoreHistory(
        [...scoreHistory, {
          name: playerName,
          score: currentScore,
          time: new Date().toLocaleString()
        }].sort((a, b) => b.score - a.score));
      setLevel(1);
      setUsersChoise([]);
      setCurrentScore(0);
      alert('wrong!');
    }
  }, [usersChoise]);

  useEffect(() => {
    const lightSequance = Array.from({ length: level }, () => Math.floor(Math.random() * NUMBER_OF_CIRCULES));
    setCirculesToLight(lightSequance);
    if (lightSequance.length > 0) {
      console.log(lightSequance);
      lightSequance.forEach((id, index) => {
        setTimeout(() => {
          setTimeout(() => {
            let circule = document.getElementById(`circ${id}`);
            circule.style.background = 'blue'

            setTimeout(() => {
              console.log('inside second delay')
              circule.style.background = 'rgb(132, 177, 221)'
            }, FLASH_DELAY);
          }, index * 1000);
        }, index * FLASH_DELAY);
      })
    }
  }, [level]);

  const currentPlayerHistory = scoreHistory.filter((el) => el.name === playerName);

  return (
    <div className='game'>
      <strong className='game_title'>
        {`Name: ${playerName}, Score: ${currentScore}${!!currentPlayerHistory[0] ?
            `, Best: ${currentPlayerHistory[0].score}` :
            ''}`}
      </strong>
      <ul className='circles-container'>
        {createArray.map((circle, index) =>
          <Circule
            id={index}
            key={index}
            handleClick={handleUsersChoise}
            circle={circle}
          />)}
      </ul>
    </div>
  )
};
