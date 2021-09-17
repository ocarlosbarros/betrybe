import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  
  const appointements = ['Estudar React', 'Criar novo projeto', 'Ir Correr', 'Tomar a vacina'];

  return (
    <ul>
      {appointements.map((appointement) => Task(appointement))}
    </ul>
  );
}

export default App;
