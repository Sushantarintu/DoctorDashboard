import React from 'react'
import {Heart} from 'lucide-react'

const UpcomingSchedule = () => {
  return (
    <>
      <div className='schedulediv '>
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
                  </div>
    </>
  )
}

export default UpcomingSchedule
