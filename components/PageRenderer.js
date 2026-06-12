import Link from "next/link";
import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import Breadcrumbs from "./Breadcrumbs";

export default function PageRenderer({ pageData }) {
  if (!pageData) {
    return (
      <div className="page-error">
        <h1>Page Not Found</h1>
        <p>The requested resource could not be found or has been moved.</p>
      </div>
    );
  }

  const { title, description, sections, relatedLinks, nextSteps } = pageData;

  return (
    <article className="page-article">
      <Breadcrumbs title={title} />
      
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </header>

      <div className="page-content">
        {sections &&
          sections.map((section, idx) => (
            <section key={idx} className="content-section">
              {section.heading && <h2 className="section-heading">{section.heading}</h2>}
              
              {section.body && (
                <p 
                  className="section-body" 
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              )}
              
              {section.list && (
                <ul className="section-list">
                  {section.list.map((item, itemIdx) => (
                    <li 
                      key={itemIdx} 
                      className="section-list-item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}

              {section.callout && (
                <Callout type={section.callout.type} text={section.callout.text} />
              )}

              {section.code && <CodeBlock code={section.code} />}
            </section>
          ))}
          
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="related-links-section">
            <h2 className="section-heading">Related Documentation</h2>
            <ul className="related-links-list">
              {relatedLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="related-link-item">
                  <Link href={link.href} className="related-link-anchor">
                    {link.text} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {nextSteps && nextSteps.length > 0 && (
          <section className="next-steps-section">
            <h2 className="section-heading">Next Steps</h2>
            <div className="next-steps-grid">
              {nextSteps.map((step, stepIdx) => (
                <Link key={stepIdx} href={step.href} className="next-step-card">
                  <h4>{step.text}</h4>
                  {step.description && <p>{step.description}</p>}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
