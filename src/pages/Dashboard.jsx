import React, { useState } from 'react'
import Header from "../components/Header/Header"
import LeftMenu from "../components/LeftMenu/LeftMenu"
import "./index.scss"


const Dashboard = () => {

    return (  
        <div className='dashboard'>
            <LeftMenu />
            <Header />
        </div>
    );
}
 
export default Dashboard;