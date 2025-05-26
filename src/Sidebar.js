import React from 'react'
import './dashboard.css'
import {Calendar,MessageCircle,PhoneIcon,LayoutDashboardIcon,MessageSquareDiffIcon, Search, Bell, ZoomIn, ArrowBigLeft, ArrowBigRight, Heart, Settings} from 'lucide-react'


const Sidebar = () => {
  return (
    <>
      {/* <div className='first-div'> */}
                  <h1><span style={{color:"blue",fontWeight:"20px"}}>Health</span>Care</h1>
                  <h5 className='delpad'>General</h5>
                  <div className='general-div'>
                      <div className='aligndiv hoveringdiv'>
                          <LayoutDashboardIcon/>
                          <a href='#' className='hoveringdiv'>Dashboard</a>
                      </div>
                      <div className='aligndiv hoveringdiv'>
                          <img src='https://www.svgrepo.com/show/523469/history.svg' width={25}/>
                          <a href='#' className='hoveringdiv'>History</a>
                      </div>
                      <div className='aligndiv hoveringdiv'>
                          <Calendar/>
                          <a href='#' className='hoveringdiv'>Calendar</a>
                      </div>
                      <div className='aligndiv hoveringdiv'>
                          <MessageSquareDiffIcon/>
                          <a href='#' className='hoveringdiv'>Appointments</a>
                      </div>
                      <div className='aligndiv hoveringdiv'>
                          <img src='https://www.svgrepo.com/show/318140/statistics-chart-1.svg' width={20}/>
                          <a href='#' className='hoveringdiv'>Statistics</a>
                      </div>
                  </div>
      
                   <h5 className='delpad'>Tools</h5>
                  <div>
                      <div className='aligndiv hoveringdiv'>
                          <MessageCircle/>
                          <a href='#' className='hoveringdiv'>Chat</a>
                      </div>
                      <div className='aligndiv hoveringdiv'>
                          <PhoneIcon/>
                          <a href='#' className='hoveringdiv'>Support</a>
                      </div>
                  </div>
                  <footer>
                      <div className='aligndiv hoveringdiv settings'>
                          <Settings/>
                          <a href='#' className='hoveringdiv'>Settings</a>
                      </div>
                  </footer>
              {/* </div> */}
    </>
  )
}

export default Sidebar
