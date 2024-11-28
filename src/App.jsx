import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Course from './Course';
import Charpter from './Charpter';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/course/:id" element={<Charpter/>}/>
      <Route path="/" element={<Course/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
  )
}

export default App