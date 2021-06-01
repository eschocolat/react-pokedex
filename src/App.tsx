import React from 'react';
import PokemonListContainer from './containers/pokemon/PokemonListContainer';
import AppContainer from './containers/base/AppContainer';

function App() {
  return (
    <AppContainer>
      <PokemonListContainer />
    </AppContainer>
  );
}

export default App;
