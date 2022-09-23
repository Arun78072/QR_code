import React, { useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'
import QrCode from './QrCodeBox';
export default function Event() {
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage] = useState('')
    const [startOn, setStartOn] = useState('')
    const [endOn, setEndOn] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue(`BEGIN:VEVENT
SUMMARY:${eventName}
LOCATION:${location}
URL:${url}
DESCRIPTION:${message}
DTSTART;TZID=Indian/Antananarivo:${startOn.split('-').join('').split(':').join('')}00Z
DTEND;TZID=Indian/Antananarivo:${endOn.split('-').join('').split(':').join('')}00Z
END:VEVENT`);
    }

    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Event</label>
                <input type='text' placeholder={`Enter Event name...`} onChange={(e) => { setEventName(e.target.value) }} />
                <label>GEO Location</label>
                <input type='text' placeholder={`Enter Geo location...`} onChange={(e) => { setLocation(e.target.value) }} />
                <label>Event URL</label>
                <input type='text' placeholder={`Enter Event URL...`} onChange={(e) => { setUrl(e.target.value) }} />
                <label>Notes</label>
                <input type='text' placeholder={`Enter Note...`} onChange={(e) => { setMessage(e.target.value) }} />
                <label>Start on </label>
                <input type="datetime-local" onChange={(e) => { setStartOn(e.target.value) }} />
                <label>Start on </label>
                <input type="datetime-local" onChange={(e) => { setEndOn(e.target.value) }} />
                <button onClick={codeGenerate} className='submit_btn'><HiArrowCircleRight />Generate QR</button>
            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

