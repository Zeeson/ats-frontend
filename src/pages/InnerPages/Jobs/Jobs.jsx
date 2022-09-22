import React, { useState, useContext } from 'react';
import "./index.scss"
import PageContext from '../../../hooks/pageContext';
import ManageApplicants from './ManageApplicants';

const Jobs = () => {

    const {
        manageApplicant,
        setManageApplicant
       } = useContext(PageContext)

    const handleManage = () => {
        setManageApplicant("manage")
    }

    return (
        <>
        {manageApplicant === "jobs" && 
            <section className='jobs'>
                <div className="container-xl">
                    <div className="box mt-lg-2">
                    <div className="p-3">
                        <h4>Jobs</h4>
                    </div>
                        <div className="float-end col-lg-2 m-3">
                            <div className=" input-group">
                            <input type="text" className="form-control" placeholder="Search" name="q" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search" /></button>
                            </div>
                            </div>
                        </div>
                        <div className="card-body p-3">
                            <table className="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                <th className="text-capitalize" rowSpan={1} colSpan={1}>JOB TITLE</th>
                                <th colSpan={5} rowSpan={1}>CANDIDATES</th>
                                <th className="text-capitalize" rowSpan={1} colSpan={1}>JOB STATUS</th>
                                <th className="text-capitalize" rowSpan={1} colSpan={1}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className=" bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="  bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li
                                        onClick={handleManage}
                                        ><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className=" bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className="bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className=" bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="  bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className=" bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className=" bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <td> <a className="text-decoration-none" href="#" style={{color: '#000'}}> <b> Project Delivery Manager - Consulting </b>
                                    <br /><span className="text-secondary"> Toronto, Full-time</span>
                                    <br /><span className="text-secondary"> Created : Jun 22, 2022 - Ends : Sep 8, 2022 </span>
                                    </a>
                                </td>
                                <td className="bravetel border-end" style={{background: '#EBEFF2'}}>
                                    1 <br /> Candidates
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0<br /> Awaiting
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Reviewed
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br />Interview
                                </td>
                                <td className="bravetel border-end " style={{background: '#EBEFF2'}}>
                                    0 <br /> Hired
                                </td>
                                <td>
                                    <div className="btn-group m-2">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Open
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">Paused</a></li>
                                        <li><a className="dropdown-item" href="#">Open</a></li>
                                        <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group m-2 ">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 14}}>Actions
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" style={{fontSize: 13}}>
                                        <li><a className="dropdown-item" href="#">View Job Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Manage Applicant</a></li>
                                        {/* <li><a className="dropdown-item" href="#">Close</a></li>
                                        <li><a className="dropdown-item" href="#">Interview</a></li> */}
                                    </ul>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>  
        </section> 
        }
        {manageApplicant === "manage" && <ManageApplicants/>} 
      </>   
    );
}
 
export default Jobs;