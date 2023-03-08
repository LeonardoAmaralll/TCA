import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';

function Footer(){
    return(
        <footer>
            <img className='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Leonardo Amaral</span>
        </footer>
    )
}

export default Footer;