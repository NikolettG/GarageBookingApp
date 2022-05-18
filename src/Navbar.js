import './Navbar.css'
import React, { useState } from 'react'
import Logo from './logo.png'
import { Close, MenuOutlined } from '@material-ui/icons'


const Navbar = () => {

    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)

    }

    return (
        <div className='header'>


            <div className='menu-icon'>
                <MenuOutlined className='menu' onClick={showMenu} />
            </div>
            <nav className={active ? 'slider active' : 'slider'}>
                <ul>
                    <div className='closed'>
                        <Close className='close' onClick={showMenu} />
                    </div>
                    <li>Rólunk</li>
                    <li>Működésünk</li>
                    <li>Bérlés</li>
                    <li>Kapcsolat</li>
                    <li className='login'>Belépés</li>
                </ul>
            </nav>
            <div className='logoDiv'>
                <h3 className="websiteName">GarageBooking</h3>
            </div>
        </div>
    )
}
export default Navbar;