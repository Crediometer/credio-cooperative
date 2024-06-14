import { IoIosStats } from "react-icons/io";
import "./Card.css";
const Card = ({name, value}) => {
    return ( 
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
     );
}
 
export default Card;