import '../css/modal.css';
import KariLogo from '../assets/Group 6.svg';
import Button from './button';
const Modal = ({show=false}) =>
    <div className="modal" style={(show)?{visibility:'visible'}: {visibility:'hidden'}}>
            <img
                src={KariLogo}
                alt="logo"
                className='logo'
            />
            <h1>Investment Application Form</h1>
        <div className='modal-box' >
            <div className="form-header">
                <h1>Fill the below forms adequately</h1>
                <p>* Required</p>
            </div>
            
            <form className="form">
                <div className='form-title'>
                    <input type='text' placeholder='Title *' required/>
                </div>
                <div className='form-names'>
                    <input type='text' placeholder='Firstname *' required />
                    <input type='text' placeholder='Lastname *' required/>
                </div>
                <div className='form-email-number'>
                    <input type='text' placeholder='Email Address *' required />
                    <input type='text' placeholder='Phone Number *' required/>
                </div>
                <div className='form-dob-house'>
                    <input type='date' placeholder='Date of Birth *' required />
                    <input type='text' placeholder="House number and Street name *" required/>
                </div>
                <div className="buttons">
                    <Button text="BACK" />
                    <Button text="NEXT"/>
                </div>
                </form>
           
        </div>
    </div>

export default Modal;