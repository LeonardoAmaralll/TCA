import React from 'react';
import './styles.css';
import Button from '../button/button';
import { Link } from 'react-router-dom';

function Pagecards(props){

    return(
        <div className='cardContainer'>
            <div className='cardTitle'>
                {props.name}
                <div className='underline'></div>
            </div> 
            <img className='cardImage' src={props.img} />
            <div className='cardText'>{props.text}</div>
            <div className='cardButton'>
                <Link to={props.loc}>
                    <Button name='Saiba Mais' />
                </Link>
            </div>
        </div>
    )
}

export default Pagecards;