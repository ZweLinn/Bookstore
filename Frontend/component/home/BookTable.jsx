import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";
import React from "react";

export  default function BookTable({data}) {
    return (
        <table className="w-full border-separate border-spacing-2">
        <thead>
        <tr>
            <th className={"g-FontHeader text-4xl max-sm:text-2xl  border border-slate-700 rounded-md"}>No.</th>
            <th className={"g-FontHeader text-4xl max-sm:text-2xl border border-slate-700 rounded-md"}>Title</th>
            <th className={"g-FontHeader text-4xl max-sm:text-2xl border border-slate-700 rounded-md max-md:hidden"}> Author</th>
            <th className={"g-FontHeader text-4xl max-sm:text-2xl border border-slate-700 rounded-md max-md:hidden"}> Publish
                Year
            </th>
            <th className={"g-FontHeader text-2xl max-sm:text-2xl border border-slate-700 rounded-md "}> Operation</th>
        </tr>
        </thead>
    <tbody>
    {
        data.map((book, index) => (
                <tr key={data.id || index}>
                    <td className={"g-Font text-2xl max-sm:text-1xl border border-slate-600 rounded-md text-center"}>{index + 1}</td>
                    <td className={"g-Font text-2xl max-sm:text-1xl border border-slate-600 rounded-md text-center"}>{book.title}</td>
                    <td className={"g-Font text-2xl  max-sm:text-1xl  border border-slate-600 rounded-md text-center max-md:hidden"}>{book.author}</td>
                    <td className={"g-Font text-2xl max-sm:text-1xl  border border-slate-600 rounded-md text-center max-md:hidden"}>{book.publishYear}</td>

                    <td className={"g-Font border border-slate-600 rounded-md text-center "}>{
                                    <div className={"flex justify-center gap-4 text-2xl max-sm:text-1xl "}>
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
                                }</td>
                            </tr>
                        )
                    )
                }
                </tbody>
        </table>
    )
}