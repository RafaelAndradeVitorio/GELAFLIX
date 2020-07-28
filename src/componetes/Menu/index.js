import React from 'react';
import Logo from '../../assets/img/logoGelaflix1.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink'
import Button from '../Button'

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
            <img class= 'Logo' src={Logo} alt='Gelaflix logo'/>
            </a>

            <Button as="a" className='ButtonLink' href="/">
             Novo Video
            </Button>
        </nav>
    )
}

export default Menu;