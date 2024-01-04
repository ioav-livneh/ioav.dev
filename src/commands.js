const birthday = new Date("1999-08-26");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs); // miliseconds from epoch
let calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970);

export const about = [
  `My name is Ioav Livneh. I am ${calculateAge} years old. This is my terminal portfolio! I am a very interesting person who does many interesting things and is cool to hang out with.`,
];

export const help = [
  "about:        Who is Ioav?",
  "*timeline:    work experience, education and other fun facts",
  "*skills:      technologies and frameworks",
  "*social:      Check out my github, linkedin, or email",
  "*inspire:     inspirobot API",
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

export const timeline = [
  "2023: React Course",
  "2022: ITLIZE and Vitacost",
  "2021: Graduated with Bachelor's in Computer Science from NYIT",
  "2019: Completed Ironhack Web Development Bootcamp",
  "2017: Graduated AIS High School in Costa Rica",
  "More? (y/n)",
];

export const timeline2 = [
  "2015: ",
  "2013: ",
  "2010: ",
  "2008: ",
  "1999: I was born in Israel",
  "More? (y/n)",
];

export const timeline3 = [
  "1969: ",
  "1965: ",
  "1943: ",
  "1925: ",
  "1893: Ada Lovelace invented the algorithm",
  "More? (y/n)",
];

export const timeline4 = [
  "Industrial Revolution (xxxx-xxxx): ",
  "Scientific Revolution (xxxx-xxxx): ",
  "Spiritual Revolution (xxxx-xxxx): ",
  "Agricultural Revolution (xxxx-xxxx): ",
  "Cognitive Revolution (xxxx-xxxx): ",
  "More? (y/n)",
];

export const timeline5 = [
  "100,000BCE: Humans separate from closest biological ancestor with chimps",
  "xxx: Humans branch from Mammals",
  "xxx: Humans branch from Birds",
  "xxx: Humans branch from Reptiles",
  "xxx: Humans branch from single celled life",
  "What came before that? The egg (y/n)",
];

export const theme = [
  "Pick from any of the following themes by using the syntax 'theme [name-here]'",
  "['Dark','Light','Ocean','Sunset']",
];

export const social = [" ['<a>Github</a>','LinkedIn','Email'] "];

export const banner = [
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

export const error = ["not an available command"];
