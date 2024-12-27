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
  themeCmds,
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
  }, []);
  const cursorRef = React.useRef();
  const linerRef = React.useRef();

  function handleSubmit(command = tentativeCommand) {
    setHints([]);
    if (tentativeCommand === "timeline") {
      setCommandHistory([...commandHistory, "timeline1"]);
    } else {
      setCommandHistory([...commandHistory, tentativeCommand]);
    }

    let lastCommand = commandHistory[commandHistory.length - 1];
    let commandLiner = `<br><p>visitor@ioav.dev: ~ $ <span>${command}</span></p><br>`;
    let history = `<p className='color2'>
    ${commandHistory.map((commandHist) => {
      return commandHist;
    }).join(`<br>
    `)}</p>`;

    var r = document.querySelector(":root");

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
        r.style.setProperty("--main-bg", "#0F111A"); //background
        r.style.setProperty("--main-bg-inverse", "#F0EEE550");
        r.style.setProperty("--secondary-bg-inverse", "#F0EEE510");
        r.style.setProperty("--link-hover-bg", "#717CB480"); //selection background
        r.style.setProperty("--link-hover-text", "#FFFFFF"); //selection foreground
        r.style.setProperty("--command", "#84FFFF"); //accent color
        r.style.setProperty("--main-text", "#EEFFFF"); //variables color
        r.style.setProperty("--link-text", "#82AAFF"); //functions color
        r.style.setProperty("--color2-text", "#C3E88D"); //strings color
        break;
      case "theme light":
        setLines([...lines, commandLiner, "Light theme applied"]);
        r.style.setProperty("--main-bg", "#F4F4F4"); //background
        r.style.setProperty("--main-bg-inverse", "#0b0b0b50");
        r.style.setProperty("--secondary-bg-inverse", "#0b0b0b10");
        r.style.setProperty("--link-hover-bg", "#FFFFFF"); //selection background
        r.style.setProperty("--link-hover-text", "#232324"); //selection foreground
        r.style.setProperty("--command", "#2979ff"); //accent color
        r.style.setProperty("--main-text", "#986801"); //variables color
        r.style.setProperty("--link-text", "#4078F2"); //functions color
        r.style.setProperty("--color2-text", "#50A14E"); //strings color
        break;
      case "theme forest":
        setLines([...lines, commandLiner, "Forest theme applied"]);
        r.style.setProperty("--main-bg", "#002626"); //background
        r.style.setProperty("--main-bg-inverse", "#ffd9d950");
        r.style.setProperty("--secondary-bg-inverse", "#ffd9d910");
        r.style.setProperty("--link-hover-bg", "#1E611E"); //selection background
        r.style.setProperty("--link-hover-text", "#FFFFFF"); //selection foreground
        r.style.setProperty("--command", "#FFCC80"); //accent color
        r.style.setProperty("--main-text", "#eeffff"); //variables color
        r.style.setProperty("--link-text", "#82aaff"); //functions color
        r.style.setProperty("--color2-text", "#c3e88d"); //strings color
        break;
      case "theme beach":
        setLines([...lines, commandLiner, "Beach theme applied"]);
        r.style.setProperty("--main-bg", "#FFF8ED"); //background
        r.style.setProperty("--main-bg-inverse", "#00071250");
        r.style.setProperty("--secondary-bg-inverse", "#00071210");
        r.style.setProperty("--link-hover-bg", "#e7c496"); //selection background
        r.style.setProperty("--link-hover-text", "#FFFFFF"); //selection foreground
        r.style.setProperty("--command", "#53c7f0"); //accent color
        r.style.setProperty("--main-text", "#272727"); //variables color
        r.style.setProperty("--link-text", "#7C4DFF"); //functions color
        r.style.setProperty("--color2-text", "#91B859"); //strings color
        break;
      case "theme space":
        setLines([...lines, commandLiner, "Space theme applied"]);
        r.style.setProperty("--main-bg", "#1B2240"); //background
        r.style.setProperty("--main-bg-inverse", "#e4ddbf50");
        r.style.setProperty("--secondary-bg-inverse", "#e4ddbf10");
        r.style.setProperty("--link-hover-bg", "#383f56"); //selection background
        r.style.setProperty("--link-hover-text", "#FFFFFF"); //selection foreground
        r.style.setProperty("--command", "#ad9bf6"); //accent color
        r.style.setProperty("--main-text", "#eeffff"); //variables color
        r.style.setProperty("--link-text", "#82aaff"); //functions color
        r.style.setProperty("--color2-text", "#c3e88d"); //strings color
        break;
      case "social":
        setLines([...lines, commandLiner, ...social]);
        break;
      case "timeline":
        setLines([...lines, commandLiner, ...timeline1]);
        break;
      case "n":
        if (lastCommand.includes("timeline")) {
          setCommandHistory([...commandHistory, "cancel"]);
          let response = `<p className='color2'>  You're no fun :( </p>`;
          setLines([...lines, commandLiner, response]);
        } else {
          setLines([
            ...lines,
            commandLiner,
            `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
          ]);
        }
        break;
      case "y":
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
            setLines([
              ...lines,
              commandLiner,
              `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
            ]);
            break;
        }
        break;
      default:
        setLines([
          ...lines,
          commandLiner,
          `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
        ]);
    }
    setTentativeCommand("");
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
      keyCode === "<" ||
      keyCode === "Meta" ||
      keyCode === "Control" ||
      keyCode === "Alt"
    ) {
      handleSubmit("Invalid key: '" + keyCode + "'");
      setCommandHistory([...commandHistory, "invalid command"]);
    }
    if (keyCode === "Tab") {
      event.preventDefault();

      let hintCmds = [];

      cmds.forEach(function (cmd) {
        if (cmd.startsWith(tentativeCommand)) {
          hintCmds = [...hintCmds, cmd];
        }
      });

      if (tentativeCommand.startsWith("theme")) {
        themeCmds.forEach(function (cmds) {
          if (cmds.startsWith(tentativeCommand)) {
            hintCmds = [...hintCmds, cmds];
          }
        });
      }

      if (hintCmds.length > 1) {
        setHints(hintCmds);
      } else {
        if (hintCmds.length > 0) {
          setTentativeCommand(hintCmds[0]);
          setHints([]);
        }
      }
    }
    const input = document.getElementById("command-field");
    const length = input.value.length;
    input.focus();
    input.setSelectionRange(length, length);
  }

  return (
    <div className="terminal-wrapper">
      {/* TODO: create separate component for tracking history */}
      <div className="screen-overlay"></div>
      <div className="terminal-wrapper-content">
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
              if (nextCommand === "<") {
                nextCommand = "";
              }
              setTentativeCommand(
                nextCommand
              ); /*TODO: Keep a separate component for this state or cache this data so that component doesnt rerender on every key stroke.*/
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
    </div>
  );
}

export default Terminal;
