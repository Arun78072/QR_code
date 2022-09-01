import React, { useState } from 'react'
import QrCode from './QrCodeBox';
export default function Crypto() {
    const [coin, setCoin] = useState('')
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')



    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue('');
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Type</label>
                <select name="coin" onChange={(e) => { setCoin(e.target.value) }}>
                    <option data-type="BTC" value="BTC">Bitcoin BTC</option>
                    <option data-type="ETH" value="ETH">Ethereum ETH</option>
                    <option data-type="EGLD" value="EGLD">Elrond EGLD</option>
                </select>
                <label>Address</label>
                <input type='text' placeholder={`Enter Address...`} onChange={(e) => { setAddress(e.target.value) }} />
                <label>Currency code</label>
                <input type='number' placeholder={`Enter Price...`} onChange={(e) => { setAmount(e.target.value) }} />
                <label>Thank you URL</label>

                <button onClick={codeGenerate} className='submit_btn'>Generate QR code</button>

            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

