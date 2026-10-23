import React from "react";
import "./NewLines.css";
import parse from "html-react-parser";

function NewLines({ lines, type = "" }) {
  return (
    <div className={"NewLines"}>
      {/* Lines are only ever appended (or all cleared), so index keys keep earlier lines
          mounted and only new output plays the fade-in animation. */}
      {lines.map((line, index) => {
        if (line.startsWith("<")) {
          // Source indentation before </p> would otherwise become &nbsp; and render as an extra blank line.
          const html = line.replace(/\s+<\/p>/g, "</p>");
          var t = "";
          for (let i = 0; i < html.length; i++) {
            if (html.charAt(i) === " " && html.charAt(i + 1) === " ") {
              t += "&nbsp;&nbsp;";
              i++;
            } else {
              t += html.charAt(i);
            }
          }
          return <React.Fragment key={index}>{parse(t)}</React.Fragment>;
        } else {
          return (
            <p className={`${type} color2`} key={index}>
              {line}
            </p>
          );
        }
      })}
    </div>
  );
}

export default NewLines;
