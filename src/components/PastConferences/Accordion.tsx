import React from "react";

interface Props {
  title: string;
  text: string;
}

const Accordion = ({ title, text }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const panelId = React.useId();

  function handlerClickAccordion() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`accordion${isOpen ? " active" : ""}`}>
      <button
        className="accordion__button"
        onClick={handlerClickAccordion}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{title}</span>
      </button>
      <div id={panelId} className="accordion__panel">
        <div className="accordion__content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
