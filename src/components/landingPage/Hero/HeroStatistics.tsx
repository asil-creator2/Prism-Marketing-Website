import { CalendarDays, CodeXml, ContactRound, UsersRound } from "lucide-react";
import { useTranslation } from "react-i18next";

const statistics = [
  { value: "500 +", labelKey: "hero.statistics.youngCoders", Icon: UsersRound },
  { value: "100 +", labelKey: "hero.statistics.challenges", Icon: CodeXml },
  { value: "20 +", labelKey: "hero.statistics.events", Icon: CalendarDays },
  { value: "10 +", labelKey: "hero.statistics.mentors", Icon: ContactRound },
];

export default function HeroStatistics() {
  const { t } = useTranslation();

  return (
    <ul className="hero-statistics h-auto" aria-label={t("hero.statisticsLabel")}>
      {statistics.map(({ value, labelKey, Icon }) => (
        <li className="hero-statistic" key={labelKey}>
          <span className="hero-statistic-icon" aria-hidden="true">
            <Icon size={50} strokeWidth={2.4} />
          </span>
          <span className="hero-statistic-copy">
            <strong className="hero-statistic-value">{value}</strong>
            <span className="hero-statistic-label">{t(labelKey)}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}