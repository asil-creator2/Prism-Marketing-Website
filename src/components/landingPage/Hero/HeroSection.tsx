import "./HeroSection.css";
import HeroActions from "./HeroActions";
import HeroProgression from "./HeroProgression";
import HeroStatistics from "./HeroStatistics";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-circuit" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-intro">
            <div className="hero-copy">
              <h1 className="hero-title" id="hero-title">
                <span>Competitive Programming</span>
                <span>
                  For <span className="hero-title-accent">Young Minds</span>
                </span>
              </h1>
              <p className="hero-description">
                Empowering school students and future pioneers through gamified
                code arenas, verified algorithmic pathways, interactive problem
                visualizers, and real-time Grandmaster mentorship.
              </p>
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