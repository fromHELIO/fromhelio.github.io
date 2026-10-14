import { colors, pages } from "../theme.js";

// The rounded "browser" bar across the top. It lives in App.jsx (not in each
// page) so it stays on screen between pages and the circles can slide.
//
// Docking rule: the active page's circle AND every circle before it sit next to
// the cream Home circle on the left. The rest stay on the right.
//   Home     →  ○                ● ● ●
//   About    →  ○ ●                ● ●
//   Projects →  ○ ● ●                ●
//   Contact  →  ○ ● ● ●
export default function BrowserBar({ goTo, active }) {
  const activeIndex = pages.findIndex((p) => p.path === active); // -1 on Home

  return (
    <nav className="bar" aria-label="Main">
      <button
        className="dot dot--home"
        style={{ "--dot": colors.cream, "--i": 0 }}
        onClick={(e) => goTo("/", colors.cream, e)}
        aria-label="Home"
        data-label="Home"
        aria-current={active === "/" ? "page" : undefined}
      />

      {pages.map((p, i) => {
        const docked = i <= activeIndex;
        // slot = how many circles away from the edge it's anchored to
        const slot = docked ? i + 1 : pages.length - 1 - i;
        return (
          <button
            key={p.path}
            className={`dot dot--nav ${docked ? "is-docked" : "is-right"}`}
            style={{
              "--dot": p.color,
              "--i": i + 1,
              "--slot": slot,
              // left-most circle moves first when docking, last when undocking
              "--slide-delay": `${(docked ? i : pages.length - 1 - i) * 70}ms`,
            }}
            onClick={(e) => goTo(p.path, p.color, e)}
            aria-label={p.label}
            data-label={p.label}
            aria-current={active === p.path ? "page" : undefined}
          />
        );
      })}
    </nav>
  );
}