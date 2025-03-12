const Spinner = ()=>{
    return(<div className="flex  justify-center mt-8  ">
                     <div className="flex flex-col items-center space-y-4">

                    <div className="w-16 h-16 border-4 border-slate-900-500 border-dashed rounded-full animate-spin"></div>
                      <p className="text-gray-600">Loading...</p>
             </div>
    </div>)
}

export default Spinner