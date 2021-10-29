import logo from './logo.svg';
import './App.css';
import Person from './Component/PersonCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <Person firstName="John" lastName="Smith" age={88} hairColor="Brown" />
        <Person firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <Person firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
      </header>
    </div>
  );
}

export default App;
