import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Testimonies from "./components/Testimonies";
import Experties from "./components/Experties";
import Footer from "./components/Footer";
import Burger_Menu from "./components/Burger_Menu";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [menuToggle, setMenuToggle] = useState(false);
    const handleToggleBurgerMenu = () => {
        setMenuToggle(!menuToggle);
    };
    return (
        <div className='relative overflow-x-hidden'>
            {menuToggle && <Burger_Menu menuToggler={handleToggleBurgerMenu} />}
            <Nav menuToggler={handleToggleBurgerMenu} />
            <Home />
            <Projects />
            <Experties />
            <Testimonies />
            <Footer />
        </div>
    );
}

export default App;
