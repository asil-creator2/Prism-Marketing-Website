import { useTranslation } from "react-i18next";
import "./Footer.css";

const programLinks = [
  "bronze",
  "silver",
  "usaco",
  "math",
] as const;

const communityLinks = [
  "weekend",
  "safety",
  "parents",
  "mentors",
] as const;

const legalLinks = ["privacy", "safety", "terms"] as const;

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-main">
          <section className="site-footer-brand" aria-labelledby="footer-brand">
            <h2 id="footer-brand">{t("footer.brand")}</h2>
            <p className="site-footer-description">
              {t("footer.description")}
            </p>
            <p className="site-footer-contact">
              <a href="mailto:contact@ps-prism.club">contact@ps-prism.club</a>
              <span aria-hidden="true"> • </span>
              {t("footer.nonProfit")}
            </p>
          </section>

          <nav className="site-footer-links" aria-label={t("footer.programsLabel")}>
            <h3>{t("footer.programsLabel")}</h3>
            <ul>
              {programLinks.map((key) => (
                <li key={key}>
                  <a href="#about">{t(`footer.programs.${key}`)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer-links" aria-label={t("footer.communityLabel")}>
            <h3>{t("footer.communityLabel")}</h3>
            <ul>
              {communityLinks.map((key) => (
                <li key={key}>
                  <a href="#student-voices">{t(`footer.community.${key}`)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="site-footer-newsletter" aria-labelledby="footer-newsletter-title">
            <h3 id="footer-newsletter-title">{t("footer.newsletterTitle")}</h3>
            <p>{t("footer.newsletterDescription")}</p>
            <label className="site-footer-email-label" htmlFor="footer-email">
              {t("footer.emailLabel")}
            </label>
            <input
              id="footer-email"
              type="email"
              autoComplete="email"
              placeholder={t("footer.emailPlaceholder")}
              disabled
            />
            <button type="button" disabled>
              {t("footer.subscribe")}
            </button>
            <p className="site-footer-coming-soon">{t("footer.comingSoon")}</p>
          </section>
        </div>

        <div className="site-footer-bottom">
          <p>{t("footer.copyright", { year })}</p>
          <ul aria-label={t("footer.legalLabel")}>
            {legalLinks.map((key) => (
              <li key={key}>{t(`footer.legal.${key}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
