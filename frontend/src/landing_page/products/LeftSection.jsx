// Left content block: product details with left-aligned media/text.

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
                        <a href={link1 || '#/products'} target={link1 ? '_blank' : undefined} rel={link1 ? 'noreferrer' : undefined}>{link1Txt} <i className="fa-solid fa-arrow-right-long"></i></a>
                        }

                        { link2Txt &&
                        <a href={link2 || '#/products'} target={link2 ? '_blank' : undefined} rel={link2 ? 'noreferrer' : undefined}>{link2Txt} <i className="fa-solid fa-arrow-right-long"></i></a>
                        }
                        
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                            <img src="media/images/googlePlayBadge.svg" alt="Goole play store" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                            <img src="media/images/appstoreBadge.svg" alt="App Store"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
