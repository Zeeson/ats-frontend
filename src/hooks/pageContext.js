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

  const [appointmentForm, setAppointmentForm] = useState(
    {
    candidate_id:4,
    job_role_id:4,
    title:"",
    description:"",
    time:'10:00',
    date:'09/14/2022',
    duration:30,
    timezone:'',
    created_by:4,
    slots:[]
  }

)



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
        setAppointSubmit
      }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
