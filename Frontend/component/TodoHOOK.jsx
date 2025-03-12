import useFetch from "../hook/loading.js";

export default function TodoHookDemo(){
    const {data , load, error} = useFetch('http://localhost:5000/books')
    console.log("data" , data)
    return(<div>
            {
                load && !error && <h3>Loading....</h3>
            }
            {
                !load && data.map((todo) => <div key={todo._id}> {todo.title}</div>)
            }
            {
                error && <h4>Can't retrive Data</h4>
            }

        </div>
    )
}