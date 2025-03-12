// import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";
//
// export default function usePost(url , title , aurthor , publishYear  ) {
//     console.log("Data" , url , title , aurthor, publishYear)
//
//     const [data , setData] = useState({});
//     const [loading, setLoading] = useState(true);
//
//     const newData = {
//         title,
//         aurthor,
//         publishYear,
//     }
//     setData(newData);
//
//     const  navigate = useNavigate();
// async function postUrl() {
//     try{
//
//         await axios.post(url, data)
//             .then(()=>{
//                     setLoading(false);
//                     navigate('/');
//             }
//
//             )
//         setLoad(false);
//
//     }
//     catch(e){
//         setLoad(false);
//         alert("an error occured. Please check console.");
//         console.log("error" , e)
//     }
//     useEffect(() => {
//         postUrl(url)
//     }, []);
//
//     return {data, loading}
// }
// }
