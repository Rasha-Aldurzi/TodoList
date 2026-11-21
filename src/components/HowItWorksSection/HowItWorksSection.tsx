import './HowItWorksSection.css';

const steps = [
  {
    number: 1,
    title: 'Capture it',
    description:
      'Add a task in a few seconds. Pick a project, a priority, and a due date, or leave them for later.',
  },
  {
    number: 2,
    title: 'Plan it',
    description:
      'Group tasks into projects, drag them across the board, and let the calendar show what is coming.',
  },
  {
    number: 3,
    title: 'Finish it',
    description:
      'Start a focus session, check things off, and watch your weekly progress climb.',
  },
];

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <article className="step-card">
      <div className="step-indicator">
        <span className="step-number">{number}</span>
        <span className="step-line" aria-hidden="true" />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <h2 className="how-it-works-title">
        From a loose idea to done in three steps
      </h2>

      <div className="steps-grid">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
}