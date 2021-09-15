import React from 'react'
import img1 from './Images/bg1.jpg';


const Caled = () => {
    return (
        <>
            <div className="calender">
                <div className="datetime">
                    <div className="date">
                        <span id="dayname">Day</span>,
                        <span id="month">Month</span>
                        <span id="daynum">00</span>,
                        <span id="year">Year</span>
                    </div>
                    <div className="time">
                        <span id="hour">00</span>:
                        <span id="minutes">00</span>:
                        <span id="seconds">00</span>
                        <span id="period">AM</span>
                    </div>
                </div>

                <div className="calenderImg">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}

export default Caled
