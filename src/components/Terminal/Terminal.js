import React from "react";
import "./Terminal.css";
import {
  about,
  help,
  projects,
  skills,
  social,
  banner,
  bannerMobile,
  timeline1,
  timeline2,
  timeline3,
  timeline4,
  timeline5,
  egg,
  theme,
  cmds,
} from "../../commands";
import NewLines from "../NewLines/NewLines";

function Terminal() {
  const [tentativeCommand, setTentativeCommand] = React.useState("");
  const [lines, setLines] = React.useState([]);
  const [commandHistory, setCommandHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(0);
  const [hints, setHints] = React.useState([]);

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
    // inputRef.current.setSelectionRange(
    //   tentativeCommand.length,
    //   tentativeCommand.length
    // );
  }, []);
  const cursorRef = React.useRef();
  const linerRef = React.useRef();

  function handleSubmit(command = tentativeCommand) {
    setHints([]);
    if (tentativeCommand === "timeline") {
      setCommandHistory([...commandHistory, "timeline1"]);
    } else {
      setCommandHistory([...commandHistory, tentativeCommand]);
    } // setLines([...lines, ["tentativeCommand"]]);

    let commandLiner = `<br><p>visitor@ioav.dev: ~ $ <span>${command}</span></p><br>`;
    let history = `<p className='color2'>
    ${commandHistory.map((commandHist) => {
      return commandHist;
    }).join(`<br>
    `)}</p>`;

    switch (command) {
      case "help":
        setLines([...lines, commandLiner, ...help]);
        break;
      case "clear":
        setLines([]);
        break;
      case "history":
        setLines([...lines, commandLiner, history]);
        break;
      // case "banner":
      //   setLines([...lines, commandLiner, ...banner]);
      //   break;
      case "about":
        setLines([...lines, commandLiner, ...about]);
        break;
      case "projects":
        setLines([...lines, commandLiner, ...projects]);
        break;
      case "skills":
        setLines([...lines, commandLiner, ...skills]);
        break;
      case "theme":
        setLines([...lines, commandLiner, ...theme]);
        break;
      case "theme dark":
        setLines([...lines, commandLiner, "Dark theme applied"]);
        break;
      case "theme light":
        setLines([...lines, commandLiner, "Light theme applied"]);
        break;
      case "theme forest":
        setLines([...lines, commandLiner, "Ocean theme applied"]);
        break;
      case "theme beach":
        setLines([...lines, commandLiner, "Beach theme applied"]);
        break;
      case "theme space":
        setLines([...lines, commandLiner, "Space theme applied"]);
        break;
      // case command.startsWith("theme "):
      //   console.log("works");
      //   setLines([...lines, commandLiner, ...theme]);
      //   break;
      case "social":
        setLines([...lines, commandLiner, ...social]);
        break;
      case "timeline":
        setLines([...lines, commandLiner, ...timeline1]);
        // linerRef.current.style.display = "none";
        break;
      default:
        setLines([
          ...lines,
          commandLiner,
          `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
        ]);
    }
    setTentativeCommand(""); //not working
    cursorRef.current.style.left = "0px";
  }

  function moveCaret(event) {
    let keyCode = event.key;
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
      handleSubmit("Control, Alt, and Meta");
    }
    if (keyCode === "Tab") {
      event.preventDefault();

      let hintCmds = [];
      cmds.forEach(function (cmd) {
        if (cmd.startsWith(tentativeCommand)) {
          hintCmds = [...hintCmds, cmd];
        }
      });
      if (hintCmds.length > 1) {
        setHints(hintCmds);
      } else {
        console.log(hintCmds);
        if (hintCmds.length > 0) {
          setTentativeCommand(hintCmds[0]);
          setHints([]);
        }
      }
    }
  }

  function checkTimeline(nextCommand) {
    let lastCommand = commandHistory[commandHistory.length - 1];
    if (lastCommand.includes("timeline")) {
      if (nextCommand === "n") {
        let commandLiner = `<br><p>visitor@ioav.dev: ~ $ <span>n</span></p><br>`;
        setCommandHistory([...commandHistory, "cancel"]);
        let response = `<p className='color2'>  You're no fun :( </p>`;
        setLines([...lines, commandLiner, response]);
        setTentativeCommand("");
      }

      if (nextCommand === "y") {
        let commandLiner = `<br><p>visitor@ioav.dev: ~ $ <span>y</span></p><br>`;
        setTentativeCommand("");
        switch (lastCommand) {
          case "timeline1":
            setLines([...lines, commandLiner, ...timeline2]);
            setCommandHistory([...commandHistory, "timeline2"]);
            break;
          case "timeline2":
            setLines([...lines, commandLiner, ...timeline3]);
            setCommandHistory([...commandHistory, "timeline3"]);
            break;
          case "timeline3":
            setLines([...lines, commandLiner, ...timeline4]);
            setCommandHistory([...commandHistory, "timeline4"]);
            break;
          case "timeline4":
            setLines([...lines, commandLiner, ...timeline5]);
            setCommandHistory([...commandHistory, "timeline5"]);
            break;
          case "timeline5":
            let response = `<a href='${egg}'>  There was an egg...</a>`;
            setLines([...lines, commandLiner, response]);
            setCommandHistory([...commandHistory, "the egg"]);
            setTimeout(function () {
              window.open(egg, "_blank");
            }, 1000);
            break;
          default:
            break;
        }
      }
    }
  }

  return (
    <div className="terminal-wrapper">
      {/* TODO: create separate component for tracking history */}

      <div className="bannerWrapper">
        <NewLines lines={banner} type={"banner"} />
        <NewLines lines={bannerMobile} type={"mobile-banner"} />
      </div>

      <br />
      <p className="color2">Welcome to my terminal portfolio!</p>
      <br />
      <p className="color2">
        For a list of available commands, type{" "}
        <span className="command">'help'</span>.
      </p>

      <NewLines lines={lines} />

      {/* TODO:  create separate component just for command line*/}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          // handleSubmit(tentativeCommand);
        }}
      >
        <input
          ref={inputRef}
          id="command-field"
          value={tentativeCommand}
          autoComplete="off"
          onKeyDown={(event) => {
            moveCaret(event);
          }}
          onChange={(event) => {
            let nextCommand = event.target.value.toLowerCase();
            setTentativeCommand(nextCommand); //TODO: Keep a separate component for this state or cache this data so that component doesnt rerender on every key stroke.
            if (commandHistory[commandHistory.length - 1] !== undefined) {
              checkTimeline(nextCommand);
            }
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
        <p>
          {hints.map((hint) => (
            <>{hint} &nbsp;&nbsp;</>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Terminal;
