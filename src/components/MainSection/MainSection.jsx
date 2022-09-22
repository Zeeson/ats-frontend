import React, { useState, useContext, } from 'react';
import "./index.scss"
import Interviews from "../../pages/InnerPages/Interviews/Interviews"
import Candidates from "../../pages/InnerPages/Candidates/Candidates"
import InnerDashboard from "../../pages/InnerPages/InnerDashboard/InnerDashboard"
import Jobs from "../../pages/InnerPages/Jobs/Jobs"
import Admin from "../../pages/InnerPages/Admin/Admin"
import Onboarding from "../../pages/InnerPages/Onboarding/Onboarding"
import Settings from "../../pages/InnerPages/Settings/Settings"
import PageContext from '../../hooks/pageContext';
import CandidatesPage from '../../pages/InnerPages/Candidates/CandidatesPage';

const MainSection = () => {
    const {
        page,
        setPage,
        currentProfile,
        setCurrentProfile,
       } = useContext(PageContext)
    
    return ( 
        <div className='main-section'>
            {currentProfile === 1 ? 
            <InnerDashboard/> : currentProfile === 2 ?
            <CandidatesPage/> : currentProfile === 3 ?
            <Interviews /> : currentProfile === 4 ?
            <Jobs/> : currentProfile === 5 ?
            <Onboarding/>: currentProfile === 6 ?
            <Settings/> : currentProfile === 7 ?
            <Admin /> : <>Loading</>
            }
        </div> 
    );
}
 
export default MainSection;