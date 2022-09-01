/*global chrome*/
import React, { useEffect, useState } from 'react'
import QrCode from './QrCodeBox';
export default function SiteUrl() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    // const [url, setUrl] = useState("----");
    const codeGenerate = () => {
        setCodeValue(value);
    }
    /**
     * Get current URL
     */
    useEffect(() => {
      const queryInfo = { active: true, lastFocusedWindow: true };
      chrome.tabs &&
        chrome.tabs.query(queryInfo, (tabs) => {
          const url = tabs[0].url;
          setValue(url);
        });
    }, []);
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Site Url</label>
                <input type='url' placeholder={`https://url.com`} value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>
            </div>
            <QrCode value={codeValue} />
        </section>

    )
}












