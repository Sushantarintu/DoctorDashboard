import React from 'react'

const HealthStatusCard = () => {
  return (
    <>
         <div className='lungs triplecolor'>
                    <div className='bodyparts aligndiv'>
                    <img src='https://tse2.mm.bing.net/th?id=OIP.o_HT8zOL3T2Vh6J-4iqNqQHaHa&pid=Api&P=0&h=180' style={{width:"30px"}}/>
                    <h3>lungs</h3>
                    </div>
                    <h5 style={{margin:"0",marginBottom:"10px",color:"gray"}}>Date: 26 Oct 2021</h5>
                    <div className='inner-red-div'><div style={{width:"80%",backgroundColor:"red",height:"100%"}}></div></div>
                </div>
                <div className='teeth triplecolor'>
                    <div className='bodyparts aligndiv'>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.R7dIP2pJomnzHEjNZH1L8AHaKS&pid=Api&P=0&h=180' style={{width:"30px"}}/>
                    <h3>Teeth</h3>
                    </div>
                    <h5 style={{margin:"0",marginBottom:"10px",color:"gray"}}>Date: 26 Oct 2021</h5>
                    <div className='inner-red-div'><div style={{width:"80%",backgroundColor:"green",height:"100%",borderRightRadius:"10px"}}></div></div>
                </div>
                <div className='bone triplecolor'>
                    <div className='bodyparts aligndiv'>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.dmVDnfrkCx_ro6CTJCLjigHaHK&pid=Api&P=0&h=180' style={{width:"30px"}}/>
                    <h3>Bone</h3>
                    </div>
                    <h5 style={{margin:"0",marginBottom:"10px",color:"gray"}}>Date: 26 Oct 2021</h5>
                    <div className='inner-red-div'><div style={{width:"80%",backgroundColor:"orange",height:"100%"}}></div></div>
                </div>
    </>
  )
}

export default HealthStatusCard
