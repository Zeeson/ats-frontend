import { createContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setPage] = useState("main")
  const [currentProfile, setCurrentProfile] = useState();
  const [manageApplicant, setManageApplicant] = useState("jobs");
  const [slots, setSlots] = useState([])
  const [selectedTimezone, setSelectedTimezone] = useState({})
  const [appointmentState, setAppointmentState] = useState({})
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentSubmit,  setAppointSubmit] = useState()
  const [slotArray, setSlotArray] = useState([])
  // Modal open state
  const [slotModal, setSlotModal] = useState(false);
  // Toggle for Modal
	const toggle = () => setSlotModal(!slotModal);

  const initialForm = {
    candidate_id:23,
    job_role_id:2,
    title:"",
    description:"",
    time:"10:00",
    date:"2022-09-21",
    duration:0,
    timezone:"UTC",
    created_by:7,
    slots:[
        {
            date:"2022-09-10",
            time:"10:00",
            timezone:"UTC",
            duration:30
        }
    ]
}

const [appointmentForm, setAppointmentForm] = useState(initialForm)
const [slotEditForm, setSlotEditForm] = useState({
  date:"",
  time:"",
  timezone:"",
  duration:0
})

const [slotEditData, setSlotEditData] = useState()


  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        currentProfile,
        setCurrentProfile,
        manageApplicant,
        setManageApplicant,
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
        appointmentSubmit,
        setAppointSubmit,
        slotArray,
        setSlotArray,
        initialForm,
        slotModal,
        setSlotModal,
        toggle,
        slotEditForm,
        setSlotEditForm,
        slotEditData,
        setSlotEditData
      }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
