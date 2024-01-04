import React from "react";
import "./NewLines.css";

function NewLines({ lines, type }) {
  React.useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight);
  });

  return (
    <div className={"NewLines"}>
      {lines.map((line) => (
        <p className={type} key={`${line}-${crypto.randomUUID()}`}>
          {line}
        </p>
      ))}
      {type === "timeline" && (
        <b className="cursor" id="cursor" style={{ left: "0px" }}>
          █
        </b>
      )}
    </div>
  );
}

export default NewLines;
