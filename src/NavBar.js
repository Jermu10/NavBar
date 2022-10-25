import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import HomePage from './HomePage';
import About from "./About";
import Contact from "./Contact";

export default function NavBar() {
    return(
        <BrowserRouter>
        <div>
            Welcome to React Router
        </div>
       
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    )
};
