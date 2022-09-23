import React, { useState } from 'react'
import QrCode from './QrCodeBox';
import { HiArrowCircleRight } from 'react-icons/hi'
export default function Mail() {
    const [value, setValue] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(`mailto:${value}?subject=${subject}&body=${message}`);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Mail id</label>
                <input type='mail' placeholder={`Enter your email @...`} onChange={(e) => { setValue(e.target.value) }} />
                <label>Subject </label>
                <input type='text' placeholder={`Enter your subject  ..`} onChange={(e) => { setSubject(e.target.value) }} />
                <label>Body </label>
                <input type='text' placeholder={`Enter your message ...`} onChange={(e) => { setMessage(e.target.value) }} />

                <button onClick={codeGenerate} className='submit_btn'><HiArrowCircleRight />Generate QR</button>


                {/* mailto:no-one@snai1mai1.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/ */}
                {/* "mailto:arun7807224868@gmail.com?Subject=My%20Query&body=Hi,I found this web" */}
            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

