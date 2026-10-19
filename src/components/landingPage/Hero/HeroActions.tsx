import { CodeXml, GraduationCap, UsersRound, Webcam } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { label: "Curated for Ages 10–18", Icon: GraduationCap },
  { label: "Global Youth Community", Icon: UsersRound },
];

export default function HeroActions() {
  return (
    <div className="hero-actions-group">
      <div className="hero-actions">
        <Link className="hero-action hero-action-primary" to="/#about">
          <span>Start Learning</span>
          <CodeXml aria-hidden="true" size={32} strokeWidth={1.8} />
        </Link>
        <Link className="hero-action hero-action-secondary" to="/#projects">
          <Webcam  aria-hidden="true" size={20} strokeWidth={2} />
          <span>Explore Challenges</span>
        </Link>
      </div>
      <ul className="hero-benefits" aria-label="Program highlights">
        {benefits.map(({ label, Icon }) => (
          <li className="hero-benefit" key={label}>
            <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}