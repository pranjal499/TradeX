export default function LeftSection({
    imgUrl,
    title,
    description,
    link1,
    link1Txt,
    link2,
    link2Txt,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={imgUrl} alt="Product Imge" className="w-100"/>
                </div>
                <div className="col p-5">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="d-flex justify-content-between my-4">
                        {link1Txt &&
                        <a href="" >{link1Txt} <i class="fa-solid fa-arrow-right-long"></i></a>
                        }

                        { link2Txt &&
                        <a href="" >{link2Txt} <i class="fa-solid fa-arrow-right-long"></i></a>
                        }
                        
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href="" >
                            <img src="media/images/googlePlayBadge.svg" alt="Goole play store" />
                        </a>
                        <a href="" >
                            <img src="media/images/appstoreBadge.svg" alt="App Store"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}