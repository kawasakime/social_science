import React from "react";

const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handlerClickAccordion(e) {
    e.target.classList.toggle("active");
    setIsOpen((prev) => !prev);
  }

  const panelStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="accordion">
      <button className="accordion__button" onClick={handlerClickAccordion}>
        {title}
      </button>
      <div className="accordion__panel" style={panelStyle}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Accordion;
