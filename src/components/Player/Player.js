import React from 'react';
import './Player.css';
function Player({ name, score, current, isPlaying }) {
  return (
    <div className={`player ${isPlaying ? 'on' : ''}`}>
      <div>
        <h2>{name}</h2>
        <div className='player__score'>
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
      <div className='player__current'>
        <p>Current</p>
        <p>{current}</p>
      </div>
    </div>
  );
}

export default Player;
