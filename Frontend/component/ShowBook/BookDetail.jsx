const BookDetail = ({data, id}) => {
    return (

        <div key={id} className={"p-4"}>
            <div className={"g-Font text-2xl"}>
                <span> Book ID :</span>
                <span> {data._id}</span>
            </div>
            <div className={"g-Font text-2xl"}>
                <span> Book title :</span>
                <span> {data.title}</span>
            </div>
            <div className={"g-Font text-2xl"}>
                <span> Author :</span>
                <span> {data.author}</span>
            </div>
            <div className={"g-Font text-2xl"}>
                <span> Publih Year :</span>
                <span> {data.publishYear}</span>
            </div>
            <div className={"g-Font text-2xl"}>
                <span> Create at :</span>
                <span>
                        {data?.createdAt ? new Date(data.createdAt).toDateString() : "No Date"}
                    </span>
            </div>
            <div className={"g-Font text-2xl"}>
                <span> Last update at :</span>
                <span>
                        {data?.createdAt ? new Date(data.updatedAt).toDateString() : "No Date"}
                    </span>
            </div>
        </div>
    )
}

export default BookDetail;