import React from "react";
import "./Terminal.css";
import { about, help, social, banner, error } from "../../commands";
import NewLines from "../NewLines/NewLines";

function Terminal() {
  const [tentativeCommand, setTentativeCommand] = React.useState("");
  const [lines, setLines] = React.useState([""]);

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  const cursorRef = React.useRef();
  React.useEffect(() => {
    cursorRef.current.style.left = "0px";
  });

  function handleSubmit() {
    switch (tentativeCommand) {
      case "about":
        setLines([...lines, about]);
        break;
      case "help":
        setLines([...lines, ...help]);
        break;
      case "social":
        setLines([...lines, ...social]);
        break;
      default:
        setLines([...lines, `${tentativeCommand} ${error}`]);
    }

    setTentativeCommand("");
  }

  function moveCaret(keyCode) {
    if (keyCode === "ArrowUp") {
      console.log("go back history");
    }
    if (keyCode === "ArrowDown") {
      console.log("go forward history");
    }
    if (
      keyCode === "ArrowLeft" &&
      parseInt(cursorRef.current.style.left) >=
        0 - (tentativeCommand.length - 1) * 10
    ) {
      cursorRef.current.style.left =
        parseInt(cursorRef.current.style.left) - 10 + "px";
    }
    if (
      keyCode === "ArrowRight" &&
      parseInt(cursorRef.current.style.left) + 10 <= 0
    ) {
      cursorRef.current.style.left =
        parseInt(cursorRef.current.style.left) + 10 + "px";
    }
  }

  return (
    <div className="terminal-wrapper">
      {/* TODO: create separate component for tracking history */}

      <NewLines lines={banner} type={"banner"} />
      <p>Instructions on how to use terminal and type in "help" for more</p>
      <NewLines lines={lines} />

      {/* TODO:  create separate component just for command line*/}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          ref={inputRef}
          id="command-field"
          value={tentativeCommand}
          autoComplete="off"
          onChange={(event) => {
            setTentativeCommand(event.target.value);
          }}
          onKeyDown={(event) => {
            moveCaret(event.key);
          }}
        />
      </form>
      <div
        id="command-line"
        onClick={() => {
          onclick = inputRef.current.focus();
        }}
      >
        <span>visitor@ioav.dev: ~ $ {tentativeCommand} </span>
        <b className="cursor" id="cursor" ref={cursorRef}>
          █
        </b>
      </div>
    </div>
  );
}

export default Terminal;
