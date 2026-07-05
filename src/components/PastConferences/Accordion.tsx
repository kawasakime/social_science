import React from "react";

interface Props {
  title: string;
  text: string;
}

const Accordion = ({ title, text }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handlerClickAccordion() {
    setIsOpen((prev) => !prev);
  }

  const panelStyle: React.CSSProperties = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="accordion">
      <button
        className={`accordion__button${isOpen ? " active" : ""}`}
        onClick={handlerClickAccordion}
      >
        {title}
      </button>
      <div className="accordion__panel" style={panelStyle}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Accordion;
