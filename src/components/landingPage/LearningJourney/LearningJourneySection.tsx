import { CodeXml, GitBranch, Rocket, Sparkles, Timer, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import LearningJourneyCard from "./LearningJourneyCard";
import "./LearningJourneySection.css";

const learningJourneySteps = [
  { key: "foundation", tone: "cyan", Icon: CodeXml, MilestoneIcon: Rocket },
  { key: "algorithms", tone: "violet", Icon: GitBranch, MilestoneIcon: Sparkles },
  { key: "practice", tone: "pink", Icon: Timer, MilestoneIcon: Timer },
  { key: "contestReady", tone: "green", Icon: Trophy, MilestoneIcon: Trophy },
];

export default function LearningJourneySection() {
  const { t } = useTranslation();

  return (
    <section
      className="learning-journey"
      id="about"
      aria-labelledby="learning-journey-title"
    >
      <div className="learning-journey-content">
        <header className="learning-journey-heading">
          <h2 className="learning-journey-title" id="learning-journey-title">
            {t("learningJourney.title")}
          </h2>
          <p className="learning-journey-description">
            {t("learningJourney.description")}
          </p>
        </header>

        <ol className="journey-timeline" aria-label={t("learningJourney.stepsLabel")}>
          {learningJourneySteps.map(({ key, tone, Icon, MilestoneIcon }, index) => (
            <li className={`journey-item journey-item-${index + 1}`} key={key}>
              <span className={`journey-node journey-node-${tone}`} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <LearningJourneyCard
                stepKey={key}
                tone={tone}
                Icon={Icon}
                MilestoneIcon={MilestoneIcon}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}