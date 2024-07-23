function BlogCTA(props) {
    const { image, altText, title, description, linkUrl, linkLabel, linkTitle } = props;

    return (
        <div className="blog-call-to-action large clearfix">
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

                <a
                    href={linkUrl}
                    className="btn large-btn-dark"
                    aria-label={linkLabel}
                    title={linkTitle}
                >
                    {linkLabel}
                </a>
            </div>
        </div>
    );
}

export default BlogCTA;
