import React from 'react';
import Header from '../../components/header/header.js';
import Banner from '../../components/banner/banner.js';
import Pagecards from '../../components/pagecards/pagecards.js';
import QuemSomosIMG from '../../assets/diferenciais.jpeg'
import './styles.css';

function Home(){

    return(
        <>
            <Header />
            <Banner />
            <div className='pagesContainer'>
                <div className='inner'>
                    <Pagecards name='Quem Somos' img={QuemSomosIMG} text='teste 123' loc='/history' />
                    <Pagecards name='Missão' img={QuemSomosIMG} text='teste 123' loc='/misson' />
                </div>
                <div className='inner'>
                    <Pagecards name='Problemas e Soluções' img={QuemSomosIMG} text='teste 123' loc='/problems' />
                    <Pagecards name='Equipe' img={QuemSomosIMG} text='teste 123' loc='/team' />
                </div>
            </div>
        </>
    )
}

export default Home;