import "./Member.css"
import member from '../../Assets/amicoget_started.png'
import { Link } from "react-router-dom";
const Member = () => {
    return ( 
        <div className="admin-outer">
            <div className="admin-inner">
                <div className="member-img">
                    <img src={member}></img>
                </div>
                <h1 className="ready">Ready to get started!</h1>
                <p className="ready-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod eiusmod </p>
                <div className=" buttons buttons-2">
                    <Link to="/join"><button>GET STARTED</button></Link> 
                </div>
            </div>
        </div>
    );
}
 
export default Member;