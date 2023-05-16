export enum Tags {
  a = "a",
  abbr = "abbr",
  address = "address",
  area = "area",
  article = "article",
  aside = "aside",
  audio = "audio",
  b = "b",
  base = "base",
  bdi = "bdi",
  bdo = "bdo",
  blockquote = "blockquote",
  body = "body",
  br = "br",
  button = "button",
  canvas = "canvas",
  caption = "caption",
  cite = "cite",
  clipPath = "clipPath",
  code = "code",
  col = "col",
  colgroup = "colgroup",
  data = "data",
  datalist = "datalist",
  dd = "dd",
  defs = "defs",
  del = "del",
  descriptionList = "dl",
  details = "details",
  dfn = "dfn",
  dialog = "dialog",
  div = "div",
  dl = "dl",
  dt = "dt",
  em = "em",
  embed = "embed",
  emphasis = "em",
  fieldset = "fieldset",
  figcaption = "figcaption",
  figure = "figure",
  footer = "footer",
  form = "form",
  g = "g",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  head = "head",
  header = "header",
  hgroup = "hgroup",
  hr = "hr",
  html = "html",
  i = "i",
  iframe = "iframe",
  img = "img",
  input = "input",
  ins = "ins",
  kbd = "kbd",
  label = "label",
  legend = "legend",
  li = "li",
  link = "a",
  listDescription = "dd",
  listDescriptionTitle = "dt",
  listItem = "li",
  main = "main",
  map = "map",
  mark = "mark",
  mask = "mask",
  math = "math",
  menu = "menu",
  menuitem = "menuitem",
  meta = "meta",
  meter = "meter",
  nav = "nav",
  noscript = "noscript",
  object = "object",
  oblique = "em",
  ol = "ol",
  optgroup = "optgroup",
  option = "option",
  orderedList = "ol",
  output = "output",
  p = "p",
  paragraph = "p",
  param = "param",
  path = "path",
  picture = "picture",
  pre = "pre",
  progress = "progress",
  q = "q",
  rb = "rb",
  rect = "rect",
  rp = "rp",
  rt = "rt",
  rtc = "rtc",
  ruby = "ruby",
  s = "s",
  samp = "samp",
  script = "script",
  section = "section",
  select = "select",
  slot = "slot",
  small = "small",
  source = "source",
  span = "span",
  strong = "strong",
  style = "style",
  sub = "sub",
  summary = "summary",
  sup = "sup",
  svg = "svg",
  symbol = "symbol",
  table = "table",
  tbody = "tbody",
  td = "td",
  template = "template",
  textarea = "textarea",
  tfoot = "tfoot",
  th = "th",
  thead = "thead",
  time = "time",
  title = "title",
  tr = "tr",
  track = "track",
  u = "u",
  ul = "ul",
  unorderedList = "ul",
  // var = "var",
  video = "video",
  wbr = "wbr",
}

// export type HTMLTags = Diff<Tags, keyof HTMLElementTagNameMap>;
// export type HTMLTags = keyof Tags & keyof HTMLElementTagNameMap;
export type TypeScriptHTMLTags<T extends Tags> = (
  {
    [P in keyof HTMLElementTagNameMap]: P
  } & {
    [P in T]: never
  }
);

export type HTMLTags = TypeScriptHTMLTags<Tags>;

export const createElementFromTag = (tag: Tags) => (tag as keyof JSX.IntrinsicElements);