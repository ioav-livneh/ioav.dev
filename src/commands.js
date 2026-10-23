export const egg = "https://youtu.be/h6fcK_fRYaI";
var github = "https://github.com/ioav-livneh";
var linkedin = "https://www.linkedin.com/in/ioav/";
var email = "mailto:ioavlivneh@gmail.com";
var game = "https://www.1010.ioav.dev";
var syntopicon = "https://www.syntopicon.ioav.dev";
var button = "https://www.button.ioav.dev";

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
</span></p>`,
];

// Konami Code    => ???
// Redirects them to ioav.dev/ShhYouFoundTheSecretDontTellAnyone
// make background lines wavy
// play Welcome to Vulf records, add confetti and lots of personality
// Or give a simple alert "Konami code entered. Secret theme unlocked! `theme microdose` " and apply the theme to make everything wavy/trippy and colorful

export const about = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  Hi, I'm Ioav Livneh! 👋 <br><br>
  Creative coder. Pretentious bipedal ape.<br>
  I believe the internet should feel handmade, personal, and a little weird — <br>
  not optimized, not templated, not AI-generated. <br><br>
  Based in Barcelona, Spain 📍
  </p>`,
];

export const projects = [
  `<p className='color2' key={${crypto.randomUUID()}}> 
  <a href=${syntopicon} target="_blank">1. Syntopicon </a><br>
    A personal commonplace book where I keep the best quotes and takeaways from my favorite books.<br><br>
  <a href=${game} target="_blank">2. 1010! </a><br>
    A recreation of the Tetris-like mobile game, now available in web format. <br><br>
  <a href=${button} target="_blank">3. Press the Button (Coming Soon) </a><br>
    An infuriatingly entertaining game, inspired by the classic flash game 'Dont Press the Button'
  </p>`,
];

export const timeline1 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  2026: Solution Architect at Elastic<br>
  2024: Solution Architect at MongoDB<br>
  2022: Software Engineer at Itlize <br>
  2021: Graduated from NYIT with a B.S. in Computer Science<br>
  2018: Academic Tutor at New York Institute of Technology<br><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline2 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  2017: Graduated high school in Costa Rica<br>
  2015: First steps in C++ <br>
  2013: First steps in Java<br>
  2003: Moved to Costa Rica<br>
  1999: Born in Israel<br><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline3 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  1995: Brendan Eich invents JavaScript<br>
  1983: Internet is born<br>
  1945: Von Neumann designs computer architecture<br>
  1936: Alan Turing invents the turing machine<br>
  1843: Ada Lovelace invents the first algorithm<br><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline4 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  1760 AD - 1840 AD:  Industrial Revolution<br>
  1543 AD - 1687 AD:  Scientific Revolution<br>
  2000 BC - 620 AD:   Major world religions founded<br>
  12,000 years ago:   Agricultural Revolution <br>
  70,000 years ago:   Cognitive Revolution <br><br>
  Do you want to continue? [<span className='choice'>Y</span>/<span className='choice'>n</span>]
  </p>`,
];

export const timeline5 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  7 million years ago:    Humans diverged from chimps, our closest living biological ancestor<br>
  85 million years ago:   Primates diverged from mammals<br>
  325 million years ago:  Mammals diverged from reptiles<br>
  1.5 billion years ago:  Animals diverged from plants and fungi<br>
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
  <span className='command heading'>Programming languages</span><br>
  Java | Kotlin | C, C#, C++ | Python | HTML5 <br>
  CSS3 | SASS | PHP | JavaScript | TypeScript <br><br>

  <span className='command heading'>Databases</span><br>
  SQL Server | MySQL | NoSQL | PostgreSQL <br>
  Firebase | AWS | MongoDB | PhpMyAdmin <br><br>

  <span className='command heading'>Tools</span><br>
  Visual Studio | Android Studio | SSMS <br>
  Github | JIRA | Postman | GCP | Jenkins <br><br>

  <span className='command heading'>Frameworks</span><br>
  React | Angular | Express | Node | Jupyter <br>
  Spark | ASP.NET | Bootstrap | jQuery
  </p>`,
];

export const social = [
  `<p className='color2'> 
  Here are my social links<br><br>
  <a href=${github} target="_blank">1. GitHub</a>       <span className='desc'>  - github.com/ioav-livneh</span><br>
  <a href=${linkedin} target="_blank">2. LinkedIn</a>     <span className='desc'>  - linkedin.com/in/ioav</span><br>
  <a href=${email} target="_blank">3. Email</a>        <span className='desc'>  - ioavlivneh@gmail.com</span> </p>`,
];

export const theme = [
  `<p className='color2'>
  <span className='command' data-command='theme dark'>'dark'</span>   <span className='command' data-command='theme light'>'light'</span>   <span className='command' data-command='theme forest'>'forest'</span>   <span className='command' data-command='theme beach'>'beach'</span>   <span className='command' data-command='theme space'>'space'</span><br><br>

  Apply any theme by using the syntax 'theme [theme-name]'<br>
  eg: theme forest
  </p>`,
];

export const banner2 = [
  "                .----.     ",
  "    .---------. | == |     ",
  '    |.-"""""-.| |----|         _                        __         ',
  "    ||       || | == |        (_)___  ____ __   __ ____/ /__ _   __",
  "    ||       || |----|       / / __ \\/ __ `/ | / // __  / _ \\ | / /",
  "    |'-.....-'| |::::|      / / /_/ / /_/ /| |/ // /_/ /  __/ |/ / ",
  '    `"")---(""` |___.|     /_/\\____/\\__,_/ |___(_)__,_/\\___/|___/  ',
  '   /:::::::::::\\" _  "                                     © 2026',
  "  /:::=======:::\\ \\`\\   ",
  '  `"""""""""""""`  "-"     ',
];

export const banner = [
  "                              _                        __                  ",
  "          /\\                 (_)___  ____ __   __ ____/ /__ _   __         ",
  "         /**\\               / / __ \\/ __ `/ | / // __  / _ \\ | / /         ",
  "        /****\\   /\\        / / /_/ / /_/ /| |/ // /_/ /  __/ |/ /          ",
  "       /      \\ /**\\      /_/\\____/\\__,_/ |___(_)__,_/\\___/|___/           ",
  "      /  /\\    /    \\                                      © 2026          ",
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
  "   __________© 2026    ",
];
