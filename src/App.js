import React from 'react'
import Nav from './components/Nav';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
