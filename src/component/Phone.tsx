import React, { useState } from 'react'
import QRCode from "react-qr-code";
import { FiDownload } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
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
            <div className='code_box'>
                {/* <div><QRCode value={codeValue} size={120} bgColor='#049935ff' fgColor='#4514cc' level='H' /></div> */}
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

