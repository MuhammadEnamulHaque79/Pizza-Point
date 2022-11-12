import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Pages/About/About';

// import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
    
      
