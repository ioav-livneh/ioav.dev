import React from "react";
import "./NewLines.css";

function NewLines({ lines, type }) {
  React.useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight);
  });

  return (
    <div className={"NewLines"}>
      {lines.map((line) => (
        <p className={type} key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default NewLines;
