import Header from '../components/header';
import Footer from '../components/footer';
import '../css/registerMenu.css';
import MenuHeroImage from '../assets/menu-hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const HowToRegisterMenu = function () {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }
    return (
        <div className='container'>
            <Header />
            <div className='menu'>
                <div className='menu-left'>
                    <div className='menu-left-top'>
                        <h1>How to Register</h1>
                        <button onClick = {handleClick}>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </button>
                    </div>
                    <div className='menu-dropdown' style={
                        (clicked)? {visibility: 'visible'}: { visibility: "hidden"}
                    }>
                        <div> <a href='/register/investor'> Register as an investor</a> </div>
                        <div><a href='/register/trader'> Register as a trader</a> </div>
                        <div><a href='/register/student'> Register as a student</a> </div>
                    </div>

                </div>
                <div className='menu-right'>
                    <img src={ MenuHeroImage} alt="menu hero"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HowToRegisterMenu;