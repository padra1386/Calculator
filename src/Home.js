import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
function Form() {

    const [click, setCount] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setCount(click + 1)

    }

    return (
        <div className='Home'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-font'>ذکر شمار</h1>
                <div className='center'>
                    <button className='btn btn-success center-btn text-font' type="submit">اضافه کردن</button>
                    <h3 className='center-txt'>تعداد ذکر({click})</h3>
                </div>
            </form>
        </div>
    );
}

export default Form
