import React from 'react';

const GameButtons = (props) => (
  <div className='game-buttons'>
    <button onClick={props.randomMix} disabled={props.running}
    />
    <button onClick={props.clear} />
    <button onClick={props.next} />
    {props.playing ?
      <button onClick={props.stop} /> :
      <button  onClick={props.play} />
    }
  </div>
);

export default GameButtons;