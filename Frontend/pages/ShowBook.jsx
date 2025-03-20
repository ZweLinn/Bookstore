import useFetch from "../hook/loading.js";
import{useParams} from "react-router-dom";
import BackButton from "../component/home/BackButton.jsx";
import BookDetail from "../component/ShowBook/BookDetail.jsx";
import Spinner from "../component/spinner.jsx";
import React from "react";
import ErrorBox from "../component/ErrorBox.jsx";

const ShowBook = () => {
    const {id} = useParams();
   const {data , load , error}=useFetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books/${id}`)

    return (
        <div>
            <BackButton/>
            <div className={"g-FontHeader text-4xl p-4"}>Book's Details</div>

            {
                !load &&  <BookDetail data={data} id={id}/>
            }
            {
                load && !error && <Spinner></Spinner>
            }
            {
                error && <ErrorBox/>
            }
        </div>


    )
}
export default ShowBook;