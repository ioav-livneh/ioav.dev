import React from "react";
import "./NewLines.css";

function NewLines({ lines, type }) {
  React.useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight);
  });

  return (
    <div className={"NewLines"}>
      {lines.map((line) => (
        <p className={`${type} color2`} key={`${line}-${crypto.randomUUID()}`}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default NewLines;
