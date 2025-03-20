import axios from "axios";
import Spinner   from "../component/spinner.jsx";
import {Link} from "react-router-dom";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import useFetch from "../hook/loading.js";
import React, {useRef, useState , useEffect} from "react";
import "./Books.css"
import BookTable from "../component/home/BookTable.jsx";
import ErrorBox from "../component/ErrorBox.jsx";
import BookCard from "../component/home/BookCard.jsx";



export default function Home(){
    const {data , load , error} = useFetch(`http://localhost:5000/books`)
    const [show, setShow] = useState(localStorage.getItem("viewMode") || "table");

    useEffect(() => {
        localStorage.setItem("viewMode", show);
    }, [show]);
    return(
        <div className={"p-4 "}>

            <div className={"g-Font text-2xl  flex justify-center items-center gap-4 "}>
                <button className={"p-1 bg-sky-400 border rounded-md active:bg-sky-800"} onClick={()=>setShow('table')}>
                    Table
                </button>
                <button className={" p-1 bg-sky-500 border rounded-md active:bg-sky-50" } onClick={()=>setShow('card')}>
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center p-6">
                <h1 className={"text-5xl g-FontHeader "}>
                    Book List
                </h1>
                <Link to="/books/create">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <AiOutlineAppstoreAdd className="text-white text-1xl"/> Add Book
                    </button>
                </Link>
            </div>
            <div className="p-2">
                <div className="Custom_line"></div>
            </div>

            <div className="p-2" >


                {
                        !load && !error &&  show === "table" ? (<BookTable data={data}/> ): (<BookCard data={data}/> )
                }


                {
                    load && !error && <Spinner></Spinner>
                }
                {
                    error && <ErrorBox/>
                }

            </div>
        </div>
    )
}