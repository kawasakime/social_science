import React from "react";
import { ArrowRight } from "lucide-react";

import styles from "./Button.module.scss";

interface Props {
  link: string;
  text: string;
}

const Button = ({ link, text }: Props) => {
  return (
    <a href={link} className={styles.btn} target="_blank" rel="noopener noreferrer">
      <span>{text}</span>
      <ArrowRight aria-hidden="true" size={20} strokeWidth={2.2} />
    </a>
  );
};

export default Button;
