import Link from "next/link";
import { pricingPlans } from "../../data/pricing";

export const metadata = {
  title: "Pricing Plans & Tiers"
};

export default function PricingPage() {
  return (
    <div className="index-page-container">
      <header className="page-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 className="page-title">Predictable Pricing for Developers</h1>
        <p className="page-description" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Free plan includes 100 search requests per minute and 1 GB document storage. Pro plan includes 10,000 search requests per minute and 100 GB document storage. Enterprise plans include dedicated capacity and custom compliance controls.
        </p>
      </header>

      <div className="pricing-grid">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
            {plan.popular && <span className="popular-badge">Popular</span>}
            <h3>{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <div className="price-row">
              <span className="price-val">{plan.price}</span>
              <span className="price-period">{plan.period !== "forever" && plan.period !== "tailored" ? `/ ${plan.period}` : plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx}>{feature}</li>
              ))}
            </ul>
            <Link href="/docs/getting-started" className="pricing-cta">
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
