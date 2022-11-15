import React, { useState, useContext } from 'react'
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"
import PageContext from '../../hooks/pageContext';
import "./index.scss"
import { AiOutlineClose } from 'react-icons/ai'
import { BiEdit, BiTime } from 'react-icons/bi'
import { MdOutlineDateRange} from 'react-icons/md'
import { TimePicker } from 'react-ios-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from 'react-timezone-select';
import moment from "moment";


function SlotEdit() {
	const [editTime, setEditTime] = useState('10:00');
	const [period, setPeriod] = useState(1)
	const [startDate, setStartDate] = useState(new Date());

	const {
		slotModal,
		setSlotModal,
		toggle,
		slotEditForm,
		setSlotEditForm,
		selectedTimezone,
		setSelectedTimezone,
		setAppointmentForm,
		appointmentForm,
		slotEditData,
		setSlotEditData,
		setSlotArray,
		slotArray,
		slotForm,
		setSlotForm,
	 } = useContext(PageContext)

	 const handleInputChange = (event) => {
		 const { name, value } = event.target;
		 setSlotEditData({ ...slotEditData, [name]: value });
		 setSlotEditForm({
			 ...slotEditForm,
			 duration: value
		 });
	 };

	 const saveSlotArray = () => {
		 setSlotArray([...slotArray, slotEditForm])
		 setAppointmentForm({
			 ...appointmentForm,
			 slots:[...slotArray, slotEditForm],
		 })
	 }

	 const dateChange = (date) => {
	 	setStartDate(date)
	 	setSlotEditForm({
	 		...slotEditForm,
	 		date: moment(date).format("L")
	 	});
	 	// toISOString() 2022-10-10 plus time

	 	setAppointmentForm({
	 	 ...appointmentForm,
	 	 date: date
	  })
	 };

	 const timeChange = (timeValue) => {
		 setEditTime(timeValue)
		 setSlotForm({
			 ...slotForm,
			 time: timeValue,
		 });

		 setAppointmentForm({
			...appointmentForm,
			time: timeValue
		})
	 };

	 const timeZoneChange = (zone) => {
		 setSelectedTimezone(zone)
		 setSlotEditForm({
			 ...slotEditForm,
			 timezone: zone.abbrev
		 });

		setAppointmentForm({
		 ...appointmentForm,
		 timezone: zone
	 })

	 };

	 const saveZoneToForm = () => {
			 setSlotForm({
				 ...slotForm,
				 timezone: slotEditForm.timezone,
				 date: slotEditForm.date,
				 time: slotEditForm.time,
				 duration: slotEditForm.duration
			 })
	 }


	         const style = {
	             control: (base) => ({
	               ...base,
	               boxShadow: "none",
	               border: 0,
	               outline: '1px solid #C4C4C4',
	               borderRadius: '3px',
	             })
	         }

					 const submitFormData = () => {
							setSlotArray(state => state.filter(slot => slot.id !== slotArray.id && true))
							toggle()
						};

	return (
		<div style={{
			display: 'block', width: 400, padding: 10
		}}>
			<Modal isOpen={slotModal} toggle={toggle} className='interview-modal'>
			<div className="close" onClick={toggle}> <span> <AiOutlineClose /></span> </div>
			  <h2 className='title'>ADD TIME SLOT</h2>
				<ModalBody className='interview-schedule'>
						<div className='left_input'>
							<div className='time'>
								<p>Time</p>
									<div className='time-picker'>
										<BiTime />
										<TimePicker
												id="picker"
												placeHolder
												name="time"
												onChange={timeChange}
												value={slotEditData?.time}
										/>
									</div>
								</div>

								<div className='date'>
										<p>Date</p>
										{/* <input type='text' placeholder='dd/mm/yyyy' /> */}
										<div className='date-picker'>
												<MdOutlineDateRange />
												<DatePicker
												name="date"
												value={appointmentForm?.date}
												selected={startDate}
												onChange={dateChange}
												dateFormat='yyyy-MM-dd'
												/>
										</div>
								</div>

						</div>

						<div className='period'>
								<div className='duration'>
										<p>Duration</p>
										<div className='duration-input'>
											<p className="minute">Minutes</p>
											<input
											name="duration"
											value={slotEditData?.duration}
											onChange={handleInputChange}
											type='number'
											placeholder='Minutes'
											/>
										</div>
								</div>
								<div className='timezone'>
										<p>Time Zone</p>
										{/* <input type='text' placeholder='GMT +5' /> */}
										<TimezoneSelect
												name="timezone"
												className="react-select-container"
												classNamePrefix="react-select"
												value={appointmentForm?.timezone}
												onChange={timeZoneChange}
												styles={style}
										/>
								</div>
						</div>

					<div className="bottom">
							<button className="cancel" onClick={toggle}>
								CANCEL
							</button>
							<button className="save"
									onClick={(() => {
										submitFormData()
										saveZoneToForm()
									})}
								>
								SAVE
							</button>
					</div>

				</ModalBody>
			</Modal>
		</div >
	);
}

export default SlotEdit;
