// All colors sampled from the original mockup.
export const colors = {
  black: "#000000",
  frame: "#444444", // outer dark border
  photoBg: "#1D1B1E", // left photo panel
  cream: "#FFFFE4", // right panel + home circle
  bar: "#E6F9FA", // light blue browser bar
  green: "#95FF6F",
  yellow: "#FFCA1C",
  purple: "#8998FD",
  pink: "#EF58F7",
};

// The three circles in the bar. Order = left to right.
export const pages = [
  { path: "/about", label: "About Me", color: colors.green },
  { path: "/projects", label: "Projects", color: colors.yellow },
  { path: "/contact", label: "Contact Me", color: colors.purple },
];
