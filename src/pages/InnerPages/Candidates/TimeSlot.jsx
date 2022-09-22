import React, { useState, useContext } from 'react';
import PageContext from '../../../hooks/pageContext';
import "./index.scss"

const TimeSlot = ({
  submitFormData,
  appointmentData,
  setCandidatePage,
}) => {

  const {
    slots,
    appointmentSubmit
   } = useContext(PageContext)

console.log(appointmentSubmit)

    return (
        <div className='time-slot'>
          {slots.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.Item}</h2>
              </div>
            );
          })}
          <form onSubmit={submitFormData} >
            <button className='invite'
              >
               SEND INVITE
           </button>
          </form>

        </div>
    );
}

export default TimeSlot;
