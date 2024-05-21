import './ProfileForm.css';
import profile from '../../Assets/image.svg';
import {FiEdit2} from 'react-icons/fi'
const ProfileForm = () => {
    return ( 
        <div className="profileform">
            <div className="profile-image">
                <div className='profile-image-inner'>
                <div className="edit-profile">
                    <img src={profile}></img>
                    <div className="edit-icon">
                        <FiEdit2/>
                    </div>
                </div>
                <p>Edit Profile</p>
                </div>
            </div>
            <form>
                <div className="form-5">
                    <div className="profile-name">
                        <label>First name</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>Last name</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Phone number</label><br></br>
                        <input
                        type='tel'
                        placeholder='090xxxx985455'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>E-mail</label><br></br>
                        <input
                        type='email'
                        placeholder='Efahdesmon@gmail.com'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Occuption</label><br></br>
                        <input
                        type='email'
                        placeholder='Teacher'
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Address </label><br></br>
                        <input
                        type='text'
                        placeholder='Alagbaka Extension, Akure, Ondo State'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>state</label><br></br>
                        <input
                        type='text'
                        placeholder='Efua Etimobong'
                        ></input>
                    </div>
                </div>    
                <div className="form-5">
                    <div className="profile-name">
                        <label>Age </label><br></br>
                        <input
                        type='text'
                        placeholder='28'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>State of origin </label><br></br>
                        <input
                        type='text'
                        placeholder='Ondo State'
                        ></input>
                    </div>
                </div>
                <div className="form-6">
                    <div className="profile-other">
                        <label>Gender</label><br></br>
                        <input
                        type='text'
                        placeholder='Male'
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Religion </label><br></br>
                        <input
                        type='text'
                        placeholder='28'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>occupation/Business Address </label><br></br>
                        <input
                        type='text'
                        placeholder='Ondo State'
                        ></input>
                    </div>
                </div>
                <div className="form-5">
                    <div className="profile-name">
                        <label>Next of kin</label><br></br>
                        <input
                        type='text'
                        placeholder='28'
                        ></input>
                    </div>
                    <div className="profile-name">
                        <label>Next of kin address </label><br></br>
                        <input
                        type='text'
                        placeholder='Ondo State'
                        ></input>
                    </div>
                </div>
                <div className="submit-2">
                    <input
                    type='submit'
                    value='Save'
                    ></input>
                </div>
            </form>
        </div>
     );
}
 
export default ProfileForm;