export const egg = "https://youtu.be/h6fcK_fRYaI";
var github = "https://github.com/ioav-livneh";
var linkedin = "https://www.linkedin.com/in/ioav/";
var email = "mailto:ioavlivneh@gmail.com";

const birthday = new Date("1999-08-26");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs); // miliseconds from epoch
let age = Math.abs(ageDate.getUTCFullYear() - 1970);

export const about = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  Hey, I'm Ioav! 👋 <br>
  I'm a ${age} year old software developer. This is my terminal portfolio! <br>
  When I'm not coding, I love to read and am interested in all subjects <br>
  related to AI, history, psychology, philosophy, and music.
  </p>`,
];

export const skills = [
  `<p className='color2'>
  <span className='command'>Programming languages</span><br>
  Java | Kotlin | C, C#, C++ | Python | HTML5 <br>
  CSS3 | SASS | PHP | JavaScript | TypeScript <br><br>

  <span className='command'>Databases</span><br>
  SQL Server | MySQL | NoSQL | PostgreSQL <br>
  Firebase | AWS | MongoDB | PhpMyAdmin <br><br>

  <span className='command'>Tools</span><br>
  Visual Studio | Android Studio | SSMS <br>
  Github | JIRA | Postman | GCP | Jenkins <br><br>

  <span className='command'>Frameworks</span><br>
  React | Angular | Express | Node | Jupyter <br>
  Spark | ASP.NET 
  </p>`,
];

export const help = [
  `<p className='color2'>
  <span className='command'>about</span>       Who is Ioav? <br>
  <span className='command'>timeline</span>    Work experience, education and other fun facts <br>
  <span className='command'>skills</span>      Technologies and frameworks <br>
  <span className='command'>social</span>      Check out my github, linkedin, or email <br>
  <span className='command'>history</span>     View command history <br>
  <span className='command'>clear</span>       Clear terminal <br></p>`,

  // <span className='command'>theme</span>       Change style background color. <br>
  // <span className='command'>inspire</span>     Inspirobot API <br>
  // <span className='command'>banner</span>      Display banner <br>

  //   "cv/linkedin: resume [pdg - 197kb]",
  //   "matrix:      only for real hackers (make it rain ones and zeros)",
  //   "projects:    other apps I've made",
  //   "secret:      I hid a secret link somewhere on this page. Can you find it?",
];

export const timeline1 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  2022: Worked as Web Developer at ITLIZE (Vitacost)<br>
  2021: Graduated NYIT with Bachelor's in Computer Science<br>
  2019: Completed Ironhack Web Development Bootcamp<br>
  2018: Worked as a student tutor at NYIT<br>
  2017: Began studying at New York Institute of Technology<br>
  Do you want to continue? (y/n)
  </p>`,
];

export const timeline2 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  2017: Graduated AIS High School in Costa Rica<br>
  2015: C++ bootcamp<br>
  2013: Java bootcamp<br>
  2003: Moved to Costa Rica<br>
  1999: Born in Israel<br>
  Do you want to continue? (y/n)
  </p>`,
];

export const timeline3 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  1995: Brendan Eich invents JavaScript<br>
  1983: Internet is born<br>
  1945: Von Neumann designs computer architecture<br>
  1936: Alan Turing invents the turing machine (aka computer)<br>
  1843: Ada Lovelace invents the first algorithm (computer program)<br>
  Do you want to continue? (y/n)
  </p>`,
];

export const timeline4 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  1760 AD - 1840 AD:  Industrial Revolution<br>
  1543 AD - 1687 AD:  Scientific Revolution<br>
  2000 BC - 620 AD:   Major world religions are founded<br>
  12,000 years ago:   Agricultural Revolution <br>
  70,000 years ago:   Cognitive Revolution <br>
  Do you want to continue? (y/n)
  </p>`,
];

export const timeline5 = [
  `<p className='color2' key={${crypto.randomUUID()}}>
  9.3 - 6.5 million years ago:  Humans diverged from chimps, our closest living biological ancestor<br>
  85 million years ago:         Primates diverged from mammals<br>
  325 million years ago:        Mammals diverged from reptiles<br>
  1.5 billion years ago:        Animals diverged from plants and fungi<br>
  3.9 billion years ago:        The species from which everything alive today is descended may have lived at this time<br>
  Do you want to know what came before that? (y/n)
  </p>`,
];

export const theme = [
  `<p className='color2'>
  Pick from any of the following themes by using the syntax 'theme [name-here]'<br>
  ['Dark','Light','Ocean','Sunset']
  </p>`,
];

export const social = [
  `<p className='color2'> 
  You can find me on any of the following links: <br>
  <a href=${github} target="_blank">gitHub();</a>
  <a href=${linkedin} target="_blank">linkedIn();</a>
  <a href=${email} target="_blank">emailMe();</a>
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
  '   /:::::::::::\\" _  "                                     © 2023',
  "  /:::=======:::\\ \\`\\   ",
  '  `"""""""""""""`  "-"     ',
];

export const banner = [
  "                              _                        __         ",
  "          /\\                 (_)___  ____ __   __ ____/ /__ _   __",
  "         /**\\               / / __ \\/ __ `/ | / // __  / _ \\ | / /",
  "        /****\\   /\\        / / /_/ / /_/ /| |/ // /_/ /  __/ |/ / ",
  "       /      \\ /**\\      /_/\\____/\\__,_/ |___(_)__,_/\\___/|___/  ",
  "      /  /\\    /    \\                                      © 2023     ",
  "     /  /  \\  /      \\      /\\    /\\  /\\      /\\            /\\/\\/\\  /\\",
  "    /  /    \\/ /\\     \\    /  \\/\\/  \\/  \\  /\\/  \\/\\  /\\  /\\/ / /  \\/  \\",
  "   /  /      \\/  \\/\\   \\  /    \\ \\  /    \\/ /   /  \\/  \\/  \\  /    \\   \\",
  "__/__/_______/___/__\\___\\__________________________________________________",
];
