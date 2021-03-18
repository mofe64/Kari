import KariLogo from '../assets/Group 6.svg';
import MenuIcon from '../assets/align-justify.svg';

const Header = () =>
    <div className='lg:flex lg:justify-between lg:items-center pt-6'>
        <img src={KariLogo} alt='company logo' />
        <a href='/registerMenu'>
            <img src={MenuIcon} alt='menu icon'/>
        </a>
    </div>

export default Header;