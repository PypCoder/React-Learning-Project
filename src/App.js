import './App.css';
import Mood from './Components/Mood';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar title='Mooder'/>
    <div className='container'>
    <Mood/>
    </div>
    </>
  );
}

export default App;
