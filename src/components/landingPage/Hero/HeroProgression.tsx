import { ChevronRight } from "lucide-react";

const steps = [
  { label: "01. Learn to Code", variant: "is-current" },
  { label: "02. Think Smarter", variant: "is-muted is-second" },
  { label: "03. Solve Better", variant: "is-muted is-third" },
  { label: "04. Compete & Win", variant: "is-final" },
];

export default function HeroProgression() {
  return (
    <ol className="hero-progression" aria-label="Learning progression">
      {steps.map(({ label, variant }, index) => (
        <li
          className={`hero-progression-item ${variant}`}
          key={label}
          aria-current={index === 0 ? "step" : undefined}
        >
          <span className="hero-progression-step">
            <span className="hero-progression-dot" aria-hidden="true" />
            <span className="hero-progression-label">{label}</span>
          </span>
          {index < steps.length - 1 && (
            <ChevronRight className="hero-progression-arrow" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}