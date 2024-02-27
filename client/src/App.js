
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavbarComponent } from './Components/Navbar.component/Navbar.component.jsx';
import { FooterComponent } from './Components/Footer.component/Footer.component.jsx';
import { Home } from './Views/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
