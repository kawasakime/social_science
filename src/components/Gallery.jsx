import React from "react";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Gallery = () => {
  const [active, setActive] = React.useState(0);

  const emptyArray = [...Array(11)]

  return (
    <section id="gallery">
      <div className="wrapper">
        <h1>фотогалерея</h1>
        <div className="container">
          {emptyArray.map((_, i) => (
            <img
              className={active === i ? "active" : undefined}
              src={`./assets/img/gallery/${i + 1}.webp`}
              alt=""
            />
          ))}
          <div className="btns">
            <GrLinkPrevious
              onClick={() =>
                active !== 0 ? setActive((prev) => prev - 1) : setActive(emptyArray.length - 1)
              }
            />
            <GrLinkNext
              onClick={() =>
                active !== emptyArray.length - 1 ? setActive((prev) => prev + 1) : setActive(0)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
