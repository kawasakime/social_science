import React from "react";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { galleryImages } from "../data/site";

const Gallery = () => {
  const [active, setActive] = React.useState(0);
  const activeImage = galleryImages[active];
  const previewImages = getPreviewImages(active);

  function showPrevious() {
    setActive((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }

  function showNext() {
    setActive((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  }

  return (
    <section id="gallery">
      <div className="wrapper">
        <h1>фотогалерея</h1>
        <div className="container" tabIndex={0} onKeyDown={handleKeyDown}>
          <div className="gallery-viewer">
            <div
              key={activeImage.src}
              className="gallery-viewer__image"
              role="img"
              aria-label={activeImage.alt}
              style={{ backgroundImage: `url(${activeImage.src})` }}
            />
          </div>
          <div className="btns">
            <button type="button" onClick={showPrevious} aria-label="Предыдущее фото">
              <GrLinkPrevious />
            </button>
            <span>
              {active + 1} / {galleryImages.length}
            </span>
            <button type="button" onClick={showNext} aria-label="Следующее фото">
              <GrLinkNext />
            </button>
          </div>
          <div className="gallery-preview" aria-label="Ближайшие фотографии">
            {previewImages.map(({ item, index }) => (
              <button
                key={item.src}
                type="button"
                className={active === index ? "active" : undefined}
                onClick={() => setActive(index)}
                aria-label={`Открыть фото ${index + 1}`}
              >
                <img src={item.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getPreviewImages(active: number) {
  const offsets = [-2, -1, 0, 1, 2];

  return offsets.map((offset) => {
    const index = (active + offset + galleryImages.length) % galleryImages.length;

    return {
      item: galleryImages[index],
      index,
    };
  });
}

export default Gallery;
