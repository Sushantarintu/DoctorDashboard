import React from 'react'
import './dashboard.css'
import {Calendar,MessageCircle,PhoneIcon,LayoutDashboardIcon,MessageSquareDiffIcon, Search, Bell, ZoomIn, ArrowBigLeft, ArrowBigRight, Heart, Settings} from 'lucide-react'
import avatar from './avatar-male-man-svgrepo-com.svg'
import Sidebar from './Sidebar.js'
import Healthcomponent from './Healthcomponent.js'
import CalendarView from './CalendarView.js'
import AppointementCard from './AppointementCard.js'
import UpcomingSchedule from './UpcomingSchedule.js'
import ActivityFeed from './ActivityFeed.js'

// ,Appointment,Statistics,Chat,Call
const App = () => {
  return (
    <>
      <div className='main-div bordercolor'>
        <div className='first-div'>
          <Sidebar />
        </div>
        <div className='second-div'>
            <div className='searchbar'>
               <div className='mergediv aligndiv'>
                <div className='aligndiv'><Search />
                <input type='text' placeholder='Search'/>
                </div>
                <Bell fill='black'/>
               </div>
            </div>

           <span style={{fontWeight:"100px",marginBottom:"20px"}}>Dashboard</span>
           <div className='dashboard-div '>
            <Healthcomponent />
           </div>

          <ActivityFeed />
            </div>           


        <div className='third-div'>
            <div className='aligndiv2'>
            <div className='avtar'><img src={avatar} width={34}/></div>
            <div className='plus-icon'>+</div>
            </div>

            <CalendarView />
            <AppointementCard />
            <UpcomingSchedule />
            {/* <div className='schedulediv '>
                <h3>The upcoming Schedule</h3>
                <span>On Thursday</span>
                <div className='alignmentdiv'>
                    <div className='physiodiv makepointer'>
                        <div className='aligndiv3'>
                        <b style={{fontWeight:"lighter"}}>Health checkup complete</b>
                        <img src='https://www.svgrepo.com/show/489859/syringe.svg' width={25} alt='injectionimg'/>
                        </div>
                        <b style={{fontWeight:"lighter"}}>11.00 AM</b>
                    </div>
                    <div className='physiodiv makepointer'>
                        <div className='aligndiv3'>
                        <b style={{fontWeight:"lighter"}}>Opthalmologist</b>
                        <img src='https://www.svgrepo.com/show/513198/eye.svg' width={25} alt='eyeimg'/>
                        </div>
                        <b style={{fontWeight:"lighter"}}>14.00 PM</b>
                    </div>
                </div>

                <span>On Saturday</span>
                <div className='alignmentdiv'>
                    <div className='physiodiv makepointer'>
                        <div className='aligndiv3'>
                        <b style={{fontWeight:"lighter"}}>Cardiologist</b>
                        <Heart fill='red' style={{color:"red"}}/>
                        </div>
                        <b style={{fontWeight:"lighter"}}>12.00 AM</b>
                    </div>
                    <div className='physiodiv makepointer'>
                        <div className='aligndiv3'>
                        <b style={{fontWeight:"lighter"}}>Neurologist</b>
                        <img src='https://www.svgrepo.com/show/482895/doctor.svg' width={25} alt='doctorimg'/>
                        </div>
                        <b style={{fontWeight:"lighter"}}>16.00 PM</b>
                    </div>
                </div>
            </div> */}

        </div>
      </div>
    </>
  )
}

export default App
