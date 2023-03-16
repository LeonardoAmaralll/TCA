import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo2.png';
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
                    <Link to='/history'>
                        <li className='listitem'>Quem Somos</li>
                    </Link>
                    <Link to='/team'>
                        <li className='listitem'>Equipe</li>
                    </Link>
                    <Link to='/mission'>
                        <li className='listitem'>Missão</li>
                    </Link>
                    <Link to='/problems'>
                        <li className='listitem'>Problemas e Soluções</li>
                    </Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;