import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Switch from './components/Switch';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          {/* <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} /> */}
        </Routes>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
