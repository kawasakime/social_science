import React from "react";

interface Props {
  style: React.CSSProperties;
  number: string;
  last: boolean;
}

const SectionsDesignationItem = ({ style, number, last }: Props) => {
  return (
    <div className="designation" style={style}>
      <div className="number">{number}</div>
      {!last && <div className="line"></div>}
    </div>
  );
};

export default SectionsDesignationItem;
