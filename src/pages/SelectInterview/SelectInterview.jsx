import React, { useState, useContext } from 'react';
import PageContext from '../../hooks/pageContext';
import "./index.scss";
import Logo from "../../assets/Olade_logo.png"
import Userpic from "../../assets/Userpic.png"
import { BiEdit, BiTime } from 'react-icons/bi'
import { AiOutlineVideoCamera, AiOutlineExclamationCircle} from 'react-icons/ai'

const Buttons = [
  {
    id: 1,
    Date: 'TUE, JULY 5, 2022',
  },
  {
    id: 2,
    Date: 'WED, JULY 6, 2022',
  },
  {
    id: 3,
    Date: 'WED, JULY 6, 2022',
  },
  {
    id: 4,
    Date: 'FRI, JULY 8, 2022',
  },
]

const Times = [
  {
    id: 1,
    Time: '7:00 AM',
  },
  {
    id: 2,
    Time: '8:00 AM',
  },
  {
    id: 3,
    Time: '9:00 AM',
  },
  {
    id: 4,
    Time: '10:00 AM',
  },
]

const SelectInterview = ({

}) => {

  const {
   } = useContext(PageContext)

const [active, setActive] = useState()
const [activeTime, setActiveTime] = useState()
const [time, setTime] = useState("main")

    return (
        <section className='select'>
          <section className='select-interview'>
              <div className="left">
                <div className="top-logo">
                  <div className='logo'>
                      <img src={Logo} alt="" />
                  </div>
                </div>
                <div className="content">
                  <p className="title">1 hour project manager interview with Ade Adeyemi</p>
                  <div className="candidate">
                    <img src={Userpic} alt="" />
                    <span>Candidate</span>
                  </div>
                  <div className="time">
                    <BiTime />
                    <span>1 Hour</span>
                  </div>
                  <div className="web">
                      <AiOutlineVideoCamera />
                    <span>Web confrencing details provided upon Confirmation</span>
                  </div>
                  <div className="details">
                      <AiOutlineExclamationCircle />
                      <span> A product manager interview with Ade Adeyemi for Amazon</span>
                  </div>
                </div>
              </div>
              <div className="middle">
                <p>Select Date & Time</p>
                <div className="button-container">
                  {Buttons.map((button, index) => {
                    return(
                      <button
                        className={
                            button.id === active ? 'active' : ''
                        }
                        key={button.id}
                        onClick={() => {
                        setActive(button.id);
                        setTime("time")
                        }}
                        >
                        {button.Date}
                      </button>
                    )
                  })}
                </div>
              </div>
              {time === "time" &&
              <div className="right">
                  <p>Pick A Time Interval</p>
                    <p className="selected-date">Friday July 8</p>
                    <div className="button-righ-container">
                      {Times.map((time, index) => {
                        return(
                          <button
                            className={
                                time.id === activeTime ? 'activeTime' : ''
                            }
                            key={time.id}
                            onClick={() => {
                            setActiveTime(time.id);
                            }}
                            >
                            {time.Time}
                          </button>
                        )
                      })}
                    </div>
                    <button className="confirm">
                      CONFIRM
                    </button>
              </div>
              }
          </section>

        </section>
    );
}

export default SelectInterview;
