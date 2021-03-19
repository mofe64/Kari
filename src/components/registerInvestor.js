import Header from './header';
import Footer from './footer';
import Button from '../components/button';
import Modal from './modal';
import '../css/investorRegister.css';
import { useState } from 'react';

const Investor = () => {
    const [registerButtonClicked, setRegisterButtonClicked] = useState(false);
    const handleClick = () => {
        if (!registerButtonClicked) {
            setRegisterButtonClicked(true);
            // document.addEventListener('click', closeModal)
        }
    }
    const closeModal = () => {
        setRegisterButtonClicked(false);
    }
    return (
        <div className="bg-img-investor">
        <Header/>
        <div className='investor-main'>
            <div className='investor-main-left'>
                <h1>How to Register</h1>
                <p>As an Investor</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Suspendisse sed erat vitae dolor pharetra finibus.Suspendisse<br />
                    ut pharetra turpis. Praesent justo sapien, dictum in enim at,<br />
                    efficitur imperdiet diam. Aliquam purus magna, iaculis eget <br />
                    tincidunt nec, interdum quis ante. Integer eu ultrices mauris, ac <br />
                    elementum nisi
                </p>
                <Button text="Register Now" extrastyles={{ padding: '10px 27px' }} functionToExecute={ handleClick}/>
            </div>
           
            
                <Modal show={ registerButtonClicked}/>
        </div>
        <Footer/>
    </div>
    )
    
 }

   

export default Investor;