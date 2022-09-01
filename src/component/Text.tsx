import React, { useState } from 'react'
import ScanBox from './ScanBox';
export default function Text() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(value);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Enter Text</label>
                <input type='text' placeholder={`Enter your text ...`} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>
            </div>
            <ScanBox value={codeValue} />
        </section >

    )
}
