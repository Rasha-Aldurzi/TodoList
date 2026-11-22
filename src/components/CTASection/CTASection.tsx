import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to get things done?</h2>

        <p>
          Create a free account and plan your first week in under five minutes.
        </p>
      </div>

      <button className="cta-button">
        Create free account
      </button>
    </section>
  );
}

export default CTASection;