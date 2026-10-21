import { CodeXml, GraduationCap, MapPin, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const benefits = [
  { labelKey: "hero.benefits.ages", Icon: GraduationCap },
  { labelKey: "hero.benefits.community", Icon: UsersRound },
];

export default function HeroActions() {
  const { t } = useTranslation();

  return (
    <div className="hero-actions-group">
      <div className="hero-actions">
        <Link className="hero-action hero-action-primary" to="/#about">
          <span>{t("hero.actions.startLearning")}</span>
          <CodeXml aria-hidden="true" size={32} strokeWidth={1.8} />
        </Link>
        <Link className="hero-action hero-action-secondary" to="/#projects">
          <MapPin aria-hidden="true" size={20} strokeWidth={2} />
          <span>{t("hero.actions.exploreChallenges")}</span>
        </Link>
      </div>
      <ul className="hero-benefits" aria-label={t("hero.benefitsLabel")}>
        {benefits.map(({ labelKey, Icon }) => (
          <li className="hero-benefit" key={labelKey}>
            <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
            <span>{t(labelKey)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}