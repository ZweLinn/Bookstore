import React from "react";

function BookForm(props) {
    return <div className="flex items-center justify-center  ">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Book Information</h2>

            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input type="text"
                       id="title"
                       name="title"
                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                       value={props.value}
                       onChange={props.onChange}/>
            </div>

            <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700">Author</label>
                <input type="text"
                       id="author"
                       name="author"
                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                       value={props.value1}
                       onChange={props.onChange1}/>
            </div>

            <div className="mb-4">
                <label htmlFor="publish-year" className="block text-gray-700">Publish Year</label>
                <input type="number"
                       id="publish-year"
                       name="publish-year"
                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                       value={props.value2}
                       onChange={props.onChange2}/>
            </div>

            <button type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={props.onClick}>Save
            </button>
        </div>

    </div>;
}

export default BookForm