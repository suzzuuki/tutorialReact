import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div >
          <textarea
          key='test'
          id='test'
          value='ここにかけるけど、いんぷっとテキストの表示んしかたがわからんに'
          />
        </div>
        <p>
          React少しさわってみてるんやで ↑のくるくるかわいいんやで
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          わいやで、フロンント練習始めるんやで
        </a>
      </header>
    </div>
  );
}

export default App;
