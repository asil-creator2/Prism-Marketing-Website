import { CalendarDays, CodeXml, ContactRound, UsersRound } from "lucide-react";

const statistics = [
  { value: "500 +", label: "Young Coders", Icon: UsersRound },
  { value: "100 +", label: "Challenges", Icon: CodeXml },
  { value: "20 +", label: "Events", Icon: CalendarDays },
  { value: "10 +", label: "Mentors", Icon: ContactRound },
];

export default function HeroStatistics() {
  return (
    <ul className="hero-statistics h-auto" aria-label="Program statistics">
      {statistics.map(({ value, label, Icon }) => (
        <li className="hero-statistic" key={label}>
          <span className="hero-statistic-icon" aria-hidden="true">
            <Icon size={50} strokeWidth={2.4} />
          </span>
          <span className="hero-statistic-copy">
            <strong className="hero-statistic-value">{value}</strong>
            <span className="hero-statistic-label">{label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}