import React, { useState, useContext } from 'react';
import PageContext from '../../../hooks/pageContext';
import "./index.scss";
import Slot from './Slots';
import Interview from "../../../assets/no-interview.png"

const TimeSlot = ({
  submitFormData,
  appointmentData,
  setCandidatePage,
  removeSlot,
  setTimeSlot,
  slotModal,
  setSlotModal,
}) => {

  const {
    slots,
    appointmentSubmit,
    slotArray,
    setSlotArray,
    slotEditData,
    setEditSlotData
   } = useContext(PageContext)

console.log(appointmentSubmit)

    return (
        <div className='time-slot'>
              <div>
                  <Slot
                    removeSlot={removeSlot}
                    slotModal={slotModal}
                    setSlotModal={setSlotModal}
                    />
              </div>
          {slotArray.length ?
          <form onSubmit={submitFormData} >
            <button
              className='invite'
              >
               SEND INVITE
           </button>
          </form>
          :
          <div className='content after-content'>
              <div className='image'>
                  <img src={Interview} alt="" />
                  <p className='img-text'>No Interview Date Scheduled Yet</p>
              </div>
              <button
                className="send-button"
              >
                  SEND INVITE
              </button>
          </div>
          }
        </div>
    );
}

export default TimeSlot;
