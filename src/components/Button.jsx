import { Link } from 'react-router-dom';

const Button = () => {
    return (
            <Link to="#" className="bg-[#316BE7] text-2xl flex items-center px-12 w-max py-4 text-center text-white 
            font-bold rounded-xl max-[550px]:text-xl">
                Try Now
            </Link>
    )
};

export default Button;