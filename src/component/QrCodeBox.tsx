import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { HiArrowCircleDown } from 'react-icons/hi';
function QrCode({ value }: Props) {
    const [valuess, setValuess] = useState(value)
    const downloadQR = () => {
        const canvas = document.getElementById("QR-code") as HTMLCanvasElement;
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "QR-code.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (
        <div className="code_box">
            <div>
                <QRCode
                    id="QR-code"
                    value={value}
                    size={247}
                    level={"H"}
                    includeMargin={true}
                />
                <div className='action_btn'>
                    <button onClick={downloadQR} className='submit_btn'><span><HiArrowCircleDown /></span>Download</button>
                </div>

            </div>
        </div>
    );
}

export default QrCode;
type Props = {
    value: string;
}