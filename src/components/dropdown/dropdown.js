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
            <DropdownItem loc='/contato' name='Contato' />
            <DropdownItem loc='/fotos' name='Fotos' />
            <DropdownItem loc='/comentarios' name='Comentários' />
        </div>
    )
}

export default Dropdown;