import React, { useState } from 'react'
import QRCode from "react-qr-code";
import styled from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';
export default function InputBox() {
    const [value, setValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const [inputType, setInputType] = useState('text')
    const [dialog, setDialog] = useState(false)
    const [codeBox, setCodeBox] = useState(false)
    const codeGenerate = () => {
        setCodeValue(value);
        setCodeBox(true)
    }

    return (
        <InputSection>
            <div className='buttons'>
                <button onClick={() => { setInputType('text'); setDialog(true) }}>Text</button>
                <button onClick={() => { setInputType('url'); setDialog(true) }}>URL</button>
                <button onClick={() => { setInputType('number'); setDialog(true) }}>Phone</button>
                <button onClick={() => { setInputType('email'); setDialog(true) }}>Email</button>
                <button onClick={() => { setInputType('url'); setDialog(true) }}>Whatsapp</button>
                <button onClick={() => { setInputType('url'); setDialog(true) }}>Location</button>
            </div>
            <div className={dialog ? 'popup open' : 'popup'}>
                <button className='close_btn' onClick={() => { setDialog(false); setCodeBox(false) }}><AiOutlineCloseSquare /></button>
                <div className='input_box'>
                    <input type={inputType} placeholder={`Enter your ${inputType} ...`} onChange={(e) => { setValue(e.target.value) }} />
                    <button onClick={codeGenerate}>Generate QR code</button>
                </div>
                <div className={codeBox ? 'code_box open' : "code_box"}><QRCode value={codeValue} size={120} /></div>
            </div>
        </InputSection >
    )
}
const InputSection = styled.section`
    width: 600px;
    height: 400px;
    padding: 20px;
    position: relative;
    /* background: #cbcbcb; */
    margin: 60px auto;
    overflow: hidden;
    .buttons {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .buttons {
        button {
            padding: 10px 12px;
            border: none;
            font-size: 16px;
            font-weight: 600;
            border-radius: 6px;
            box-shadow: #0000006b 0px 6px 12px -2px, #00000073 0px 3px 7px -3px;
            cursor: pointer;
        }
    }
    .popup {
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(2px);
        bottom: 0px;
        padding: 34px;
        left: 0px;
        box-sizing: border-box;  
        display:none;
        &.open{
            display:block;
        }
        .input_box {
            input {
                width: 82%;
                padding: 12px;
                border-radius: 7px;
                border: none;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
            } 
            button {
                margin: 10px;
                background: white;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                border: none;
                box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
            }
        }
        button.close_btn {
            padding: 0px;
            border: none;
            text-align: right;
            width: 100%;
            background: transparent;
            svg {
                font-size: 26px;
                background: #fff;
                border-radius: 5px;
                padding: 6px;
                cursor: pointer;
                box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
            }
        }
        .code_box {
            margin: 24px;
            opacity: 0;
            transform: translateY(30px);
            transition:all 1s;
        }
        .code_box.open{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    
    
`