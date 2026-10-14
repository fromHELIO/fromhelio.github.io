import BouncyText from "../components/BouncyText.jsx";
import profilePhoto from "../assets/hero-image.jpg";
const PHOTO = profilePhoto;

const skills = [
  { label: "Full Stack Development", color: "var(--yellow)", stroke: "#B8900E" },
  { label: "UI/UX Design", color: "var(--purple)", stroke: "#5C69C9" },
  { label: "Database Management", color: "var(--pink)", stroke: "#B13BB8" },
  { label: "Vibecoding", color: "var(--green)", stroke: "#5DB43F" },
];

export default function Home() {
  return (
    <main className="frame">
      <section className="card">
        <div className="photo">
          {PHOTO ? (
            <img className="photo__img" src={PHOTO} alt="Eina Loux Ruiz" />
          ) : (
            <div className="photo__placeholder">
              <span className="photo__icon" aria-hidden="true">✦</span>
              <span>Your photo here</span>
              <small>see the comment at the top of Home.jsx</small>
            </div>
          )}
        </div>

        <div className="intro">
          <h1 className="name">
            <span className="name__first">
              <BouncyText text="Eina Loux" delay={500} />
            </span>
            <span className="name__last">
              <BouncyText text="Ruiz" delay={950} step={60} />
            </span>
          </h1>

          <p className="degree slide-up" style={{ animationDelay: "1250ms" }}>
            <em>BS Computer Science</em>
            <span>Holy Angel University</span>
          </p>

          <ul className="skills">
            {skills.map((s, i) => (
              <li
                key={s.label}
                className="skill"
                style={{
                  "--c": s.color,
                  "--outline": s.stroke,
                  animationDelay: `${1450 + i * 120}ms`,
                }}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
