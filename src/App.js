import './App.css';
import LandingPage from './components/LandingPage.tsx';

function App() {
  console.log('App.js', process.env);
  return (
    <div className="App">
      <header className="App-header">{<LandingPage />}</header>
    </div>
  );
}

export default App;
