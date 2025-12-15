import Logo from '../assets/paw.png'
import './Header.css'

function Header () {
  return (
    <div className="header-container">
      <img
        className='logo' 
        src={Logo}
      />
      <h1>CatSwipe</h1>
    </div>
  );
}

export default Header;