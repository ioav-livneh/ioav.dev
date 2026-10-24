const currentYear = new Date().getFullYear();

export const egg = "https://youtu.be/h6fcK_fRYaI";
var github = "https://github.com/ioav-livneh";
var linkedin = "https://www.linkedin.com/in/ioav/";
var email = "mailto:ioavlivneh@gmail.com";
var game = "https://www.1010.ioav.dev";
var syntopicon = "https://www.cards.ioav.dev";
var livceramic = "https://www.livceramic.com";

export const cmds = [
  "help",
  "about",
  "projects",
  "timeline",
  "skills",
  "social",
  "theme",
  "history",
  "clear",
];

export const themeCmds = [
  "theme dark",
  "theme light",
  "theme forest",
  "theme beach",
  "theme space",
];

// Hidden easter-egg commands, matched on the first word so arguments work (e.g. "cd projects").
// Not listed in help or tab-completion on purpose.
const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const fileListing = `<p className='color2'>
  <span className='command' data-command='about'>about.txt</span>   <span className='command' data-command='projects'>projects/</span>   <span className='command' data-command='skills'>skills.txt</span><br>
  <span className='command' data-command='social'>social.txt</span>  <span className='command' data-command='timeline'>timeline.log</span>
  </p>`;

export function hiddenCommandResponse(command) {
  const [name, ...rest] = command.trim().split(/\s+/);
  const args = escapeHtml(rest.join(" "));
  const reply = (text) => [`<p className='color2'>${text}</p>`];

  switch (name) {
    case "ls":
      return [fileListing];
    case "dir":
      return [
        `<p className='color2'>This isn't Windows, but I'll allow it.</p>`,
        fileListing,
      ];
    case "cd":
      if (!args || args === "~" || args === "/") {
        return reply(
          "You're already home. There's only one room in this house.",
        );
      }
      if (args === "..") {
        return reply("Nice try. There's nothing above home.");
      }
      return reply(
        `cd: ${args}: Not a directory. Type <span className='command'>ls</span> to look around.`,
      );
    case "pwd":
      return reply("/home/visitor");
    case "whoami":
      return reply("visitor. But I hope you'll become a friend.");
    case "sudo":
      return reply(
        "visitor is not in the sudoers file. This incident will be reported. 🚨",
      );
    case "su":
      return reply("su: Authentication failure. Good try, though.");
    case "rm":
      return reply(
        "rm: Permission denied. This portfolio is not going anywhere.",
      );
    case "mkdir":
    case "touch":
    case "mv":
    case "cp":
      return reply(`${name}: Read-only file system. Look, don't touch. 👀`);
    case "cat":
      return reply(
        "🐱 meow. Looking for a file? Type <span className='command'>ls</span>.",
      );
    case "echo":
      return reply(args || "&nbsp;");
    case "date":
      return reply(new Date().toString());
    case "uname":
      return reply("ioavOS 1.0 (React) — built with ☕ and curiosity");
    case "man":
      return reply(
        "No manual entry. Type <span className='command'>help</span> instead.",
      );
    case "vim":
    case "vi":
    case "nano":
    case "emacs":
      return reply(
        `${name}: Opening... just kidding. No one has ever escaped ${name} anyway.`,
      );
    case "exit":
    case "logout":
      return reply(
        "There is no escape. Try <span className='command'>clear</span> instead.",
      );
    case "ping":
      return reply("pong 🏓");
    case "hello":
    case "hi":
    case "hey":
      return reply(
        "Hey there! 👋 Type <span className='command'>about</span> to learn more about me.",
      );
    default:
      return null;
  }
}

export const help = [
  `<p className='color2'>
  <span className='command'>about</span>       <span className='desc'>  - about Ioav Livneh </span><br>
  <span className='command'>projects</span>    <span className='desc'>  - view projects that I've coded </span><br>
  <span className='command'>timeline</span>    <span className='desc'>  - work history, education, and fun facts </span><br>
  <span className='command'>skills</span>      <span className='desc'>  - technologies and frameworks </span><br>
  <span className='command'>social</span>      <span className='desc'>  - check out my github, linkedin, or email </span><br>
  <span className='command'>theme</span>       <span className='desc'>  - check available themes </span><br>
  <span className='command'>history</span>     <span className='desc'>  - view history of commands </span><br>
  <span className='command'>clear</span>       <span className='desc'>  - clear terminal </span>
<span className='key-container color2'><br>
  CLICK          => run any highlighted command<br>
  TAB            => autocompletes the command<br>
  ▲ / ▼          => navigate past commands<br>
  Konami Code    => ???
</span><span className='touch-hint'><br>
  TAP            => run any highlighted command
</span></p>`,
];

export const about = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  Hi, I'm Ioav Livneh! 👋 <br><br>
  Creative coder. Pretentious bipedal ape.<br>
  I believe the internet should feel handmade, personal, and a little weird — <br>
  not optimized, not templated, not soulless. 👻<br><br>
  Based in Barcelona, Spain 📍
  </p>`,
];

export const projects = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  A few things I've built. Click a title to visit it.<br><br>

  <a href=${livceramic} target="_blank">1. Liv Ceramic</a>  <span className='label'>2026</span>
<span className='indent'>An e-commerce site for my family's ceramics business in Costa Rica.<br>
<span>stack:</span>  Next.js · Supabase · Tailwind · Resend<br>
<span>code:</span>   <a href=${github}/liv-ceramic target="_blank">github ↗</a></span><br>

  <a href=${game} target="_blank">2. 1010!</a>  <span className='label'>2019 – present</span>
<span className='indent'>A recreation of the Tetris-like mobile game, now available in web format.<br>
<span>stack:</span>  JavaScript · HTML · CSS<br>
<span>code:</span>   <a href=${github}/1010-game target="_blank">github ↗</a></span><br>

  <a href=${syntopicon} target="_blank">3. Syntopicon</a>  <span className='label'>2024 – 2025</span>
<span className='indent'>A personal commonplace book where I keep the best quotes and takeaways from my favorite books.<br>
<span>stack:</span>  React · MongoDB · CSS · Framer Motion<br>
<span>code:</span>   <a href=${github}/ioav-cards target="_blank">github ↗</a></span>
  </p>`,
];

export const timeline1 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
<span className='entry'>2026: Freelance Web Developer</span>
<span className='entry'>2024: Solution Architect at MongoDB</span>
<span className='entry'>2022: Software Engineer at Itlize </span>
<span className='entry'>2021: Graduated from NYIT with a B.S. in Computer Science</span>
<span className='entry'>2018: Academic Tutor at New York Institute of Technology</span><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline2 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
<span className='entry'>2017: Graduated high school in Costa Rica</span>
<span className='entry'>2015: First steps in C++ </span>
<span className='entry'>2013: First steps in Java</span>
<span className='entry'>2003: Moved to Costa Rica</span>
<span className='entry'>1999: Born in Israel</span><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline3 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
<span className='entry'>1995: Brendan Eich invents JavaScript</span>
<span className='entry'>1983: Internet is born</span>
<span className='entry'>1945: Von Neumann designs computer architecture</span>
<span className='entry'>1936: Alan Turing invents the turing machine</span>
<span className='entry'>1843: Ada Lovelace invents the first algorithm</span><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline4 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
<span className='entry'>1760 AD - 1840 AD:  Industrial Revolution</span>
<span className='entry'>1543 AD - 1687 AD:  Scientific Revolution</span>
<span className='entry'>2000 BC - 620 AD:   Major world religions founded</span>
<span className='entry'>12,000 years ago:   Agricultural Revolution </span>
<span className='entry'>70,000 years ago:   Cognitive Revolution </span><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline5 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
<span className='entry'>7 million years ago:    Humans diverged from chimps, our closest living biological ancestor</span>
<span className='entry'>85 million years ago:   Primates diverged from mammals</span>
<span className='entry'>325 million years ago:  Mammals diverged from reptiles</span>
<span className='entry'>1.5 billion years ago:  Animals diverged from plants and fungi</span>
  3.9 billion years ago:  The first life. Everything alive today <br>
                        — every person, animal, and blade of grass — <br>
                        descends from a single common ancestor.<br><br>
  Do you want to know what came before that? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

// Technical Skills
// Languages: Java | Kotlin | C/C++ | C# | Python | JavaScript | TypeScript | PHP | HTML5 | CSS3 | SASS
// Frameworks & Libraries: React | Angular | Node.js | Express | ASP.NET | jQuery | Bootstrap | Jupyter | Spark
// Databases: SQL Server | MySQL | PostgreSQL | MongoDB | Firebase | NoSQL | PhpMyAdmin
// Cloud & DevOps: AWS | GCP | Azure | MongoDB Atlas | Jenkins | Firebase | GitHub | Postman
// Tools & Platforms: Android Studio | Visual Studio | SSMS | JIRA

export const skills = [
  `<p className='color2'>
  <span className='command heading'>languages</span>
<span className='entry'>JavaScript, TypeScript, HTML, CSS, Python, C#, Java</span><br>

  <span className='command heading'>frameworks</span>
<span className='entry'>React, Next.js, Node.js, Express, Tailwind&nbsp;CSS, Framer&nbsp;Motion, ASP.NET</span><br>

  <span className='command heading'>data</span>
<span className='entry'>MongoDB, PostgreSQL, Supabase, SQL&nbsp;Server, MySQL, Firebase</span><br>

  <span className='command heading'>apis &amp; services</span>
<span className='entry'>Stripe, Resend, OpenAI&nbsp;API, Vercel</span><br>

  <span className='command heading'>tools</span>
<span className='entry'>Git, Docker, Postman, Jira, Jenkins</span><br>

  <span className='command heading'>ai</span>
<span className='entry'>Atlas&nbsp;Vector&nbsp;Search, LangChain, RAG&nbsp;pipelines</span>
  </p>`,
];

export const social = [
  `<p className='color2'> 
  Here are my social links<br><br>
  <a href=${github} target="_blank">1. GitHub</a>       <span className='desc'>  - github.com/ioav-livneh</span><br>
  <a href=${linkedin} target="_blank">2. LinkedIn</a>     <span className='desc'>  - linkedin.com/in/ioav</span><br>
  <a href=${email} target="_blank">3. Email</a>        <span className='desc'>  - ioavlivneh@gmail.com</span> </p>`,
];

// The secret theme, unlocked with the Konami code (see App.js and Terminal.js).
export const secretThemeCmd = "theme party";

const secretThemeEntry = `   <span className='command' data-command='${secretThemeCmd}'><span className='swatch' style='background: linear-gradient(120deg, #5a1a6e, #1a3a8f, #0e6b6b, #2f7a1f, #8a6a0e, #8f2a1a); border-color: #84FFFF'></span>'party' ★</span>`;

export const theme = (secretUnlocked) => [
  `<p className='color2'>
  <span className='command' data-command='theme dark'><span className='swatch' style='background: #0F111A; border-color: #84FFFF'></span>'dark'</span>   <span className='command' data-command='theme light'><span className='swatch' style='background: #F4F4F4; border-color: #2979ff'></span>'light'</span>   <span className='command' data-command='theme forest'><span className='swatch' style='background: #002626; border-color: #FFCC80'></span>'forest'</span>   <span className='command' data-command='theme beach'><span className='swatch' style='background: #FFF8ED; border-color: #53c7f0'></span>'beach'</span>   <span className='command' data-command='theme space'><span className='swatch' style='background: #1B2240; border-color: #ad9bf6'></span>'space'</span>${secretUnlocked ? secretThemeEntry : ""}<br><br>

  Apply any theme by using the syntax 'theme [theme-name]'<br>
  eg: theme forest
  </p>`,
];

export const konamiUnlocked = [
  `<p className='color2'>
  cheat code accepted. ✨<br>
  secret theme unlocked: <span className='command' data-command='${secretThemeCmd}'>theme party</span><br>
  switch back anytime with <span className='command' data-command='theme dark'>theme dark</span>
  </p>`,
];

export const banner = [
  "                              _                        __                  ",
  "          /\\                 (_)___  ____ __   __ ____/ /__ _   __         ",
  "         /**\\               / / __ \\/ __ `/ | / // __  / _ \\ | / /         ",
  "        /****\\   /\\        / / /_/ / /_/ /| |/ // /_/ /  __/ |/ /          ",
  "       /      \\ /**\\      /_/\\____/\\__,_/ |___(_)__,_/\\___/|___/           ",
  `      /  /\\    /    \\                                      © ${currentYear}          `,
  "     /  /  \\  /      \\      /\\    /\\  /\\      /\\            /\\/\\/\\  /\\     ",
  "    /  /    \\/ /\\     \\    /  \\/\\/  \\/  \\  /\\/  \\/\\  /\\  /\\/ / /  \\/  \\    ",
  "   /  /      \\/  \\/\\   \\  /    \\ \\  /    \\/ /   /  \\/  \\/  \\  /    \\   \\   ",
  "__/__/_______/___/__\\___\\__________________________________________________",
];

export const bannerMobile = [
  "    _                  ",
  "   (_)___  ____ __   __",
  "  / / __ \\/ __ `/ | / /",
  " / / /_/ / /_/ /| |/ / ",
  "/_/\\____/\\__,_/ |___/  ",
  "    ____/ /__ _   __   ",
  "   / __  / _ \\ | / /   ",
  " _/ /_/ /  __/ |/ /    ",
  "(_)__,_/\\___/|___/     ",
  `   __________© ${currentYear}    `,
];
