import React, { useState, useEffect, useContext, } from 'react';
import "./index.scss"
import Logo from "../../assets/Olade_logo.png"
import { FaUserFriends } from 'react-icons/fa'
import {  HiOutlineDesktopComputer } from 'react-icons/hi'
import {  MdOutlineDashboard, MdWorkOutline, MdSettings, MdOutlineNote} from 'react-icons/md'
import {  BiFolderOpen} from 'react-icons/bi'
import PageContext from '../../hooks/pageContext';

const Items = [
    {
      id: 1,
      Item: 'Dashboard',
      Svg: <MdOutlineDashboard/>,
      Class : 'active',
    },
    {
      id: 2,
      Item: 'Candidates',
      Svg: <FaUserFriends/>
    },
    {
      id: 3,
      Item: 'Interview',
      Svg: <HiOutlineDesktopComputer/>
    },
    {
      id: 4,
      Item: 'Jobs',
      Svg: <MdWorkOutline/>
    },
    {
      id: 5,
      Item: 'Onboarding',
      Svg: <MdOutlineNote/>
    },
    {
      id: 6,
      Item: 'Settings',
      Svg: <MdSettings />
    },
    {
      id: 7,
      Item: 'Admin',
      Svg: <BiFolderOpen/>
    },
  ]

const LeftMenu = () => {
    const initIndex = {
        index: 0
    }
   const [index, setIndex] = useState();
   const resetIndex = () => {
    setIndex(null)
   }

   const {
    page,
    setPage,
    currentProfile,
    setCurrentProfile,
    setManageApplicant,
   } = useContext(PageContext)

//    const toggleHeart = currentProfile == Items.id[0] ? 'active' : ''

//    useEffect(() => {
//     toggleHeart()
//    }, []);

    return (  
        <section id="left" className=''>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='items'>
               {Items.map((item, index) => (
                <li 
                    key={item.id} 
                    className={
                        item.id === currentProfile ? 'active' : ''
                    }
                    onClick={() => {
                    setCurrentProfile(item.id);
                    if(item.id === 4){
                      setManageApplicant("jobs")
                    }
                    }} 
                > 
                    <span>{item.Svg}</span> {item.Item}
                </li>
                ))}
            </div>
        </section>
    );
}
 
export default LeftMenu;