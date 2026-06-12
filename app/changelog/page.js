import { changelogData } from "../../data/changelog";

export const metadata = {
  title: "Changelog & Updates"
};

export default function ChangelogPage() {
  return (
    <div className="index-page-container">
      <header className="page-header">
        <h1 className="page-title">Changelog</h1>
        <p className="page-description">
          Follow the release cycle, upgrades, additions, and updates of the VectorStack developer platform.
        </p>
      </header>

      <div className="changelog-feed">
        {changelogData.map((item, idx) => (
          <div key={idx} className="changelog-item">
            <div className="changelog-meta">
              <span className="changelog-version">v{item.version}</span>
              <span className="changelog-date">{item.date}</span>
            </div>
            <h3 className="changelog-title">{item.title}</h3>
            <p className="changelog-desc">{item.description}</p>

            <div className="changelog-categories">
              {item.releases.map((rel, relIdx) => (
                <div
                  key={relIdx}
                  className={`changelog-category ${rel.category.toLowerCase()}`}
                >
                  <h4>{rel.category}</h4>
                  <ul className="changelog-category-list">
                    {rel.items.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
