import React from 'react';
import "./index.scss"

const Candidates = ({
    setCandidatePage,
}) => {

    return ( 
        <div className='candidate'>
            <div className="container-xl">
                <div className="box mt-lg-5">
                    {/*        <div class="p-3">*/}
                    {/*            <h4>Jobs</h4>*/}
                    {/*        </div>*/}
                    <div className="float-end col-lg-2 m-3">
                    <div className=" input-group">
                        <input type="text" className="form-control" placeholder="Search" name="q" />
                        <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search" /></button>
                        </div>
                    </div>
                    </div>
                    <div className="card-body p-2">
                    <table className="table  table-responsive">
                        <thead>
                        <tr>
                            <th className="text-capitalize">CANDIDATE NAME</th>
                            <th>EMAIL</th>
                            <th className="text-capitalize">JOB TITLE</th>
                            <th>Company</th>
                            <th className="text-capitalize">RESUME</th>
                            <th className="text-capitalize">DATE APPLIED</th>
                            <th className="text-capitalize">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Amazon
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li
                                onClick={(() => {
                                    setCandidatePage("interview")
                                })}
                                ><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Apple
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Proinsight
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Sterling
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Sterling
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ade Adeyemi
                            </td>
                            <td>
                            ade.adeyemi@sample.com
                            </td>
                            <td>
                            Business Analyst
                            </td>
                            <td>
                            Sterling
                            </td>
                            <td>
                            Resume
                            </td>
                            <td>
                            2022-08-09 17:50:09
                            </td>
                            <td>
                            <div className="btn-group mt-1 mb-1">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: 12}}>Actions
                                <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu" style={{fontSize: 12}}>
                                <li><a className="dropdown-item" href="#">View Profile</a></li>
                                <li><a className="dropdown-item" href="#">Schedule Interview</a></li>
                                {/*                                <li><a class="dropdown-item" href="#">Close</a></li>*/}
                                {/*                                <li><a class="dropdown-item" href="#">Interview</a></li>*/}
                                </ul>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Candidates