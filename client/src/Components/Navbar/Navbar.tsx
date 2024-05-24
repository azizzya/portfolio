import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.scss'
import logo from '../../shared/logo.png'
import search from '../../shared/search.png'
import photo from '../../shared/photo.jpg'

interface NavbarProps {
    
}

const Navbar: FC<NavbarProps> = () => {
    const [profileVisible, setProfileVisible] = useState(false)
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <Link to='/'>
                    <div className="logo-wrapper">
                        <img src={logo} alt="Logo" className='logo'/>
                    </div>
                </Link>
                <div className="search">
                    <form className='search-form'>
                        <img src={search} alt='' className='search-icon'/>
                        <input type="text" placeholder='ПОИСК' className='search-input'/>
                        <button className='search-button'>НАЙТИ</button>
                    </form>
                </div>
                <div className="profile" >
                    <img src={photo} alt='' className='profile-photo' onClick={() => {
                        if (profileVisible === false) setProfileVisible(true);
                        if (profileVisible === true) setProfileVisible(false);
                    }}/>
                    {profileVisible && (
                        <div className='modal'>
                            <Link to={'/profile'} className='modal-link'>
                                ПРОФИЛЬ
                            </Link>
                            <Link to={'/setting'} className='modal-link'>
                                НАСТРОЙКИ
                            </Link>
                            <Link to={'/help'} className='modal-link'>
                                ПОМОЩЬ
                            </Link>
                            <Link to={'/exit'} className='modal-link'>
                                ВЫЙТИ
                            </Link>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;