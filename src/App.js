import logo from './rocket2.svg';
import './App.css';
import Pictures from './Pictures'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Spacestagram!
        </p>
        <a
          className="App-link"
          href="https://api.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          We use NASA's APIs
        </a>
      </header>
      <Pictures />
    </div>
  );
}

export default App;
