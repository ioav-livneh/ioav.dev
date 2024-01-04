import React from "react";
import "./Terminal.css";
import { about, help, social, banner, error } from "../../commands";
import NewLines from "../NewLines/NewLines";

function Terminal() {
  const [tentativeCommand, setTentativeCommand] = React.useState("");
  const [lines, setLines] = React.useState([""]);
  const [commandHistory, setCommandHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(0);

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  const cursorRef = React.useRef();
  React.useEffect(() => {
    // cursorRef.current.style.left = "0px";
  });

  function handleSubmit() {
    setCommandHistory([...commandHistory, tentativeCommand]);
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
    cursorRef.current.style.left = "0px";
  }

  function moveCaret(keyCode) {
    if (keyCode === "ArrowUp" && commandHistory.length > historyIndex) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setTentativeCommand(commandHistory[commandHistory.length - nextIndex]);
      cursorRef.current.style.left = "0px";
    }
    if (keyCode === "ArrowDown" && historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setTentativeCommand(commandHistory[commandHistory.length - nextIndex]);
      if (nextIndex === 0) {
        setTentativeCommand("");
        cursorRef.current.style.left = "0px";
      }
    }
    if (
      keyCode === "ArrowLeft" &&
      parseFloat(cursorRef.current.style.left) >=
        0 - (tentativeCommand.length - 1) * 10.4
    ) {
      cursorRef.current.style.left =
        parseFloat(cursorRef.current.style.left) - 10.4 + "px";
    }
    if (
      keyCode === "ArrowRight" &&
      parseFloat(cursorRef.current.style.left) + 10.4 <= 0
    ) {
      cursorRef.current.style.left =
        parseFloat(cursorRef.current.style.left) + 10.4 + "px";
    }
    if (keyCode === "Meta" || keyCode === "Control" || keyCode === "Alt") {
      setTentativeCommand("Control, Alt, and Meta"); //not working?
      handleSubmit();
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
        <p>
          visitor@ioav.dev: ~ $ <span>{tentativeCommand}</span>
          <b
            className="cursor"
            id="cursor"
            ref={cursorRef}
            style={{ left: "0px" }}
          >
            █
          </b>
        </p>
      </div>
    </div>
  );
}

export default Terminal;
