import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import { SidebarData } from './SlidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className="navbar">
                    <NavLink to="/" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavLink>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <NavLink to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </NavLink>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <NavLink to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
