import React from "react";
import "./Terminal.css";
import { about, help, contact, banner, error } from "../../commands";
import NewLines from "../NewLines/NewLines";

function Terminal() {
  const [command, setCommand] = React.useState("");
  const [lines, setLines] = React.useState([""]);

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit() {
    switch (command) {
      case "about":
        setLines([...lines, about]);
        break;
      case "help":
        setLines([...lines, ...help]);
        break;
      case "contact":
        setLines([...lines, ...contact]);
        break;
      default:
        setLines([...lines, `${command} ${error}`]);
    }

    setCommand("");
  }

  return (
    <div className="terminal-wrapper">
      <NewLines lines={banner} style={"banner"} />
      <p>Instructions on how to use terminal and type in "help" for more</p>
      <NewLines lines={lines} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="Terminal"
      >
        <label htmlFor="name-field">visitor@ioav.dev: ~ $ </label>
        <input
          ref={inputRef}
          id="command-field"
          value={command}
          autocomplete="off"
          onChange={(event) => {
            setCommand(event.target.value);
          }}
        />
        <b class="cursor" id="cursor" style={{ left: "0px" }}>
          █
        </b>
      </form>
    </div>
  );
}

export default Terminal;
