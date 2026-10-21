import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import HeroActions from "./HeroActions";
import HeroProgression from "./HeroProgression";
import HeroStatistics from "./HeroStatistics";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-intro">
            <div className="hero-copy">
              <h1 className="hero-title" id="hero-title">
                <span>{t("hero.titleLineOne")}</span>
                <span>
                  {t("hero.titleLineTwoPrefix")} <span className="hero-title-accent">{t("hero.titleAccent")}</span>
                </span>
              </h1>
              <p className="hero-description">{t("hero.description")}</p>
            </div>
            <HeroProgression />
          </div>
          <HeroActions />
        </div>
        <HeroStatistics />
      </div>
    </section>
  );
}