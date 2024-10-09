import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../component/Home';
import Insert from '../component/Insert';
import Edit from '../component/Edit';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insert" element={<Insert/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;

