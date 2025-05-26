import React from 'react'
import {ZoomIn} from 'lucide-react'
import humanimg from './humanskin.jpg'

const AnatomySection = () => {
  return (
    <>
      <ZoomIn
                className='zoom-icon'
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                //   backgroundColor: 'white',
                  borderRadius: '50%',
                  padding: '5px',
                  color:"white",
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              />
              <img src={humanimg} style={{ width: '100%',height:"100%", borderRadius: '9px' }} />
    </>
  )
}

export default AnatomySection
