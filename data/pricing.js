// VectorStack Pricing Plans Data

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Ideal for local development, prototyping, and testing RAG applications.",
    // TEST CHANGE IDEA:
    // Change "100 search requests per minute"
    // to "30 search requests per minute"
    // to test pricing rate limit updates.
    features: [
      "100 search requests per minute",
      "1 GB document storage limit",
      "1 active vector index",
      "Default embedding model only",
      "Community forum support"
    ],
    cta: "Start Prototyping",
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    period: "month",
    description: "Designed for production applications requiring high availability and scale.",
    features: [
      "10,000 search requests per minute",
      "100 GB document storage limit",
      "Unlimited vector indexes",
      "Select custom embedding models",
      "Webhook event notifications",
      "24/7 email support with 4h SLA"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "For organizations needing dedicated infrastructure, custom compliance, and SLAs.",
    features: [
      "Custom queries per second (unlimited burst)",
      "Multi-terabyte document storage options",
      "Dedicated single-tenant VPC deployment",
      "Custom compliance controls (SOC2, HIPAA, GDPR)",
      "Dedicated Technical Account Manager",
      "99.99% uptime guarantee SLA"
    ],
    cta: "Contact Sales",
    popular: false
  }
];
