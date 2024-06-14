import { PiBellSimpleFill, PiSignOut } from "react-icons/pi";
import image from '../../Assets/image.svg'
import Card from "../../components/Card/Card";
import { cardData } from "../../components/datas";
import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";
const AdminProfile = () => {
    const [show, setShow] = useState(false)

    const handleshow =()=>{
        setShow(!show)
    }
    return (    
        <div className="admin-profile dashboard">
            <div className="navbar">
                <div className="wrapper">
                    <div className="navbar-profile">
                        <div className="bell">
                            <PiBellSimpleFill/>
                            <div className="number"><p>2</p></div>
                        </div>
                        <div className='navbar-profile-left' onClick={handleshow}>
                            <div className="user-image">
                                <img src={image}></img>
                            </div>
                            <div className="user-name">
                                <p className='greeting'>Good day</p>
                                <p className='name'>Richard Cooporative Society</p>
                            </div>
                        </div>
                    </div>
                    {show && (
                            <div className="navbar-dropdown">
                                <Link to="/dashboard">
                                    <div className="nav-bar-content">
                                        <RiAdminFill/>
                                        <p>Admin</p>
                                    </div>
                                </Link>
                                <Link to="/admin-profile">
                                    <div className="nav-bar-content">
                                        <CgProfile />
                                        <p>Profile</p>
                                    </div>
                                </Link>
                                <div className="nav-bar-content">
                                    <MdOutlinePermContactCalendar />
                                    <p>Contact Us</p>
                                </div>
                                <div className="nav-bar-content sign-out">
                                    <PiSignOut />
                                    <p>Sign Out</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div className="admin-profile-data">
                {cardData.map(data=>{
                    return(
                        <div className="card-outer">
                            <Card
                                name={data.name}
                                value={data.value}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AdminProfile;