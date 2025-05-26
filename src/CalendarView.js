import React from 'react'
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'
import CalendarUI from './CalendarUI'

const CalendarView = () => {
  return (
    <>
          <div className='calender'>
                      <div className='aligndates'>
                          October 2021
                          <div>
                          <ArrowBigLeft className='makepointer' fill='black'/>
                          <ArrowBigRight className='makepointer' fill='black'/>
                          </div>
                      </div>
      
                      <div><CalendarUI/></div>
                  </div>
    </>
  )
}

export default CalendarView
