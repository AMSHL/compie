import React from 'react';

import { Game } from '../features/game';
import { SideBar } from '../features/game/SideBar';

export const GamePage = ({ playerName, gameStop, scoreHistory, setScoreHistory }) => (
  <div>
    <SideBar
      handleBackButton={() => gameStop()}
      scoreHistory={scoreHistory} />
    <Game
      playerName={playerName}
      updateScoreHistory={setScoreHistory}
      scoreHistory={scoreHistory}
    />
  </div>
);
