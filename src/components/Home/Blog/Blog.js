import React from "react";
import Button from "components/Button/Button";
import TitleSection from "components/TitleSection/TitleSection";
import { data } from "data/data.json";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <TitleSection
          center="true"
          title="Nuestro"
          titleCaption="Blog"
          subtitle="Revisa nuestros ultimos Articulos"
        />
        <div className="blog-items">
          {data[2].blog.map((item, key) => (
            <div
              className="blog-item"
              key={key}
              initial={{ y: 200 }}
              animate={{ y: 0 }}
            >
              <div className="blog-image">
                <img src={`images/${item.image}`} />
              </div>
              <div className="blog-content">
                <div className="blog-top">
                  <p className="blog-date">{item.date}</p>
                  <p className="blog-comment">
                    <i className="fa fa-comment" /> 21
                  </p>
                </div>
                <a className="blog-title">{item.title}</a>
                <a className="blog-more">Leer Mas</a>
              </div>
            </div>
          ))}
        </div>
        <Button label="Ver Mas" className="button-primary" />
      </div>
    </div>
  );
};

export default Blog;
