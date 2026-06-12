import CodeBlock from "./CodeBlock";
import Callout from "./Callout";

export default function PageRenderer({ pageData }) {
  if (!pageData) {
    return (
      <div className="page-error">
        <h1>Page Not Found</h1>
        <p>The requested resource could not be found or has been moved.</p>
      </div>
    );
  }

  const { title, description, sections } = pageData;

  return (
    <article className="page-article">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </header>

      <div className="page-content">
        {sections &&
          sections.map((section, idx) => (
            <section key={idx} className="content-section">
              {section.heading && <h2 className="section-heading">{section.heading}</h2>}
              {section.body && <p className="section-body">{section.body}</p>}
              
              {section.list && (
                <ul className="section-list">
                  {section.list.map((item, itemIdx) => (
                    <li key={itemIdx} className="section-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <Callout type={section.callout.type} text={section.callout.text} />
              )}

              {section.code && <CodeBlock code={section.code} />}
            </section>
          ))}
      </div>
    </article>
  );
}
