/*global chrome*/
import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import { FiDownload } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
export default function SiteUrl() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    // const [urlValue, setUrlValue] = useState(chrome.tabs)
    const codeGenerate = () => {
        setCodeValue(value);
    }

    // function getCurrentTabUrl(callback) {
    //     var queryInfo = {
    //         active: true,
    //         currentWindow: true
    //     };

    //     chrome.tabs.getAll(queryInfo, function (tabs) {
    //         var tab = tabs[0];
    //         var url = tab.url;
    //         callback(url);
    //     });
    // }

    // function renderURL(statusText) {
    //     // document.getElementById('status').textContent = statusText;
    //     console.log('-+-+-+-+-+', statusText)
    //     setUrlValue(statusText)
    // }

    // useEffect(() => {
        

    //     document.addEventListener('DOMContentLoaded', function () {
    //         getCurrentTabUrl(function (url) {
    //             renderURL(url);
    //         });
    //     });
    // }, [])




    // chrome.cookies.getAll({
    //     domain: ".youtube.com"
    //     }, function (cookies) {
    //     for (var i = 0; i < cookies.length; i++) {
    //     console.log(cookies[i] + "deleted");
    //     chrome.cookies.remove({
    //     url: "https://" + cookies[i].domain + cookies[i].path,
    //     name: cookies[i].name
    //     });
    //     }
    //     });



    return (
        <section className='form_section'>

{/* <button onClick={getCurrentTabUrl}>get url</button> */}

{/* <h1>urlValue{urlValue}</h1> */}
            <div className='form_box'>
                <label>Enter Url</label>
                <input type='url' placeholder={`https://url.com`} onChange={(e) => { setValue(e.target.value) }} />
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
