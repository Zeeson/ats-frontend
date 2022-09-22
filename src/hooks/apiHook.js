import React, {useEffect, createContext, useState, useContext  } from "react";
// import { useHistory } from "react-router";
import useAxios from "axios-hooks";
import pageContext from './pageContext';
// import { baseURL } from "../config/config.json";

const baseURL = "https://erp.oladeconsulting.com/ats/video-interview/api"
const useApi = () => {
// const history = useHistory();
const {
  appointmentSubmit,
  setAppointSubmit
} = useContext(pageContext)

const [{ ...appointmentData}, createAppointment] = useAxios(
  {
    url: `https://erp.oladeconsulting.com/ats/video-interview/api/appointment`,
    method: "POST",
  },
  {
    manual: true,
  }
);

const handleCreateAppointment = async (data) => {
  await createAppointment({
    data: {
      ...data,
    },
  }).catch((error) => console.log(error))
};

useEffect(() => {
  if(appointmentData.data){
    console.log("SUCCESS POST")
    // setAppointSubmit(appointmentData.data)
  }

}, [appointmentData.data])

return{
  handleCreateAppointment,
  appointmentData
}

}

export default useApi;
