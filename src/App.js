
import './App.css';
import { Navbar } from './common/Navbar';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { Home } from './common/Home';
import { Error } from './common/Error';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='*' element = {<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
