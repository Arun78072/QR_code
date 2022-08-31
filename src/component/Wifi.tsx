import React, { useState } from 'react'
import QRCode from "react-qr-code";
import { FiDownload } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
export default function Wifi() {
    const [wifiName, setWifiName] = useState('')
    const [encryption, setEncryption] = useState('')
    const [password, setPassword] = useState('')
    const [wifiHidden, setWifiHidden] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(`WIFI:S:${wifiName};T:${encryption};P:${password};H:1;;`);
    }
    // WIFI:S:stranger;T:WPA;P:password;H:1;;

    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>WiFi name (SSID)</label>
                <input type='text' placeholder={`Enter WiFi name...`} onChange={(e) => { setWifiName(e.target.value) }} />
                <label>Encryption</label>
                <select name="encryption" onChange={(e) => { setEncryption(e.target.value) }}>
                    <option data-type="WEP" value="WEP">WEP</option>
                    <option data-type="WPA/WPA2" value="WPA/WPA2">WPA/WPA2</option>
                    <option data-type="No encryption" value="No encryption">No encryption</option>
                </select>
                <label> Password</label>
                <input type='text' placeholder={`Enter Password...`} onChange={(e) => { setPassword(e.target.value) }} />
                <label> WiFi is hidden</label>
                <select name="hidden" onChange={(e) => { setWifiHidden(e.target.value) }}>
                    <option data-type="Yes" value="Yes">Yes</option>
                    <option data-type="No" value="No">No</option>
                </select>
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

