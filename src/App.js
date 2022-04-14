import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>

        <Route path='/about' element={<About></About>}>About</Route>
      </Routes>
    </div >
  );
}

export default App;
