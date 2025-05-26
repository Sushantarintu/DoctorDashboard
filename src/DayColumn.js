import React from 'react';
import './CalendarUI.css';

const DayColumn = ({ day, date, slots, activeSlot }) => {
  return (
    <div className={`day-column ${activeSlot ? 'selected' : ''}`}>
      <div className="date">
        <span className='span1'>{day}</span><br /><span className='span2'>{date}</span>
      </div>
      <div className="slots">
        {slots.map(time => (
          <div
            key={time}
            className={`slot ${time === activeSlot ? 'active' : ''}`}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayColumn;
