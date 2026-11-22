import './PricingSection.css';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For planning your own week.',
    features: [
      'Unlimited tasks and notes',
      'Up to 3 active projects',
      'Calendar and reminders',
      'Dark and light themes',
    ],
    buttonText: 'Get started free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$6',
    period: 'per month, billed yearly',
    description: 'For people who run several projects.',
    features: [
      'Everything in Free',
      'Unlimited projects',
      'Reports and export',
      'Share projects with your team',
      'Priority support',
    ],
    buttonText: 'Start Pro trial',
    popular: true,
  },
];

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">
        Start free. Upgrade when you need more.
      </h2>

      <div className="pricing-cards">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? 'pro' : ''}`}
            key={plan.name}
          >
            <h3 className="pricing-plan-name">
              {plan.name}

              {plan.popular && (
                <span className="popular-badge">
                  Most popular
                </span>
              )}
            </h3>

            <div className="pricing-price">
              {plan.price}
              <small>{plan.period}</small>
            </div>

            <p className="pricing-description">
              {plan.description}
            </p>

            <div className="pricing-features">
              {plan.features.map((feature) => (
                <div className="pricing-feature" key={feature}>
                  <span className="feature-check">
                    <CheckIcon />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            <button
              className={`pricing-button ${
                plan.popular ? 'primary' : 'secondary'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;