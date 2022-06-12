import React from 'react'
import CallIcon from '@mui/icons-material/Call';

const AnimatedDialer = () => {
  return (

    <div className="h-[100px] flex w-[100px] rounded-full relative m-auto" >
    {["green","blue","pink","purple","violet","lightblue","red","orange","grey","indigo","violet","darkblue"].map((item,index)=> (<div style={{transform:`scale(${index+1})`, backgroundColor:item,zIndex:-(index),animationDelay:`${-index*2}`,animationDuration:`${index*10}`}} className='absolute circles rounded-full w-full h-full'> 
  
    </div>))}
    <div className='h-[50px] w-[50px] m-auto z-[10] bg-black flex rounded-full circleContainer'>
    <CallIcon className='text-white m-auto'/>
    </div>

  </div>
  )
}

export default AnimatedDialer