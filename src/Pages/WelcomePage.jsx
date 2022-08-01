import React from 'react';

export const WelcomePage = ({
  handleGameStart,
  onNameChange,
  name
}) => {

  return (
    <>
      <span className="form-title">
        Compie test task
      </span>
      <div className="form-container">
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <button
          onClick={() => !!name ? handleGameStart() : null}
          disabled={!name}
        >
          Start
        </button>
      </div>
    </>
  );
};
