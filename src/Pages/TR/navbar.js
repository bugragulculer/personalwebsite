import React ,{useState, useEffect} from 'react'
import Logo from '../assets/bugra.png'
import { Menulist } from './menulist'
import './navbar.css'
import Button from '../components/TR/button'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton);

        return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/tr' className = 'navbar-logo'>
                        <img src={Logo} alt='Logo' className='navbar-main-logo' onClick={closeMobileMenu}/>
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {Menulist.map((item) => {
                            return <div key={item.id} className='nav-menu-item' onClick={closeMobileMenu}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </div>
                        })}
                    </ul>
                    <Button />
                    <div className='lang_menu'>
                        <Link to='/' className='trsite'>
                            English Site
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                        </div>
                    </div>

                </div>
            </nav>
        );
}


export default Navbar