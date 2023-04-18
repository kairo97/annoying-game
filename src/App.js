
import './App.css';
import Header from './components/Header';
import StartButton from './components/StartButton';
function App() {
  return(
    <div className='main'>
      <Header/>
      <div className='page'>
        <div className='buttonBox'>
          <StartButton/>
        </div>

      </div>
    </div>
  )
}

export default App;
