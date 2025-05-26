import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCard from './HealthStatusCard.js'

const Healthcomponent = () => {
  return (
    <>
        <div className='left-dashboard-div' style={{ position: 'relative', display: 'inline-block' }}>
          <AnatomySection />
      </div>

      <div className='right-dashboard-div '>
        <HealthStatusCard />
            </div>
    </>
  )
}

export default Healthcomponent
