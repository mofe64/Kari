import '../css/button.css';

const Button = ({ text, extrastyles={}, functionToExecute=(f)=>f }) =>
    <button
        className="btn"
        style={extrastyles}
        onClick={functionToExecute}>
        {text}
    </button>

export default Button;