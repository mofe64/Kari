import Header from './header';
import Footer from './footer';
import Button from '../components/button';
import '../css/investorRegister.css';

const Investor = () =>
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
                <Button text="Register Now" extrastyles={{ padding: '10px 27px' } }/>
            </div>
            <div className='investor-main-right'>

            </div>
        </div>
        <Footer/>
    </div>

export default Investor;