// Right content block: product details with right-aligned media/text.

export default function RightSection({
    imgUrl,
    title,
    description,
    link,
    linkTxt,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="d-flex justify-content-between my-4">
                        <a href="" >{linkTxt} <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col p-5">
                    <img src={imgUrl} alt="Product Imge" className="w-100" />
                </div>
            </div>
        </div>
    )
}