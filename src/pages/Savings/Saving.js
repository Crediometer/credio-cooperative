import "./Saving.css"
import { BiArrowBack, BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import Graph from "../../components/Graph/Graph";
import { useState } from "react";
const Saving = () => {
    const [number, setNumber] = useState(1)
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Coop Savings</p>
            </div>
            <div className="saving-graph">
                <div className="graph-top">
                    <p>Overview</p>
                    <div className="graph-sort">
                        <p>Sort</p>     
                    </div>
                </div>
                <div className="graph-body">
                    <Graph/>
                </div>
            </div>
            <div className="saving-filter">
                <div className="filter-nav">
                    <p className={(number===1) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(1)}}>Ongoing</p>
                    <p className={(number===2) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(2)}}>Pending</p>
                    <p className={(number===3) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(3)}}>Completed</p>
                </div>
                <div className="saving-card">
                    <div className="saving-card-top">
                        <p className="card-name"><Link to="/saving-details">Modex Weekly Savings</Link></p>
                        <div className="card-range">
                            <input type="range"></input>
                        </div>
                    </div>
                    <div className="saving-card-body">
                        <div className="card-section">
                            <h4>20</h4>
                            <p>Members</p>
                        </div>
                        <div className="card-section">
                            <h4>N20,000</h4>
                            <p>Each Members</p>
                        </div>
                        <div className="card-section">
                            <h4>N400,000</h4>
                            <p>Amount Saved</p>
                        </div>
                        <div className="card-section">
                            <h4>30</h4>
                            <p>Weeks</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default Saving;
