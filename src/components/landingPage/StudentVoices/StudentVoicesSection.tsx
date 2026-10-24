import { Pin, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import reviews from "../../../constants/studentsVoices.json";
import "./StudentVoicesSection.css";

export default function StudentVoicesSection() {
  const { t } = useTranslation();

  return (
    <section
      className="student-voices"
      id="student-voices"
      aria-labelledby="student-voices-title"
    >
      <div className="student-voices-content">
        <header className="student-voices-heading">
          <h2 className="student-voices-title" id="student-voices-title">
            {t("studentVoices.title")}
          </h2>
          <p className="student-voices-description">
            {t("studentVoices.description")}
          </p>
        </header>

        <ul
          className="student-voices-list"
          aria-label={t("studentVoices.reviewsLabel")}
        >
          {reviews.map(({ key, initial, tone, detail, quote }) => (
            <li className="student-voices-item" key={key}>
              <article
                className={`student-review student-review-${tone}`}
                aria-labelledby={`student-review-${key}-name`}
              >
                <Pin className="student-review-pin" aria-hidden="true" />

                <span
                  className="student-review-rating"
                  role="img"
                  aria-label={t("studentVoices.rating")}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      size={12}
                      strokeWidth={1.5}
                      fill="currentColor"
                    />
                  ))}
                </span>

                <blockquote className="student-review-quote">
                  {quote}
                </blockquote>

                <footer className="student-review-footer">
                  <span className="student-review-avatar" aria-hidden="true">
                    {initial}
                  </span>
                  <div className="student-review-identity">
                    <h3 id={`student-review-${key}-name`}>
                      {t(`studentVoices.reviews.${key}.name`)}
                    </h3>
                    <p>{detail}</p>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
