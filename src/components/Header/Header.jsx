import React from 'react'
import { Link } from "react-router-dom";
import {  AiOutlineSearch } from 'react-icons/ai'
import {  MdNotificationsNone } from 'react-icons/md'
import ProImage from "../../assets/profile.png"
import "./index.scss"
import MainSection from '../MainSection/MainSection'

const Header = () => {
    return (  
        <section className='interface'>
            <div className='nav'>
                <div className='left'>
                    <div className='search-bar'>
                        <AiOutlineSearch />
                        <input type="text" placeholder='Global search'/>
                    </div>                    
                </div>

                <div className='profile'>
                    <MdNotificationsNone />
                    <img src={ProImage} alt="" />
                    <Link to="#" style={{ textDecoration: 'none', color: 'grey' }}>
                        <p>Aderonke Akinyemi</p>
                    </Link>
                </div>                    
            </div>
            <MainSection />
        </section>
    );
}
 
export default Header;