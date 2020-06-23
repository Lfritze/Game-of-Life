import React from 'react';
import { Header } from 'semantic-ui-react';

export default () => (
  <Header as='h2' icon inverted textAlign='center' className='title'>
    Game of Life...or Death!
      <Header.Subheader>
      Cellular Automata via Von Neuman Neighbors
      </Header.Subheader>
  </Header>

);