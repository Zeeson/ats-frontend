import React, { useState, useContext, useEffect } from 'react';
import "./index.scss"
import Interview from "../../../assets/no-interview.png"
import TimeSlot from './TimeSlot';
import PageContext from '../../../hooks/pageContext';
import Slot from './Slots';
import { TimePicker } from 'react-ios-time-picker';
import { BiEdit, BiTime } from 'react-icons/bi'
import { MdOutlineDateRange} from 'react-icons/md'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from 'react-timezone-select';
import DurationPicker from 'react-duration-picker';
import { TimeDurationInput } from 'react-time-duration-input'
import useApi from "../../../hooks/apiHook"
import moment from "moment";


const Schedule = ({setCandidatePage}) => {
    const [timeSlot, setTimeSlot] = useState("main")
    const [saveButton, setSaveButton] = useState("true")
    const [time, setTime] = useState('10:00');
    const [period, setPeriod] = useState(1)
    const [slotForm, setSlotForm] = useState({
      id:1,
      date:"",
      time:"",
      timezone:"",
      duration:0
    })

    const {
        slots,
        setSlots,
        appointmentForm,
        setAppointmentForm,
        selectedTimezone,
        setSelectedTimezone,
        appointmentState,
        setAppointmentState,
        startDate,
        setStartDate,
        slotArray,
        setSlotArray,
        initialForm,
        slotModal,
        setSlotModal,
       } = useContext(PageContext)

       const{
         handleCreateAppointment,
         appointmentData,
       } = useApi()

       const handleInputChange = (event) => {
         const { name, value } = event.target;
         setAppointmentForm({ ...appointmentForm, [name]: value });
         setSlotForm({
           ...slotForm,
           duration: value
         });

       };

       const handleTimeZoneChange = (zone) => {
         setSelectedTimezone(zone)
         setAppointmentForm({
          ...appointmentForm,
          timezone: {...selectedTimezone, zone}
        })
       }


       // const handleDateChange = (date) => {
       //   setStartDate(date)
       //   setAppointmentForm({
       //    ...appointmentForm,
       //    date: startDate
       //  })
       // }

       // const handleTimeChange = (timeValue) => {
       //   setTime(timeValue)
       //   setAppointmentForm({
       //    ...appointmentForm,
       //    time: time
       //  })
       // }

       const submitFormData = (e) => {
          e.preventDefault();
          if(handleCreateAppointment(appointmentForm)){
            console.log("=====SUCCESS========");
            setSlotArray([]);
            setAppointmentForm(initialForm)
            setCandidatePage("interview")
          };
        };

        console.log(appointmentForm)
        console.log(appointmentData)

        const saveSlotArray = () => {
          setSlotArray([...slotArray, slotForm])
          setAppointmentForm({
            ...appointmentForm,
            slots:[...slotArray, slotForm],
          })
        }
        console.log(slotArray)

        const removeSlot = (index) => {
          setSlotArray(slotArray.filter((el, i) => i !== index))
        }

        const handleSlotChange = (e) => {
          setAppointmentForm({
            ...appointmentForm,
            slots:[...slotArray, slotArray],
          })
        };

        const dateChange = (date) => {
          setStartDate(date)
          setSlotForm({
            ...slotForm,
            date: moment(date).format("L")
          });
          // toISOString() 2022-10-10 plus time

          setAppointmentForm({
           ...appointmentForm,
           date: date
         })

        };

      console.log(slotForm)

        const timeChange = (timeValue) => {
          setTime(timeValue)
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
          setSlotForm({
            ...slotForm,
            timezone: zone.abbrev
          });

         setAppointmentForm({
          ...appointmentForm,
          timezone: zone
        })

        };

        const saveZoneToForm = () => {
            setAppointmentForm({
              ...appointmentForm,
              timezone: slotForm.timezone,
              date: slotForm.date
            })
        }
        // const durationChange = (e) => {
        //   setSlotForm({
        //     ...slotForm,
        //     duration: e,
        //   });
        // };

        // const saveTimeSlots = () => {
        //   setSlots(current => [{
        //       id: 1,
        //       Item: <Slot />,
        //   }, ...current]);
        // };
        // console.log(slots)

        const style = {
            control: (base) => ({
              ...base,
              boxShadow: "none",
              border: 0,
              outline: '1px solid #C4C4C4',
              borderRadius: '3px',
            })
        }

        if(appointmentData.loading) return <div> Loading... </div>
        if(!appointmentData.loading && appointmentData.error) return <div>An error</div>
        if(appointmentData?.data?.results && !appointmentData.error){
          // setCandidatePage("interview")

        }

    return (
        <section className='interview'>
            <h2 className='title'>Interview Schedule</h2>
            <div className='interview-schedule' onSubmit={submitFormData}>
                <div className='left'>
                    <div className='left_input'>
                        <p>Title</p>
                        <input
                          name="title"
                          type="text"
                          value={appointmentForm.title}
                          onChange={handleInputChange}
                          placeholder='Enter Title'
                        />
                    </div>
                    <div className='left_text_area'>
                        <p>Description (optional)</p>
                        <textarea
                        name="description"
                        value={appointmentForm.description}
                        onChange={handleInputChange}
                        className='text-area'
                        placeholder='Enter Description'
                        >
                        </textarea>
                    </div>
                    <div className='time-date'>
                        <div className='time'>
                            <p>Time</p>
                            <div className='time-picker'>
                            <BiTime />
                            <TimePicker
                                id="picker"
                                placeHolder
                                name="time"
                                onChange={timeChange}
                                value={appointmentForm.time}
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
                                value={appointmentForm.date}
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
                              value={appointmentForm.duration}
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
                                value={appointmentForm.timezone}
                                onChange={timeZoneChange}
                                styles={style}
                            />
                        </div>
                    </div>
                    <div className='save'>
                        {saveButton === "true" ?
                        <button
                        onClick={(() => {
                          setTimeSlot("slots");
                          setSaveButton("false");
                          saveSlotArray();
                          saveZoneToForm();
                          // setAppointmentState(appointmentForm);
                        })}
                        className='save-button'
                        >
                            Save
                        </button>
                        : <div></div>
                        }
                        <button
                        onClick={(() => {
                            setSaveButton("true")
                        })}
                        className='add-button'
                        >
                        + ADD ANOTHER TIME SLOT
                        </button>
                    </div>
                </div>
                <div className='right'>
                 <h2 className='right-title'>Interview Date Summary</h2>
                 {timeSlot === "main" &&
                    <div className='content'>
                        <div className='image'>
                            <img src={Interview} alt="" />
                            <p className='img-text'>No Interview Date Scheduled Yet</p>
                        </div>
                        <button
                          className=""
                        >
                            SEND INVITE
                        </button>
                    </div>
                    }
                    {timeSlot === "slots" &&
                    <div className='content'>
                         <TimeSlot
                           submitFormData={submitFormData}
                           appointmentData={appointmentData}
                           removeSlot={removeSlot}
                           setTimeSlot={setTimeSlot}
                           slotModal={slotModal}
                           setSlotModal={setSlotModal}
                           />
                    </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Schedule;
