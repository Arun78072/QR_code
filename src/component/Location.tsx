import React, { useState } from 'react'
import QRCode from "react-qr-code";
import { FiDownload } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
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
            <div className='code_box'>
                <div><QRCode value={codeValue} size={200} /></div>
                <div className='action_btn'>
                    <button><span><GrDocumentPdf /></span> Print</button>
                    <button><span><FiDownload /></span>Download</button>
                </div>
                <p className='message'>These stunts are performed by trained professionals, don't try this at home..</p>
            </div>
        </section>
    )
}

