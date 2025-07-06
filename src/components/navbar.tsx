import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between items-center px-8 py-4 pt-8 text-outerspace relative">
            <div className="text-lg">
                <Link to="/">MATT KOSZEWICZ</Link>
            </div>
            
            <button 
                className="md:hidden flex flex-col justify-center items-center gap-1.5 z-20" 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={`block w-6 h-0.5 bg-outerspace transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-outerspace transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-outerspace transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <div className="hidden md:flex justify-between w-full max-w-sm text-sm font-medium">
                <Link to="/reading">READING</Link>
                <a href="https://github.com/mattkosze">GITHUB</a>
                <a href="https://www.linkedin.com/in/matthew-koszewicz/">LINKEDIN</a>
            </div>

            <div className={`fixed inset-0 bg-[#F2EFE9] z-10 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
                    <Link to="/" onClick={toggleMenu}>HOME</Link>
                    <Link to="/reading" onClick={toggleMenu}>READING</Link>
                    <a href="https://github.com/mattkosze" onClick={toggleMenu}>GITHUB</a>
                    <a href="https://www.linkedin.com/in/matthew-koszewicz/" onClick={toggleMenu}>LINKEDIN</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar