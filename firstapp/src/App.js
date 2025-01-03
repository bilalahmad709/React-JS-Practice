import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import Footer from './components/Footer.js/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main name = "ali" language="Javascript" age= "23"/>
        <Footer name = "Adil"/>
      </header>
    </div>
  );
}

export default App;
