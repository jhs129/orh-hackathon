function TaxonomyTags(props) {
    return (
        <div className="taxonomy-tags">
        {
          props?.taxonomies?.map((category) => {
            return (
              <span className="uppercase" key={category}>
                <a href="#">{category}&nbsp;</a>
              </span>
            );
          })
        }
    </div>
    );
};

export default TaxonomyTags;