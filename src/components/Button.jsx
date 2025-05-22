import { Link } from 'react-router-dom';

const Button = ({ children, onClick, className = "", disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-[#316BE7] text-2xl flex items-center px-12 py-4 text-white 
                font-bold rounded-xl max-[550px]:text-xl w-max text-center
                transition duration-300 ${
                    disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-700"
                } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
