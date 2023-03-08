import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.png';
import Navitem from '../nav-item/nav-item';
import { ReactComponent as Menuicon } from '../../assets/menu-icon.svg'
import Dropdown from '../dropdown/dropdown';


function Header(){
    return(
        <header>
            <img className='logo' src={Logo} />
            <Navitem icon={<Menuicon />}>
                <Dropdown />
            </Navitem>
            <nav>
                <ul>
                    <Link to='/'>
                        <li className='listitem'>Home</li>
                    </Link>
                    <Link to='/contato'>
                        <li className='listitem'>Contato</li>
                    </Link>
                    <Link to='/fotos'>
                        <li className='listitem'>Fotos</li>
                    </Link>
                    <Link to='/comentarios'>
                        <li className='listitem'>Comentários</li>
                    </Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;