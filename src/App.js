import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";
import language from "./language.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            <h1>
              Dictionary App
              <span className="icon">
                <img src={language} alt="language" />
              </span>
              </h1>
          
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by {""}
        <a href="https://practical-goldberg-8caec7.netlify.app/" target="_blank" rel="noreferrer">Bruna Santos</a> and is open-sourced on{" "}
        <a href="https://github.com/brunadossantos-tech/dictionary-project.git" target="_blank" rel="noreferrer">GitHub</a> and hosted on{" "}
        <a href="https://angry-kowalevski-094529.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>
      </div>
    </div>
  );
}

