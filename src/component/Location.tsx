import React, { useState } from 'react'
import QrCode from './QrCodeBox';
export default function Location() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(`geo:${latitude},${longitude}?q=${latitude},${longitude}`);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Latitude</label>
                <input type='number' placeholder={`Enter Latitude...`} onChange={(e) => { setLatitude(e.target.value) }} />
                <label>Longitude</label>
                <input type='number' placeholder={`Enter Longitude...`} onChange={(e) => { setLongitude(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>
            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

