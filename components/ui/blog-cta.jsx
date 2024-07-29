function BlogCTA(props) {
    const { image, altText, title, description, linkUrl, linkLabel, linkTitle } = props;

    return (
        <div className="flex flex-col md:flex-row gap-2 border-t-2 border-b-2 p-2 m-2">
            <div className="blog-cta-image-wrapper">
                <a href={linkUrl}>
                    <img
                        src={image}
                        alt={altText}
                        className="blog-cta-image"
                    />
                </a>
            </div>

            <div className="blog-cta-info">
                <h3 className="blog-cta-title">{title}</h3>
                <p>{description}</p>
                <div className="w-80 rounded-xl bg-primaryAccent text-white px-4 py-2">
                <a
                    href={linkUrl}
                    className="rounded-xl w-80 bg-primaryAccent text-white px-4 py-2"
                    aria-label={linkLabel}
                    title={linkTitle}
                >
                    {linkLabel} &gt;
                </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCTA;
