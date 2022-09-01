import React, { useState } from 'react'
import QrCode from './QrCodeBox';
export default function Phone() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue('tel:' + value);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Enter Mobile Number</label>
                <input type='number' placeholder={`Enter your phone number...`} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>
            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

