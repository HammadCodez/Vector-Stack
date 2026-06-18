"use client";

import { useState } from "react";
import { pricingPlans } from "../data/pricing";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"
  const [selectedPlan, setSelectedPlan] = useState(null); // plan object for checkout modal
  const [workspaceName, setWorkspaceName] = useState("");
  const [region, setRegion] = useState("us-east-1");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionProgress, setProvisionProgress] = useState(0);
  const [provisionSuccess, setProvisionSuccess] = useState(false);

  // Helper to get price display values based on billing cycle
  const getPlanPrice = (plan) => {
    if (plan.name === "Free") {
      return { val: "$0", label: "/ forever" };
    }
    if (plan.name === "Enterprise") {
      return { val: "Custom", label: "tailored requirements" };
    }
    // Pro plan
    if (billingCycle === "yearly") {
      return { val: "$79", label: "/ month, billed yearly ($948)" };
    }
    return { val: "$99", label: "/ month" };
  };

  const handleOpenCheckout = (plan) => {
    setSelectedPlan(plan);
    setWorkspaceName(`${plan.name.toLowerCase()}-index-db`);
    setProvisionSuccess(false);
    setProvisionProgress(0);
    setIsProvisioning(false);
  };

  const handleCloseCheckout = () => {
    if (!isProvisioning) {
      setSelectedPlan(null);
    }
  };

  const startProvisioning = (e) => {
    e.preventDefault();
    if (!workspaceName.trim()) return;

    setIsProvisioning(true);
    setProvisionProgress(0);

    const interval = setInterval(() => {
      setProvisionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setProvisionSuccess(true);
            setIsProvisioning(false);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <section className="home-section-container" style={{ borderBottom: "1px solid var(--border-color)" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="playground-badge">Pricing</span>
        <h2 className="home-section-title" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Simple, Developer-First Pricing
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem" }}>
          Deploy vector instances instantly. Scale search requests, document chunks, and models dynamically.
        </p>

        {/* Toggle Switch */}
        <div className="pricing-toggle-container">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`pricing-toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`pricing-toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
          >
            Yearly
            <span className="discount-tag">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="pricing-grid">
        {pricingPlans.map((plan) => {
          const { val, label } = getPlanPrice(plan);
          return (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              
              <h3>{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              
              <div className="price-row">
                <span className="price-val">{val}</span>
                <span className="price-period">{label}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button onClick={() => handleOpenCheckout(plan)} className="pricing-cta">
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Checkout & Provisioning Simulation Modal */}
      {selectedPlan && (
        <div className="modal-overlay" onClick={handleCloseCheckout}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseCheckout} disabled={isProvisioning}>
              &times;
            </button>

            {!provisionSuccess ? (
              <form onSubmit={startProvisioning}>
                <h3 className="modal-title">Initialize VectorStack Index</h3>
                <p className="modal-subtitle">
                  Provisioning a new instance on the <strong>{selectedPlan.name} Tier</strong>
                </p>

                <div className="modal-pricing-summary">
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
                    <span>Selected Plan:</span>
                    <span>{selectedPlan.name} ({billingCycle})</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    <span>Estimated Rate:</span>
                    <span>{getPlanPrice(selectedPlan).val} {getPlanPrice(selectedPlan).label}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="workspace-name">Index / Workspace Name</label>
                  <input
                    type="text"
                    id="workspace-name"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="e.g. Production-semantic-search"
                    disabled={isProvisioning}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="region">Cloud Service Region</label>
                  <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    disabled={isProvisioning}
                  >
                    <option value="us-east-1">AWS US East (N. Virginia)</option>
                    <option value="us-west-2">AWS US West (Oregon)</option>
                    <option value="eu-central-1">AWS EU Central (Frankfurt)</option>
                    <option value="ap-south-1">AWS Asia Pacific (Mumbai)</option>
                  </select>
                </div>

                {isProvisioning && (
                  <div className="provision-progress-wrapper">
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                      <span>Allocating VPS & Building Vector Ingestion Pipelines...</span>
                      <span>{provisionProgress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${provisionProgress}%` }}></div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary modal-submit-btn"
                  disabled={isProvisioning || !workspaceName}
                >
                  {isProvisioning ? "Provisioning Resources..." : "Confirm & Launch Instance"}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div className="status-dot healthy" style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "#dcfce7", color: "#22c55e", fontSize: "1.75rem", marginBottom: "1.5rem" }}>
                  ✓
                </div>
                <h3 className="modal-title" style={{ color: "#166534" }}>Vector Index Provisioned!</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  Your workspace <code>{workspaceName}</code> has been spin-up in region <strong>{region}</strong>. Ingestion API endpoints are now active.
                </p>
                <div style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "6px", textAlign: "left", fontSize: "0.8125rem", fontFamily: "var(--font-mono)", wordBreak: "break-all", marginBottom: "1.5rem" }}>
                  <span style={{ color: "var(--text-muted)" }}># Connection String:</span>
                  <br />
                  <span>https://{workspaceName}.api.{region}.vectorstack.com/v1</span>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="btn-primary"
                  style={{ width: "100%" }}
                >
                  Go to Documentation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
