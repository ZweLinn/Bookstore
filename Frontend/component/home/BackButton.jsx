import {Link} from "react-router-dom";
import{BsArrowLeft} from "react-icons/bs";

const BackButton = ({destination = "/"}) => {
    return(<div className="flex items-center  p-4 ">
        <Link to={destination}>
            <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 active:scale-95">
                <BsArrowLeft></BsArrowLeft>
            </button>
        </Link>

    </div>)
}

export default BackButton;