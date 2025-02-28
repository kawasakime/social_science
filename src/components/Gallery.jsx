import React from "react";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Gallery = () => {
  const [active, setActive] = React.useState(0);

  const emptyArray = [...Array(54)]

  return (
    <section id="gallery">
      <div className="wrapper">
        <h1>фотогалерея</h1>
        <div className="container">
          
          {emptyArray.map((_, i) => (
            <img
            key={i}
            style={{height: 500}}
            className={active === i ? "active" : undefined}
            src={`./assets/img/gallery/${i + 1}.webp`}
            alt=""
            />
          ))}
          <div className="btns">
            <GrLinkPrevious
              onClick={() =>
                active !== 0 ? setActive((prev) => {
                  const newValue = prev - 1;

                  return newValue === 1 ? 0 : newValue
                }) : setActive(emptyArray.length - 1)
              }
            />
            <GrLinkNext
              onClick={() =>
                active !== emptyArray.length - 1 ? setActive((prev) => {
                  const newValue = prev + 1;

                  return newValue === 1 ? 2 : newValue
                }) : setActive(0)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
