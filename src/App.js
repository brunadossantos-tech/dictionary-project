import logo from './logo.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
