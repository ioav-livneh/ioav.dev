import React from "react";
import "./NewLines.css";

function NewLines({ lines, style }) {
  console.log(style);
  return (
    <div className={"NewLines"}>
      {lines.map((line) => (
        <p className={style}>{line}</p>
      ))}
    </div>
  );
}

export default NewLines;
