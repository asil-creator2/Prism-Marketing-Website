import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LearningJourneyCardProps {
  stepKey: string;
  tone: string;
  Icon: LucideIcon;
  MilestoneIcon: LucideIcon;
}

export default function LearningJourneyCard({
  stepKey,
  tone,
  Icon,
  MilestoneIcon,
}: LearningJourneyCardProps) {
  const { t } = useTranslation();

  return (
    <article
      className={`journey-card journey-card-${tone}`}
      aria-labelledby={`journey-${stepKey}-title`}
    >
      <div className="journey-card-topline">
        <span className="journey-category">{t(`learningJourney.steps.${stepKey}.category`)}</span>
        <span className="journey-level">{t(`learningJourney.steps.${stepKey}.level`)}</span>
      </div>

      <div className="journey-card-heading">
        <h3 id={`journey-${stepKey}-title`}>{t(`learningJourney.steps.${stepKey}.title`)}</h3>
        <span className="journey-card-icon" aria-hidden="true">
          <Icon size={16} strokeWidth={1.8} />
        </span>
      </div>

      <p className="journey-card-description">
        {t(`learningJourney.steps.${stepKey}.description`)}
      </p>

      <div className="journey-milestone">
        <MilestoneIcon aria-hidden="true" size={14} strokeWidth={1.8} />
        <p>
          <span>{t("learningJourney.milestoneLabel")}:</span>{" "}
          {t(`learningJourney.steps.${stepKey}.milestone`)}
        </p>
      </div>
    </article>
  );
}