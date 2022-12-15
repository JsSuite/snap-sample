import React, { PropsWithChildren } from "react";
import styles from "../styles/Button.module.css";

interface Button {
  style?: "bordered" | "filled";
  large?: boolean;
}

const AttributeStyles = {
  bordered: styles.bordered,
  filled: styles.filled,
  default: "",
};

export default function Button(props: PropsWithChildren<Button>) {
  const { children, style = "default", large = false, ...otherProps } = props;
  const attributeStyle = AttributeStyles[style];
  const largeStyle = large ? styles.large : "";

  return (
    <div
      className={styles.button + " " + attributeStyle + " " + largeStyle}
      {...otherProps}
    >
      {props.children}
    </div>
  );
}
