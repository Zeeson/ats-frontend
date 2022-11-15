import React, { useState, useContext, useEffect } from 'react';
import PageContext from '../../../hooks/pageContext';
import { FaUserFriends, FaDumbbell } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BiEdit, BiTime } from 'react-icons/bi'
import { MdOutlineDateRange} from 'react-icons/md'
import { GiDuration} from 'react-icons/gi'
import "./index.scss"
import moment from "moment";
import SlotEdit from "../../../components/Modals/SlotEditModal"

import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"

const Slot = ({
  slot,
  removeSlot,
  slotModal,
  setSlotModal,
}) => {

  const {
    slots,
    setSlots,
    appointmentState,
    setAppointmentState,
    slotArray,
    setSlotArray,
    toggle,
		slotForm,
		slotEditForm,
		setSlotEditForm,
		setSlotEditData
   } = useContext(PageContext)

   const handleRemove = (index) => {
    slotArray.splice(index, 1);
  };


const updateSlotState = () => {
  if(slotArray){
      setSlotArray(state => state.filter(slot => slot.id !== slotArray.id && true))
  }
}

console.log("------------=====+++++")
console.log(slotArray)
// useEffect(() => {
//
// }, [slotArray])

    return (
      <section className="slot-container">
        {slotArray.map((slot, index) => (
        <div key={index} className='slot'>
            <div className='top-title'>
                <p>Time Slot {index + 1}</p>
                <div className='edit'>
                    <RiDeleteBinLine
                    onClick={(() => {
                        handleRemove()
                        updateSlotState()
                    })}
                    className='delete'
                    />
                    <BiEdit
											onClick={(() => {
				                setSlotEditData(slot)
												toggle()
												console.log(slot.id)
				              })}
                      />
                </div>
            </div>
            <div className='content'>
                <div className='middle'>
                    <div className='date'>
                        <MdOutlineDateRange />
                        <div className='date-text'>
                            <p>Date</p>
                            <p className='capital'>{moment(slot?.date).format("MMMM Do YYYY")}</p>
                        </div>
                    </div>
                    <div className='time time-items'>
                        <BiTime />
                        <div className='date-text'>
                            <p>Time</p>
                            <p className='capital'>{slot?.time}</p>
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <div className='date'>
                        <MdOutlineDateRange />
                        <div className='date-text'>
                            <p>Time Zone</p>
                            <p>{slot?.timezone}</p>
                        </div>
                    </div>
                    <div className='time duration'>
                        <GiDuration />
                        <div className='date-text'>
                            <p>Duration</p>
                            <p>{slot?.duration} Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          ))}
          <SlotEdit />
      </section>
    );
}

export default Slot;
