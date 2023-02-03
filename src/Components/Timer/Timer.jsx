import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState("00:00:00");
    const [workMode, setWorkMode] = useState('stop');
    const [timeoutHandler, setTimeoutHandler] = useState(null);

    const handleStart = () => {
        console.log('handleStart');
        setWorkMode('start');
    }

    const handleStop = () => {
        console.log('handleStop');
        setWorkMode('stop');
    }

    const handleReset = () => {
        console.log('handleReset');
        setWorkMode('reset');
    }

    useEffect(() => {
        let hours = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds - hours * 3600) / 60);
        let secs = seconds % 60;

        secs = ('0' + secs).slice(-2);
        mins = ('0' + mins).slice(-2);
        hours = ('0' + hours).slice(-2);

        setTime(`${hours}:${mins}:${secs}`);
    }, [seconds])

    useEffect(() => {
        if (workMode === 'start') {
            setTimeoutHandler(setTimeout(() => setSeconds(seconds + 1), 1000));
        } else {
            setTimeoutHandler(null);
        }
    }, [seconds, workMode])

    useEffect(() => {
        if (workMode === 'reset' && timeoutHandler === null) {
            setWorkMode('stop');
            setTimeout(() => {
                setSeconds(0);
                setTime("00:00:00");
            }, 1000);
        }
    }, [timeoutHandler, workMode])

    return (
        <>
            <div className='watch'>
                <div className='time'>{time}</div>
                <div className='controls'>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Timer;