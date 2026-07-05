import React from "react";

import styles from "./Button.module.scss";

interface Props {
  link: string;
  text: string;
}

const Button = ({ link, text }: Props) => {
  return (
    <a href={link} className={styles.btn} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Button;
