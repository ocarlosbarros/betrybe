import Pokedex from './Components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <main>
      <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;
