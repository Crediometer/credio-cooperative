import styles from './Registration.module.css';
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import styles3 from '../../pages/Activate/Activate.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Verification = ({next, data}) => {
    const options = [{name:'name'},{name:'games'}]
    return ( 
        <form>
            <p className="businessHead">Note: Here is your login in details into modex cooperative, please keep safe and secure </p>
            <div className="login-details">
                <p className="login-head">Username: </p>
                <p className="login-body">{data?.email}</p>
            </div>
            <div className="login-details">
                <p className="login-head">Password: </p>
                <p className="login-body">{data?.password}</p>
            </div>
            <Link to='/dashboard'>
                <button className={styles3.activateButton}>
                    DONE
                </button>
            </Link>
           
    </form>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        loading:state.register.loading,
        error:state?.register?.error,
        data: state?.register?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Verification);