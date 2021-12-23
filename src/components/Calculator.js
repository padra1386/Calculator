import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Calculator() {

    const [FirstNumbuer, setFirstNumber] = useState(0);
    const [SecondNumbuer, setSecondNumber] = useState(0);
    const [Sum, setSum] = useState(0);


    const firstNumberRef = useRef(null)
    const secondNumberRef = useRef(null)


    function doCalc(e) {
        e.preventDefault();
        setFirstNumber(firstNumberRef.current.value)
        setSecondNumber(secondNumberRef.current.value)
        setSum(parseFloat(FirstNumbuer) + parseFloat(SecondNumbuer))
    }

    function Reset(e) {
        e.preventDefault();
        setFirstNumber(firstNumberRef.current.value = '');
        setSecondNumber(secondNumberRef.current.value = '');
        setSum(0)
    }


    return (
        <div className="calc">
            <div className='container'>
                <form className='d-flex flex-column'>
                    <input className='mb-2 mt-2' placeholder='First Number' ref={firstNumberRef} />
                    <input className='mb-2' placeholder='Second Number' ref={secondNumberRef} />
                    <button className='btn btn-success mb-1' type='submit' onClick={doCalc}>Calculate</button>
                </form>
                <h1>Result = {Sum}</h1>
                <button className='btn btn-danger mb-1' onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}

export default Calculator
