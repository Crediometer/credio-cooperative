import { IoIosStats } from "react-icons/io";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({name, value, link}) => {
    return ( 
        <Link to={link}>
            <div className="card">
                <div className="card-description">
                    <div className="card-icon">
                        <IoIosStats />
                    </div>
                    <p className="card-topic">{name}</p>
                </div>
                <div className="card-body-2">
                    <h4>{value}</h4>
                </div>
            </div>
        </Link>
     );
}
 
export default Card;