import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { FiDownload } from 'react-icons/fi';
import { GrDocumentPdf } from 'react-icons/gr';
function ScanBox({ value }: Props) {
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
                    size={220}
                    level={"H"}
                    includeMargin={true}
                />
                <div className='action_btn'>
                    {/* <button><span><GrDocumentPdf /></span> Print</button> */}
                    <button onClick={downloadQR}><span><FiDownload /></span>Download</button>
                </div>
                {/* <p className='message'>These stunts are performed by trained professionals, don't try this at home..</p> */}
            </div>
        </div>
    );
}

export default ScanBox;
type Props = {
    value: string;
}