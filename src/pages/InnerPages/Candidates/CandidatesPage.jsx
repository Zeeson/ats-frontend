import React, { useState } from 'react';
import "./index.scss"
import Candidates from './Candidates';
import ScheduleInterview from './ScheduleInterview'

const CandidatesPage = () => {
    const [candidatePage, setCandidatePage] = useState("main")

    return (
        <section className=''>
            {candidatePage === "main" &&
            <Candidates
            candidatePage={candidatePage}
            setCandidatePage={setCandidatePage}
            />
            }
            {candidatePage === "interview" &&
            <ScheduleInterview setCandidatePage={setCandidatePage}/>
            }
        </section>
    );
}

export default CandidatesPage;
