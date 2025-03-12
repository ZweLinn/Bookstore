import axios from 'axios'
import BackButton from "../component/home/BackButton.jsx";
import {useParams, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import BookTable from "../component/home/BookTable.jsx";
import Spinner from "../component/spinner.jsx";
import ErrorBox from "../component/ErrorBox.jsx";


const DeleteBook= () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [deleteBook , setDeleteBook] = useState(false);
    const  [error,setError] = useState(false);

    async function deleteHandler(){
        try {
            await axios.delete(`http://localhost:5000/books/${id}`)
                .then(() => {
                    setLoading(false);
                    setDeleteBook(true)
                    navigate('/')
                })
        }
        catch (error) {
            setLoading(true)
            setError(true)
            console.log(error);

        }
    }
    

    return (
        <div>
            <BackButton/>
            <div className={"g-FontHeader text-4xl p-4"}>Delete Book</div>
            {
                !loading && <div
                    className={"border border-blue-700   items-center  p-4 mx-auto rounded-md my-14 w-96 text-center "}>

                    <div className={"g-Font text-4xl p-4  "}>Are You Sure to Want to delete this book?</div>

                    <button className={"m-4 border border-red-800 bg-red-600 w-80"} onClick={deleteHandler}>
                        Yes
                    </button>
                </div>
            }
            {
                loading && error && <Spinner/>
            }
            {
                error && <div className={'border border-red-700 bg-red-200 p-3 rounded-md  text-center'}> Connection Error</div>
            }

        </div>
    )
}
export default DeleteBook;