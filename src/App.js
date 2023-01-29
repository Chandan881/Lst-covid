
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Middl from './components/Middl';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <Navbar/>
       <Middl/>
       <Footer/>
    </Router>
    
  );
}

export default App;
