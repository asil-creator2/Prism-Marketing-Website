import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
  { key: "hero.progression.learn", variant: "is-current" },
  { key: "hero.progression.think", variant: "is-muted is-second" },
  { key: "hero.progression.solve", variant: "is-muted is-third" },
  { key: "hero.progression.compete", variant: "is-final" },
];

export default function HeroProgression() {
  const { t } = useTranslation();

  return (
    <ol className="hero-progression" aria-label={t("hero.progressionLabel")}>
      {steps.map(({ key, variant }, index) => (
        <li
          className={`hero-progression-item ${variant}`}
          key={key}
          aria-current={index === 0 ? "step" : undefined}
        >
          <span className="hero-progression-step">
            <span className="hero-progression-dot" aria-hidden="true" />
            <span className="hero-progression-label">{t(key)}</span>
          </span>
          {index < steps.length - 1 && (
            <ChevronRight className="hero-progression-arrow" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}