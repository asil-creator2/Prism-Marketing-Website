import { useTranslation } from "react-i18next";
import { partnerLogo } from "../../../assets";
import partners from "../../../constants/partners.json";
import "./OurPartnersSection.css";

export default function OurPartnersSection() {
  const { t } = useTranslation();

  return (
    <section
      className="our-partners"
      id="partners"
      aria-labelledby="our-partners-title"
    >
      <div className="our-partners-content">
        <header className="our-partners-heading">
          <h2 className="our-partners-title" id="our-partners-title">
            {t("partners.titlePrefix")}{" "}
            <span>{t("partners.titleAccent")}</span>
          </h2>
          <p className="our-partners-description">
            {t("partners.description")}
          </p>
        </header>

        <div className="our-partners-list">
          {partners.map((partner) => (
            <article
              className="partner-card"
              key={partner.key}
              aria-labelledby={`partner-${partner.key}-name`}
            >
              <div className="partner-card-topline">
                <img
                  className="partner-card-logo"
                  src={partnerLogo}
                  alt={partner.logoAlt}
                />
                <span className="partner-card-status">{partner.status}</span>
              </div>

              <h3 id={`partner-${partner.key}-name`}>{partner.name}</h3>
              <p className="partner-card-description">
                {partner.description}
              </p>
              <span className="partner-card-website" aria-disabled="true">
                {t("partners.viewWebsite")}
              </span>
            </article>
          ))}

          <article
            className="partner-support-card"
            aria-labelledby="partner-support-title"
          >
            <h3 id="partner-support-title">{t("partners.supportTitle")}</h3>
            <p>{t("partners.supportDescription")}</p>
            <button
              className="partner-support-button"
              type="button"
              
            >
              {t("partners.becomeSupporter")}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
