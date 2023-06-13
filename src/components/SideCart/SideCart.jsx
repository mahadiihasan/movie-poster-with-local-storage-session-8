import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime }) => {

    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);


    const handlebreatTime = (bt) =>{
        localStorage.setItem('breakTime', bt);
        setBreakTime(bt);
    }

    useEffect(()=>{
        const getTotalWatchTime = localStorage.getItem('watchTime');
        setTime(getTotalWatchTime);
        const getBreakTime = localStorage.getItem('breakTime');
        if(!getBreakTime){
            setBreakTime(0);
        }
        else{
            setBreakTime(getBreakTime);
        }
    },[watchTime])

    return (
        // <div className='border border-success'>
        //     <img src="/image/email.png" className='img-fluid' alt="" />
        // </div>
        <div className='text-center'>
            <h1>My Cart</h1>
            <div className='mt-5 text-center'>
                <p>Total Watch Time: </p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className='mt-5'>Add Break Time</h5>
            <button onClick={()=>handlebreatTime(15)} className='w-25 btn-circle m-1 btn btn-info'>15</button>
            <button onClick={()=>handlebreatTime(20)} className='w-25 btn-circle m-1 bg-warning btn btn-info'>20</button>
            <button onClick={()=>handlebreatTime(25)} className='w-25 btn-circle m-1 bg-danger btn btn-info'>25</button>
            <input className='m-3' type="text" value={breakTime} disabled />
            <button onClick={()=>handlebreatTime(25)} className='w-75 btn-circle m-3 bg-success btn btn-info'>Complete</button>

        </div>
    );
};

export default SideCart;