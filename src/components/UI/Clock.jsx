import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    
    let interval;

    const countDown = () => {
        const destination = new Date('May 16, 2023').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;
            const days = Math.floor( different / (1000 * 60 * 60 * 24));
        })
    };

  return (
    <div className='clock__wrapper d-flex align-items-center gap-3'>
        <div className="clock__data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>10 </h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3'>
                :
            </span>
        </div>

        <div className="clock__data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>10 </h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-3'>
                :
            </span>
        </div>

        <div className="clock__data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>10 </h1>
                <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <span className='text-white fs-3'>
                :
            </span>
        </div>

        <div className="clock__data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>10 </h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
        </div>
    </div>
  )
}

export default Clock