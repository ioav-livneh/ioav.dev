const birthday = new Date("1999-08-26");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs); // miliseconds from epoch
let calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970);

export const about = [
  `My name is Ioav Livneh. I am ${calculateAge} years old. This is my terminal portfolio! I am a reader and lifelong learner interested in all subjects related to AI, history, psychology, philosophy, and music.`,
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
  "history:     view command history",
  "clear:       clear history",

  //     "cv/linkedin: resume [pdg - 197kb]",
  //   "matrix:      only for real hackers (make it rain ones and zeros)",
  //   "projects:    other apps I've made",
  //   "secret:      I hid a secret link somewhere on this page. Can you find it?",
];

export const timeline = [
  "2022: Worked as Web Developer at ITLIZE (Vitacost)",
  "2021: Graduated NYIT with Bachelor's in Computer Science",
  "2019: Completed Ironhack Web Development Bootcamp",
  "2018: Worked as a student tutor at NYIT",
  "2017: Began studying at New York Institute of Technology",
  "Do you want to continue? (y/n)",
];

export const timeline2 = [
  "2017: Graduated AIS High School in Costa Rica",
  "2015: C++ bootcamp",
  "2013: Java bootcamp",
  "2003: Moved to Costa Rica",
  "1999: Born in Israel",
  "Do you want to continue? (y/n)",
];

export const timeline3 = [
  "1995: Brendan Eich invents JavaScript",
  "1983: Internet is born",
  "1945: Von Neumann designs computer architecture",
  "1936: Alan Turing invents the turing machine (aka computer)",
  "1843: Ada Lovelace invents the first algorithm (computer program)",
  "Do you want to continue? (y/n)",
];

export const timeline4 = [
  "1760 AD - 1840 AD: Industrial Revolution",
  "1685 AD - 1815 AD: Enlightenment",
  "1543 AD - 1687 AD: Scientific Revolution",
  "2000 BC - 620 AD: Major world religions are founded",
  "12,000 years ago: Agricultural Revolution ",
  "70,000 years ago: Cognitive Revolution ",
  "Do you want to continue? (y/n)",
];

export const timeline5 = [
  "9.3 - 6.5 million years ago : Humans diverged from chimps, our closest living biological ancestor",
  "85 million years ago: Primates diverged from mammals",
  "325 million years ago: Mammals diverged from reptiles",
  "1.5 billion years ago: Animals diverged from plants and fungi",
  "3.9 billion years ago: The Last Universal Common Ancestor (LUCA), the species from which everything alive today is descended, may live at this time according to genetic evidence.",
  "What came before that? The egg (y/n)",
];

export const theme = [
  "Pick from any of the following themes by using the syntax 'theme [name-here]'",
  "['Dark','Light','Ocean','Sunset']",
];

export const social = [" ['<a>Github</a>','LinkedIn','Email'] "];

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
