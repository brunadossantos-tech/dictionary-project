import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <div className="row d-flex justify-content-evenly">
          <div className="col">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </div>
          <div>
            <h1 className="col">
          Dictionary App
          </h1>
          </div>
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Bruna Santos
      </footer>
      </div>
    </div>
  );
}
