import React, { useState } from 'react'
import QrCode from './QrCodeBox';
export default function Wifi() {
    const [wifiName, setWifiName] = useState('')
    const [encryption, setEncryption] = useState('WEP')
    const [password, setPassword] = useState('')
    const [wifiHidden, setWifiHidden] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(`WIFI:S:${wifiName};T:${encryption};P:${password};${wifiHidden === 'true' ? 'H:1;' : ''};`);
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>WiFi name (SSID)</label>
                <input type='text' placeholder={`Enter WiFi name...`} onChange={(e) => { setWifiName(e.target.value) }} />
                <label>Encryption</label>
                <select name="encryption" onChange={(e) => { setEncryption(e.target.value) }}>
                    <option data-type="WEP" value="WEP">WEP</option>
                    <option data-type="WPA" value="WPA">WPA/WPA2</option>
                    <option data-type="nopass" value="nopass">No encryption</option>
                </select>
                <label> Password</label>
                <input type='text' placeholder={`Enter Password...`} onChange={(e) => { setPassword(e.target.value) }} />
                <label> WiFi is hidden</label>
                <select name="hidden" onChange={(e) => { setWifiHidden(e.target.value) }}>
                    <option data-type="true" value="true">Yes</option>
                    <option data-type="false" value="false">No</option>
                </select>
                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>
            </div>
            <QrCode value={codeValue} />
        </section>
    )
}








