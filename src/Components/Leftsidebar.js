import React from 'react'

const Leftsidebar = () => {
  return (
    <>
     <aside className="left-sidebar">
        <div className="scroll-sidebar">

          <nav className="sidebar-nav">
            <ul id="sidebarnav">

              {/* HRM */}

              <li className={`sidebar-item `}>

                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="#" onClick={(e) => e.preventDefault()}
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon" />
                  <span className="hide-menu">HRM</span>
                </a>

                <ul aria-expanded="false" className="collapse first-level">
                  {/* Employee */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Employee</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className={`sidebar-item`}>
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Add Employee</span>
                            </a>
                          </a>
                       
                      </li>
                      <li className={`sidebar-item`}>
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">All Employees</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>
                  {/* End Employee */}
                  {/* Department */}



                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Manage Department</span>

                    </a>
                    <ul aria-expanded="false" className="collapse second-level">

                      <li className={"sidebar-item"}>
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">All Departments</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>




                  {/* End Department */}
                  {/* Designation */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Designation</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Manage Designations</span>
                            </a>
                          </a>
                       
                      </li>
                    </ul>
                  </li>
                  {/* End Designation */}
                  {/* Holidays */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Holidays</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Add Holiday</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                       
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">All Holidays</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>
                  {/* End Holidays */}
                  {/* Leave Categories */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Leave Categories</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Add Leave</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">All Leaves</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>
                  {/* End Leave Categories */}
                  {/* Leave Applications */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Leave Applications</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Applications</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                        
                          <a href="/modules/hr/leaveApplications/myApplications">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">My Applications</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                       
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">New Application</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                        
                          <a href="$">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Add Leave</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>
                  {/* End Leave Applications */}
                  {/* Duty Roster */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Duty Roster</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Rosters</span>
                            </a>
                          </a>
                        
                      </li>
                      <li className="sidebar-item">
                        
                          <a href="#">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Shifts</span>
                            </a>
                          </a>
                        
                      </li>
                    </ul>
                  </li>
                  {/* End Duty Roster */}
                  {/* Roster Assignments */}
                  <li className="sidebar-item">
                    
                      <a href="#">
                        <a
                          className="sidebar-link waves-effect waves-dark sidebar-link"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-cube-send" />
                          <span className="hide-menu">Roster Assignments</span>
                        </a>
                      </a>
                
                  </li>
                  {/* End Roster Assignments */}

                </ul>
              </li>

              {/* End HRM */}

 

        




            </ul>
          </nav>

        </div>
      </aside>
    </>
  )
}

export default Leftsidebar