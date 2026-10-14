// Splits text into letters that bounce in one after another
// (and hop again when you hover them).
export default function BouncyText({ text, delay = 0, step = 45 }) {
  return (
    <span className="bouncy" aria-label={text}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          className="bouncy__ch"
          aria-hidden="true"
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
