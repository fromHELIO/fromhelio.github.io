// Shared blank page for About Me / Projects / Contact Me.
// The background is the color of the circle that opened it.
// (The bar is drawn once in App.jsx, so it isn't included here.)
// When you're ready to fill one in, make its own file (e.g. pages/About.jsx)
// and swap it into the <Route> in App.jsx.
export default function BlankPage({ page }) {
  return (
    <main className="subpage" style={{ "--page": page.color }}>
      <div className="subpage__inner">
        <h1 className="subpage__title slide-in">{page.label}</h1>

        {/* Your content goes here */}
        <div className="subpage__content slide-in" style={{ animationDelay: "350ms" }} />
      </div>
    </main>
  );
}