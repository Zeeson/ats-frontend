import React, { useState, useContext, useEffect } from 'react';
import PageContext from '../../../hooks/pageContext';
import { FaUserFriends, FaDumbbell } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BiEdit, BiTime } from 'react-icons/bi'
import { MdOutlineDateRange} from 'react-icons/md'
import { GiDuration} from 'react-icons/gi'
import "./index.scss"

const Slot = () => {

  const {
    slots,
    setSlots,
    appointmentState,
    setAppointmentState
   } = useContext(PageContext)

   const handleRemove = (index) => {
    slots.splice(index, 1);
  };

  useEffect(() => {
    if(slots){
        setSlots(state => state.filter(suggested => suggested.id !== slots.id && true))
    }
  }, [slots]);

    return (
        <div className='slot'>
            <div className='top-title'>
                <p>Time Slot 1</p>
                <div className='edit'>
                    <RiDeleteBinLine
                    onClick={(() => {
                        handleRemove()
                    })}
                    className='delete'
                    />
                    <BiEdit />
                </div>
            </div>
            <div className='content'>
                <div className='middle'>
                    <div className='date'>
                        <MdOutlineDateRange />
                        <div className='date-text'>
                            <p>Date</p>
                            <p className='capital'>{appointmentState?.date}</p>
                        </div>
                    </div>
                    <div className='time'>
                        <BiTime />
                        <div className='date-text'>
                            <p>Time</p>
                            <p className='capital'>{appointmentState?.time}</p>
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='date'>
                        <MdOutlineDateRange />
                        <div className='date-text'>
                            <p>Time Zone</p>
                            <p>{appointmentState?.timezone}</p>
                        </div>
                    </div>
                    <div className='time duration'>
                        <GiDuration />
                        <div className='date-text'>
                            <p>Duration</p>
                            <p>{appointmentState?.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slot;
