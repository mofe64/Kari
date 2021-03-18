import '../css/landingPage.css';
import bgImg from '../assets/lf30_cgthmey3.json].svg';
import Karisoft from '../components/KariSoft';
import logo from '../assets/karisoft white-01 3.svg';
import Footer from '../components/footer';
import { withRouter } from 'react-router-dom'

const Landing = withRouter(({ history }) => {
    return (
        <div className="landingPage" style={{ background: `url(${bgImg}) #0D039C`, backgroundBlendMode: 'lighten', height: '100vh'}}>
            <div className="hero-section">
                <div className="hero-top">
                    <img src={logo}  alt="Kari Logo"/>
                   <Karisoft/>
                </div>
                <div className='hero-bottom'>
                    <button onClick={() => { history.push(`/home`) }}>
                        <Karisoft textSize="text-base"/> Solution
                    </button>
                    <button onClick={ () => { history.push(`/home`) }}>
                        <Karisoft textSize="text-base"/> Finances
                    </button>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
})

export default  Landing;