import Investor from '../components/registerInvestor';
import Student from '../components/registerStudent';
import Trader from '../components/registerTrader';

const Register = ({ match }) => {
    if (match.params.userType === 'investor') {
        return <Investor/>
    } else if (match.params.userType === 'student') {
        return <Student/>
    } else {
        return <Trader/>
    }
}
    
    

export default Register;