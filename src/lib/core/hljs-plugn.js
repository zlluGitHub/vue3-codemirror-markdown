export const hljsCssConfig = {
  a11yDark: true,
  a11yLight: true,
  agate: true,
  anOldHope: true,
  androidstudio: true,
  arduinoLight: true,
  arta: true,
  ascetic: true,
  atelierCaveDark: true,
  atelierCaveLight: true,
  atelierDuneDark: true,
  atelierDuneLight: true,
  atelierEstuaryDark: true,
  atelierEstuaryLight: true,
  atelierForestDark: true,
  atelierForestLight: true,
  atelierHeathDark: true,
  atelierHeathLight: true,
  atelierLakesideDark: true,
  atelierLakesideLight: true,
  atelierPlateauDark: true,
  atelierPlateauLight: true,
  atelierSavannaDark: true,
  atelierSavannaLight: true,
  atelierSeasideDark: true,
  atelierSeasideLight: true,
  atelierSulphurpoolDark: true,
  atelierSulphurpoolLight: true,
  atomOneDarkReasonable: true,
  atomOneDark: true,
  atomOneLight: true,
  brownPaper: true,
  codepenEmbed: true,
  colorBrewer: true,
  darcula: true,
  dark: true,
  darkula: true,
  default: true,
  docco: true,
  dracula: true,
  far: true,
  foundation: true,
  githubGist: true,
  github: true,
  gml: true,
  googlecode: true,
  gradientDark: true,
  grayscale: true,
  gruvboxDark: true,
  gruvboxLight: true,
  hopscotch: true,
  hybrid: true,
  idea: true,
  irBlack: true,
  isblEditorDark: true,
  isblEditorLight: true,
  'kimbie.dark': true,
  'kimbie.light': true,
  lightfair: true,
  magula: true,
  monoBlue: true,
  monokaiSublime: true,
  monokai: true,
  nightOwl: true,
  nord: true,
  obsidian: true,
  ocean: true,
  paraisoDark: true,
  paraisoLight: true,
  pojoaque: true,
  purebasic: true,
  qtcreatorDark: true,
  qtcreatorLight: true,
  railscasts: true,
  rainbow: true,
  routeros: true,
  schoolBook: true,
  shadesOfPurple: true,
  solarizedDark: true,
  solarizedLight: true,
  sunburst: true,
  tomorrowNightBlue: true,
  tomorrowNightBright: true,
  tomorrowNightEighties: true,
  tomorrowNight: true,
  tomorrow: true,
  vs: true,
  vs2015: true,
  xcode: true,
  xt256: true,
  zenburn: true
}

export const toKebabCase = (str) => {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1)
  }
  return temp
}
