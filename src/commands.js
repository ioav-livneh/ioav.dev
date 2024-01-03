const birthday = new Date("1999-08-26");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs); // miliseconds from epoch
let calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970);

export const about = [
  `My name is Ioav Livneh. I am ${calculateAge} years old. This is my terminal portfolio!`,
];

export const help = [
  "about:        Who is Ioav?",
  "*timeline:    work experience, education and other fun facts",
  "*inspire:     inspirobot API",
  "*skills:      technologies and frameworks",
  "•",
  "*social:      Check out my github, linkedin, or email",
  "•",
  "*theme:       change style background color. See all available themes by typing 'theme'",
  "*banner:      display banner",
  "*history:     view command history",
  "*clear:       clear history",

  //     "cv/linkedin: resume [pdg - 197kb]",
  //   "matrix:      only for real hackers (make it rain ones and zeros)",
  //   "projects:    other apps I've made",
  //   "secret:      I hid a secret link somewhere on this page. Can you find it?",
];

export const theme = [
  "Pick from any of the following themes by using the syntax 'theme [name-here]'",
  "['Dark','Light','Ocean','Sunset']",
];

export const social = [" ['<a>Github</a>','LinkedIn','Email'] "];

export const banner = [
  "                .----.",
  "    .---------. | == |",
  '    |.-"""""-.| |----|',
  "    ||       || | == |",
  "    ||       || |----|",
  "    |'-.....-'| |::::|",
  '    `"")---(""` |___.|',
  '   /:::::::::::\\" _  "',
  "  /:::=======:::\\ \\`\\",
  '  `"""""""""""""`  "-" ',

  // "                .----. ",
  // "    .---------. | == | ",
  // "    |.-'''''-.| |----|     ____                     __    _                   __   ",
  // "    ||       || | == |    /  _/___  ____ __   __   / /   (_)    ______  ___  / /_  ",
  // "    ||       || |----|    / // __ / __ `/  | /  / / /   / / | / / __  / _  / __  |  ",
  // "    |'-.....-'| |::::|  _/ // /_/ / /_// | |/ /  / /___/ /| |/ / / / /  __/ / / /  ",
  // "    `'')---(''` |___.| /____/____/__,_/  |___/  /_____/_/ |___/_/ /_/___/ _/ /_/   ",
  // "   /:::::::::::\\  '_'                                                             ",
  // "  /:::=======:::\\  ` `    ",
  // "  `'''''''''''''`\\  '-'   ",
];

export const error = ["not an available command"];
