import React ,{useState, useEffect} from 'react'
import Logo from '../assets/bugra.png'
import { Menulist } from './menulist'
import './navbar.css'
import { Link } from 'react-router-dom'
import Youtube from '../assets/youtube.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1100) {
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
                    <Link to='/' className = 'navbar-logo'>
                        <img src={Logo} alt='Logo' className='navbar-main-logo' onClick={closeMobileMenu}/>
                    </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                        </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {Menulist.map((item) => {
                            return <div key={item.id} className='nav-menu-item' onClick={closeMobileMenu}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </div>
                        })}
                    </ul>
                    <a className='Button' href='https://www.youtube.com/channel/UCz-QyCCL_itusMxXAU1V6zw'>
                        <img className='youtube'src={Youtube} alt=''/>
                        <h2 className='youtubetitle'>YouTube</h2>
                    </a> 
                    <Link to='/tr' className='trsite'>
                        Türkçe Site
                    </Link>
                </div>
            </nav>
        );
}


export default Navbar