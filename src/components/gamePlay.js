import React from 'react';
import GameGrid from './gameGrid';
import GameButtons from './gameButtons';
import SamplePatterns from './samplePatterns';
import { speedKills,  nextGeneration, makeBoard, randomMix } from '../conwayLogic';
import { SamplePatternData } from '../samplePatternData';

class GamePlay extends React.Component {

  state = {
    board: SamplePatternData('glider'),
    generation: 0,
    running: false,
  }

  updateState = (board, generation) => this.setState({
    board: board,
    generation: generation,
  });

  onChange = board => this.updateState(board, this.state.generation + 1);

  onClear = () => this.updateState(makeBoard(), 0);

  onRandomMix = () => this.updateState(randomMix(this.state.board), 0);

  onSamplePatterns  = pattern => this.updateState(SamplePatterns(pattern), 0);

  onNext = () => this.onChange(nextGeneration(this.state.board));

  onPlay = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => this.onNext(), speedKills);
  }

  onPause = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  }

  render() {
    const { board, running } = this.state;
    return (
      <div>
        <GameGrid board={board} onChange={this.onChange} />
        <p>Generation: {this.state.generation}</p>
        <GameButtons
          clear={this.onClear}
          next={this.onNext}
          play={this.onPlay}
          stop={this.onStop}
          randomMix={this.onRandomMix}
          running={running}
        />
        <SamplePatterns
          load={this.onSamplePatterns}
          running={running}
        />
      </div>
    );
  }

}

export default GamePlay;
