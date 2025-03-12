import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import React from "react";


export default function BookCard({data}) {
    return(
        <div className={'grid max-sm:grid-cols-1  max-md:grid-cols-3 grid-cols-4  gap-4  '}>
            {
                data.map((book , index) => (
                    <div key={book.id || index} className={"border border-slate-700 rounded-md p-3 g-Font text-2xl"}>
                        <div> Title : {book.title }</div>
                        <div> Author : {book.author}</div>
                        <div> Publish Year : {book.publishYear}</div>
                        <div className={"flex justify-between items-center mt-6"}>
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle className={"text-green-600 text-2xl"}></BsInfoCircle>
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineEdit className={"text-violet-700 text-2xl"}></AiOutlineEdit>
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete className={"text-red-600 text-2xl"}></MdOutlineDelete>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};