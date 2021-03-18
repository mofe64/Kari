import '../css/footer.css';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';

const Footer = () =>
    <div className='links-section'>
        <div className='icons'>
            <img src={twitterIcon}  alt='twitter icon'/>
            <img src={facebookIcon}  alt='facebook icon'/>
            <img src={instagramIcon} alt='instagram icon'/>
        </div>
        <div className='meta'>
            <p> &#169; 2020 All Rights Reserved</p>
                <a href="/">TERMS AND CONDITIONS</a>
                <a href="/">PRIVACY POLICY</a>
                <a href="/">COOKIE POLICY</a>
        </div>
    </div>

export default Footer;