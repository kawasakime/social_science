import React from "react";

const YMap = () => {
  return (
    <section id="yandex-map">
      <iframe
        title="Карта"
        src="https://www.openstreetmap.org/export/embed.html?bbox=39.7030366%2C47.2140712%2C39.7230366%2C47.2340712&layer=mapnik&marker=47.2240712%2C39.7130366"
        style={{ width: "100%", height: "450px", border: "none" }}
        loading="lazy"
      />
    </section>
  );
};

export default YMap;
