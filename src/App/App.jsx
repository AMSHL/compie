import React, { useState } from 'react';

import { WelcomePage, GamePage } from '../Pages';

export const App = () => {
  const [isStarted, setIsStated] = useState(false);
  const [name, setName] = useState('');
  const [scoreHistory, setScoreHistory] = useState([]);

  return (
    <>
      {isStarted ?
        <GamePage
          gameStop={() => setIsStated(false)}
          playerName={name}
          scoreHistory={scoreHistory}
          setScoreHistory={setScoreHistory}
        /> :
        <WelcomePage
          handleGameStart={() => setIsStated(true)}
          onNameChange={setName}
          name={name}
        />}
    </>
  );
};
