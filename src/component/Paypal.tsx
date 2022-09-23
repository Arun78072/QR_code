import React, { useState } from 'react'
import QrCode from './QrCodeBox';
import { HiArrowCircleRight } from 'react-icons/hi'
export default function Paypal() {
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [currencyCode, setCurrencyCode] = useState('')
    const [price, setPrice] = useState('')
    const [thankuYou, setThankuYou] = useState('')
    const [cancleYou, setCancleYou] = useState('')


    const [codeValue, setCodeValue] = useState('')
    const codeGenerate = () => {
        setCodeValue('');
    }
    return (
        <section className='form_section'>
            <div className='form_box'>
                <label>Type</label>
                <select name="encryption" onChange={(e) => { setType(e.target.value) }}>
                    <option data-type="Buy now" value="Buy now">Buy now</option>
                    <option data-type="Add to cart" value="Add to cart">Add to cart</option>
                    <option data-type="Donation" value="Donation">Donation</option>
                </select>
                <label>PayPal email</label>
                <input type='email' placeholder={`Enter email @...`} onChange={(e) => { setEmail(e.target.value) }} />
                <label> Product title</label>
                <input type='text' placeholder={`Enter title...`} onChange={(e) => { setTitle(e.target.value) }} />
                <label>Currency code</label>
                <input type='text' placeholder={`Enter Currency CODE...`} onChange={(e) => { setCurrencyCode(e.target.value) }} />
                <label>Price</label>
                <input type='number' placeholder={`Enter Price...`} onChange={(e) => { setPrice(e.target.value) }} />
                <label>Thank you URL</label>
                <input type='url' placeholder={`Enter URL...`} onChange={(e) => { setThankuYou(e.target.value) }} />
                <label>Cancel URL</label>
                <input type='url' placeholder={`Enter URL...`} onChange={(e) => { setCancleYou(e.target.value) }} />

                <button onClick={codeGenerate} className='submit_btn'><HiArrowCircleRight />Generate QR</button>

            </div>
            <QrCode value={codeValue} />
        </section>
    )
}

