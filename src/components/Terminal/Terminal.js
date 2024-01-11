import React from "react";
import "./Terminal.css";
import { about, help, skills, social, banner, timeline } from "../../commands";
import NewLines from "../NewLines/NewLines";

function Terminal() {
  const [tentativeCommand, setTentativeCommand] = React.useState("");
  const [lines, setLines] = React.useState([]);
  const [commandHistory, setCommandHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(0);

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  const cursorRef = React.useRef();
  const linerRef = React.useRef();

  function handleSubmit() {
    setCommandHistory([...commandHistory, tentativeCommand]);
    // setLines([...lines, ["tentativeCommand"]]);

    let command = `<br><p>visitor@ioav.dev: ~ $ <span>${tentativeCommand}</span></p><br>`;
    let history = `<br><p className='color2'>${commandHistory}</p><br>`;

    switch (tentativeCommand) {
      case "help":
        setLines([...lines, command, ...help]);
        break;
      case "clear":
        setLines([]);
        break;
      case "history":
        setLines([...lines, command, ...commandHistory]);
        break;
      case "banner":
        setLines([...lines, command, ...banner]);
        break;
      case "about":
        setLines([...lines, command, ...about]);
        break;
      case "skills":
        setLines([...lines, command, ...skills]);
        break;
      case "theme":
        setLines([
          ...lines,
          command,
          "You must specify a theme (ex. theme dark, theme light)",
        ]);
        break;
      case "theme dark":
        setLines([...lines, command, "Changed to dark theme"]);
        break;
      case "theme light":
        setLines([...lines, command, "Changed to light theme"]);
        break;
      case "social":
        setLines([...lines, command, ...social]);
        break;
      case "timeline":
        setLines([...lines, command, ...timeline]);
        linerRef.current.style.display = "none";
        break;
      default:
        setLines([
          ...lines,
          command,
          `<p className='color2'>Command not found: ${tentativeCommand}. For a list of commands, type <span class="command">'help'</span>.</p>`,
        ]);
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
    if (
      keyCode === "Meta" ||
      keyCode === "Control" ||
      keyCode === "Alt" ||
      keyCode === "<"
    ) {
      setTentativeCommand("Control, Alt, and Meta"); //not working?
      handleSubmit();
    }
  }

  return (
    <div className="terminal-wrapper">
      {/* TODO: create separate component for tracking history */}

      <NewLines lines={banner} type={"banner"} />
      <p className="color2">
        Instructions on how to use terminal and type in{" "}
        <span className="command">'help'</span> for more
      </p>

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
            setTentativeCommand(event.target.value); //TODO: Keep a separate component for this state or cache this data so that component doesnt rerender on every key stroke.
          }}
          onKeyDown={(event) => {
            moveCaret(event.key);
          }}
        />
      </form>
      <div
        ref={linerRef}
        id="command-line"
        onClick={() => {
          onclick = inputRef.current.focus();
        }}
      >
        <br />
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
