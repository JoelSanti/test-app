import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Inicio from './components/inicio/Inicio';
import Chatbot from './components/test/Chatbot';

function App() {
  return (
 <Router>
    <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/chatbot" element={<Chatbot/>} />
    </Routes>
 </Router>
  );
}

export default App;
