import { HiOutlinePlusSm } from "react-icons/hi";
import "./Box.css"
const Box = ({icons, text, des, color}) => {
    return ( 
        <div className="box" style={{backgroundColor: `${color}`}}>
            {icons}
            <h2>{text}</h2>
            <p>{des}</p>
        </div>
     );
}
 
export default Box;