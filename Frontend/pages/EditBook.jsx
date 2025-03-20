import axios     from "axios";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import BackButton from "../component/home/BackButton.jsx";
import * as PropTypes from "prop-types";
import BookForm from "../component/CreateBook/CreateBookForm.jsx";
import Spinner from "../component/spinner.jsx";


BookForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    value1: PropTypes.string,
    onChange1: PropTypes.func,
    value2: PropTypes.string,
    onChange2: PropTypes.func,
    onClick: PropTypes.func
};
const EditBook = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [bookErr , setBookErr] = useState(false);
    const {id} = useParams();

    async function getEditBook(){
        await  axios.get(`http://localhost:5000/books/${id}`)
            .then((response) => {
                setTitle(response.data.data.title);
                setAuthor(response.data.data.author);
                setPublishYear(response.data.data.publishYear);
            })
            .catch(err=>{
                console.log(err);
                alert("An error occurred.Please check console");
            })
    }

    useEffect(() => {
        getEditBook()
    }, []);




    async function handleEditBook(){
        const data = {
            title,
            author,
            publishYear,
        }

        if(title === "" || author === "" || publishYear === ""){
            setBookErr(true)
        }
        else {
            try{
                await   axios.put(`http://localhost:5000/books/${id}`, data)
                    .then(()=>{
                        setLoading(false);
                        navigate('/')
                    })
            }
            catch (e) {
                setLoading(false);
                alert("An error occurred.Check console");
                console.log("error",e)

            }
        }
    }


    return (
        <div>
            <BackButton/>
            <div className={"g-FontHeader text-4xl p-4"}>Edit Book</div>

            {
                bookErr &&
                <div className={"border border-red-700 bg-red-200 p-4 mx-auto rounded-md mb-2 w-80 text-center"}>Fill Book Formation</div>
            }
            <BookForm value={title} onChange={e => setTitle(e.target.value)} value1={author}
                      onChange1={e => setAuthor(e.target.value)} value2={publishYear}
                      onChange2={e => setPublishYear(e.target.value)} onClick={handleEditBook}/>



        </div>
    )
}
export default EditBook;