import { Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './search';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/login' element={<Login />} />
        <Route path= '/signup' element = {<Signup/>}/>
        <Route path='/Welcome' element = {<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
