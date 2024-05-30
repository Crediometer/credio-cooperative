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
const LoanModal = ({data, togglemodal}) => {
    const [downloading, setDownloading] = useState(false); 
    const pdfRef = useRef()
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
                            <h3>Ademola John</h3>
                            <p className="success-text">Loan Profile Created Successfully</p>
                            <p className="receipt-date-time"></p>
                        </div>
                     {/*): (
                        <div className="receipt-top">
                            <LottieAnimation data={wrong}/>
                            <p className="credio">Credio</p>
                            <h3>NGN{(data.amount/ 100).toFixed(2)}</h3>
                            <p className="success-text">Successful transaction</p>
                            <p className="receipt-date-time"></p>
                        </div>
                    )} */}
                    <div className="receipt-body">
                        <div className="receipt-con">
                            <h5 className="con-head">
                                Loan Info
                            </h5>
                            <div className="receipt-content">
                                <p className="receipt-title">Interest Rate:</p>
                                <p className="receip-cont">8%</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Amount:</p>
                                <p className="receip-cont">N1,000,000</p>
                            </div>
                        </div>
                        <div className="receipt-con">
                            <div className="receipt-content">
                                <p className="receipt-title">Duration:</p>
                                <p className="receip-cont">6 Months</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Purpose:</p>
                                <p className="receip-cont">For Tuition</p>
                            </div>
                            <div className="receipt-content">
                                <p className="receipt-title">Monthly Payment:</p>
                                <p className="receip-cont">N100,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="save-con">
                        <Link to="/loans" style={{width: "100%"}}>
                        <button onClick={togglemodal}>
                            Exit
                        </button>
                        </Link>
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