import './LandingPage.css';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection';
import RemindersSection from '../components/RemindersSection/RemindersSection';

const tasks = [
  { title: 'Design homepage UI', priority: 'High', completed: false },
  { title: 'Create wireframes', priority: 'High', completed: false },
  { title: 'Research competitor apps', priority: 'Medium', completed: true },
  { title: 'Write API documentation', priority: 'Low', completed: true },
];

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="landing-logo" href="/" aria-label="TodoList home">
      <span className="landing-logo-icon">
        <CheckIcon />
      </span>
      <span>TodoList</span>
    </a>
  );
}

function Button({
  children,
  variant = 'primary',
  href,
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href: string;
}) {
  return (
    <a className={`landing-button landing-button--${variant}`} href={href}>
      {children}
    </a>
  );
}

function TaskPreview() {
  return (
    <div className="preview-card task-preview">
      <div className="preview-heading">
        <strong>Today</strong>
        <span>2 of 4 done</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="Today's task progress"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span />
      </div>

      <div className="preview-task-list">
        {tasks.map((task) => (
          <div className="preview-task" key={task.title}>
            <span
              className={`task-checkbox ${
                task.completed ? 'task-checkbox--checked' : ''
              }`}
              aria-hidden="true"
            >
              {task.completed && <CheckIcon size={13} />}
            </span>

            <span
              className={`task-title ${
                task.completed ? 'task-title--completed' : ''
              }`}
            >
              {task.title}
            </span>

            <span className={`priority priority--${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressPreview() {
  const bars = [25, 30, 45, 55, 72, 80, 84];

  return (
    <div className="preview-card progress-preview">
      <h2 className="preview-card-title">Weekly progress</h2>

      <div className="chart">
        {bars.map((height, index) => (
          <div className="chart-column" key={index}>
            <span style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>

      <div className="progress-summary">
        <strong>84%</strong>
        <span>+18% vs last week</span>
      </div>
    </div>
  );
}

function ProjectPreview() {
  return (
    <div className="preview-card project-preview">
      <div className="project-progress-ring">
        <span>74%</span>
      </div>
      <div className="project-preview-info">
        <strong>Redesign Mobile App</strong>
        <span>Due May 20</span>
      </div>
    </div>
  );
}

function ReminderPreview() {
  return (
    <div className="preview-card reminder-preview">
      <span className="reminder-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>
      </span>
      <span className="reminder-text">
        <strong>Due in 1 hour</strong>
        <small>Design homepage UI</small>
      </span>
    </div>
  );
}
function HeroPreview() {
  return (
    <div className="hero-preview">
      <TaskPreview />
      <ProgressPreview />
      <ProjectPreview />
      <ReminderPreview />
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-top">
        <header className="landing-header">
          <Logo />

          <nav className="landing-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="landing-header-actions">
            <a className="login-link" href="/login">
              Log in
            </a>

            <Button href="/signup">Sign up free</Button>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label="Open navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <section className="landing-hero">
          <div className="hero-content">
            <h1>
              Stay Organized
              <br />
              <span>Get Things Done.</span>
            </h1>

            <p className="hero-description">
              Tasks, projects, notes, and a calendar in one calm place. Plan
              your week in minutes and see what is actually getting finished.
            </p>

            <div className="hero-actions">
              <Button href="/signup">Get started free</Button>
              <Button href="#features" variant="secondary">
                See how it works
              </Button>
            </div>

            <p className="hero-note">
              <CheckIcon size={15} />
              <span>Free to start. No credit card needed.</span>
            </p>
          </div>

          <HeroPreview />
        </section>
      </div>

      <section className="landing-placeholder" id="features">
        <FeaturesSection />
      </section>

      <section
        className="landing-placeholder landing-placeholder--alternate"
        id="how-it-works"
      >
        <HowItWorksSection />
      </section>

      <section className="landing-placeholder" id="reminders">
        <RemindersSection />
      </section>

      <section className="landing-placeholder" id="pricing">
        <h2>Start free. Upgrade when you need more.</h2>
      </section>

      <section
        className="landing-placeholder landing-placeholder--alternate"
        id="faq"
      >
        <h2>Questions, answered</h2>
      </section>
    </main>
  );
}