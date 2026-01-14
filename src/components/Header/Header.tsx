//STYLE SHEET FOR HEADER COMPONENT
import './Header.css';

//COMPONENT IMPORTS
import Navbar from '../Navbar/Navbar'; 

function Header() {
  return (
    <header className="header">
        <h1 className="header__title">My Portfolio Header</h1>
        <Navbar/>
    </header>
  );
}

export default Header;