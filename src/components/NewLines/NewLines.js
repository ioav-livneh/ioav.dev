import React from "react";
import "./NewLines.css";
import parse from "html-react-parser";

function NewLines({ lines, type = "" }) {
  React.useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight);
  });

  return (
    <div className={"NewLines"}>
      {lines.map((line) => {
        if (line.startsWith("<")) {
          var t = "";
          for (let i = 0; i < line.length; i++) {
            if (line.charAt(i) === " " && line.charAt(i + 1) === " ") {
              t += "&nbsp;&nbsp;";
              i++;
            } else {
              t += line.charAt(i);
            }
          }
          return parse(t); //add to the <p> key={`${line}-${crypto.randomUUID()}`}
        } else {
          return (
            <p className={`${type} color2`} key={crypto.randomUUID()}>
              {line}
            </p>
          );
        }
      })}
    </div>
  );
}

export default NewLines;
