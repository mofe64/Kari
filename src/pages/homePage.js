import '../css/homePage.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../assets/HomePageComp.svg';

const Home = function () {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='main-left'>
                    <h1>Helping You Invest Towards a Better Future</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br/>
                        Suspendisse sed erat vitae dolor pharetra finibus. Suspendisse .
                    </p>
                    <div className='cta'>
                        <button>
                            <a href="/register/investor">Become an investor</a>
                        </button>
                        <button>
                            <a href="/register/trader">Register as a trader</a>
                        </button>
                    </div>
                </div>
                <div className='main-right'>
                    <img
                        src={Hero}
                        alt='Hero Icon'
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;