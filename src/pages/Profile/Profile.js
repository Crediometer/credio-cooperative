import './Profile.css'
import { Link } from 'react-router-dom';
import {BsChatDots} from 'react-icons/bs';
import {BiTargetLock, BiHelpCircle} from 'react-icons/bi'
import {SiKnowledgebase} from 'react-icons/si';
import {IoMdWallet} from 'react-icons/io';
import {FaUsers, FaMoneyBillAlt} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import ProfileForm from '../../components/Form/ProfileForm';
const Profile = () => {
    return ( 
        <div className="profile saving">
            <div className="home">
                <div className="homeContainer">
                    <div className="body">
                        <div className="profile-outer">
                            <div className="profile-inner">
                                <div className="profile-form">
                                    <ProfileForm/>
                                </div>
                                <div className="profile-sidebar">
                                    <p>Account Information</p>
                                    <form>
                                        <div className="form-6">
                                            <div className="profile-other">
                                                <label>Add Account Number</label><br></br>
                                                <input
                                                type='tel'
                                                placeholder='0000000000'
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="form-6">
                                            <div className="profile-other">
                                                <label>Add Account Name</label><br></br>
                                                <input
                                                type='tel'
                                                placeholder='Ajayiii john'
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="form-6">
                                            <div className="profile-other">
                                                <label>Add Bank Name</label><br></br>
                                                <input
                                                type='tel'
                                                placeholder="abc banks"
                                                ></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;