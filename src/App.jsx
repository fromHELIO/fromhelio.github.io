import { useCallback, useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlankPage from "./pages/BlankPage.jsx";
import BrowserBar from "./components/BrowserBar.jsx";
import { pages } from "./theme.js";

const FILL_MS = 750; // how long the color takes to flood the screen

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fill, setFill] = useState(null); // { color, x, y } while a transition runs
  const [target, setTarget] = useState(null); // page we're heading to
  const timers = useRef([]);

  // Called by every circle in the bar. `event` tells us where the click came
  // from, so the color grows out of the circle you pressed.
  const goTo = useCallback(
    (path, color, event) => {
      if (fill || path === location.pathname) return;
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;

      setTarget(path); // circles start sliding right away
      setFill({ color, x, y });
      timers.current.push(
        setTimeout(() => {
          navigate(path);
          window.scrollTo(0, 0);
          setTarget(null);
        }, FILL_MS),
        // keep the overlay a beat longer, then fade it so the new page shows
        setTimeout(() => setFill(null), FILL_MS + 250)
      );
    },
    [fill, location.pathname, navigate]
  );

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <div className="app">
      <BrowserBar goTo={goTo} active={target ?? location.pathname} />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        {pages.map((p) => (
          <Route key={p.path} path={p.path} element={<BlankPage page={p} />} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>

      {fill && (
        <div
          className="color-fill"
          style={{
            "--fill-color": fill.color,
            "--fill-x": `${fill.x}px`,
            "--fill-y": `${fill.y}px`,
            "--fill-ms": `${FILL_MS}ms`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
