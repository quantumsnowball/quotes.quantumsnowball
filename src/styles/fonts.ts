export const fonts = [
  // provided by create-react-app
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
  // source 1
  "baloo-bhaina",
  "josefin-slab",
  "arvo",
  "lato",
  "volkhov",
  "abril-fatface",
  "droid-sans-mono",
  "anton",
  // source 2
  "Arial",
  "Arial Black",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Impact",
  "Times New Roman",
  "Didot",
  "Georgia",
  "American Typewriter",
  "Andale Mono",
  "Courier",
  "Lucida Console",
  "Monaco",
  "Bradley Hand",
  "Brush Script MT",
  "Luminari",
  "Comic Sans MS",
]

export const getRandomFont = () =>
  fonts[Math.floor(Math.random() * fonts.length)]
