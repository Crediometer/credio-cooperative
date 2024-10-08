import "./Modal.css"
import { FaCheck, FaSadTear, FaSmile } from "react-icons/fa";
import LottieAnimation from "../../Lotties";
// import loader from '../../Assets/animations/preloader.json'
import success from '../../Assets/icon-success.png'
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
// import wrong from '../../Assets/animations/Errorr.json'
const LoanModal = ({data, togglemodal, type}) => {
    const [downloading, setDownloading] = useState(false); 
    const pdfRef = useRef()
    console.log(data)
    const downloadPdf = ()=>{
        setDownloading(true)
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio)/2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

            // if (logoImage) {
            //     const logoWidth = 10; // Adjust the size of the logo as needed
            //     const logoHeight = (logoWidth * logoImage.height) / logoImage.width;
            //     pdf.addImage(logoImage, "PNG", (pdfWidth - logoWidth) / 2, imgY, logoWidth, logoHeight);
            // }

            pdf.save('Invoice.pdf')
            setDownloading(false)
        })
    }
    // const isSuccessCode =
    // data.responseCode === "00" ||
    // data.responseCode === "10" ||
    // data.responseCode === "11" ||
    // data.responseCode === "16";
    return ( 
        <div className="successmodal">
            <div className="modal-background">
                <div className="receipt-modal" ref={pdfRef} style={{height: "70vh"}}>
                    {/* {isSuccessCode ? ( */}
                    <div className="receipt-top">
                        <img src={success}></img>
                        <p className="credio">Credio</p>
                        <p className="success-text">{type} Profile Created Successfully</p>
                        <p className="receipt-date-time"></p>
                    </div>
                    <div className="receipt-body">
                        <div className="receipt-con">
                            <h5 className="con-head">
                                {type} Info
                            </h5>
                            <div className="receipt-content">
                                <p className="receipt-title">Interest Rate:</p>
                                <p className="receip-cont">{data.interestRate}%</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Amount:</p>
                                <p className="receip-cont">N{data.amount}</p>
                            </div>
                        </div>
                        <div className="receipt-con">
                            <div className="receipt-content">
                                <p className="receipt-title">interval:</p>
                                <p className="receip-cont">{data.interval==5 ? "5 Days" : data.interval==7 ? "7 Days" :  data.interval==15 ? "Biweekly" : "Monthly"}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Purpose:</p>
                                <p className="receip-cont">{data.purpose}</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Monthly Payment:</p>
                                <p className="receip-cont">N{data.monthlyPayment}</p>
                            </div>
                        </div>
                    </div>
                    <div className="save-con">
                        <div style={{width: "100%"}}>
                            <button onClick={togglemodal}>
                                Exit
                            </button>
                        </div>
                        {/* <button onClick={downloadPdf} disabled={downloading}>
                            {downloading ? "Downloading..." : "Download"}
                        </button> */}
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default LoanModal;