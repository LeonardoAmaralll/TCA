import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Dropdown(){
    function DropdownItem(props){

        return(
            <div className='menu-item'>
                <Link to={props.loc}>
                    <span>{props.name}</span>
                </Link>
            </div>
        )
    }


    return(
        <div className='dropdown'>
            <DropdownItem loc='/' name='Home' />
            <DropdownItem loc='/history' name='Quem Somos' />
            <DropdownItem loc='/team' name='Equipe' />
            <DropdownItem loc='/mission' name='Missão' />
            <DropdownItem loc='/problems' name='Problemas e Soluções' />
        </div>
    )
}

export default Dropdown;