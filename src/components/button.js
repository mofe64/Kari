import '../css/button.css';

const Button = ({ text, extrastyles={} }) =>
    <button className="btn" style={extrastyles}>
        {text}
    </button>

export default Button;