import React, { useState } from 'react'
import QRCode from "react-qr-code";

import { HiArrowCircleRight } from 'react-icons/hi'
import QrCode from './QrCodeBox';
export default function Sms() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const [message, setMessage] = useState('')
    const codeGenerate = () => {
        setCodeValue(`sms:${value}?&body=${message}`);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Enter Phone Number</label>
                <input type='number' placeholder={`0123456789`} onChange={(e) => { setValue(e.target.value) }} />
                <label>Enter Message </label>
                <input type='text' placeholder={`Hello ...`} onChange={(e) => { setMessage(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'><HiArrowCircleRight />Generate QR</button>
            </div>
            <QrCode value={codeValue} />
        </section>

    )
}
