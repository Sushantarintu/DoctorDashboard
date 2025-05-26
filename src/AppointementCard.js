import React from 'react'

const AppointementCard = () => {
  return (
    <>
            <div className='appontmentdiv '>
            <div className='teethdiv makepointer'>
                <div className='aligndiv3'>
                    <h3>Dentist</h3>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.R7dIP2pJomnzHEjNZH1L8AHaKS&pid=Api&P=0&h=180' width={25} alt='teethimg'/>
                </div>
                    09.00-11.00<br/>Dr. Cameron Williamson
            </div>

            <div className='physiodiv makepointer'>
                <div className='aligndiv3'>
                    <h4>Physiotherapy Appointment</h4>
                    <img src='https://www.svgrepo.com/show/230486/muscle-arm.svg' width={25} alt='armimg'/>
                </div>
                    11.00-12.00<br/>Dr. Kevin Djones
            </div>
        </div>
    </>
  )
}

export default AppointementCard
