import React from "react";
import useFetch from "../hook/loading.js";

const ErrorBox =()=> {
    const {error} = useFetch()
    return (
        <div>
        {
            !error &&
        <div className={"border border-red-700 bg-red-200 p-3 rounded-md  text-center"}>Can't Retrive Data</div>
         }
        </div>
)

}
export default ErrorBox;