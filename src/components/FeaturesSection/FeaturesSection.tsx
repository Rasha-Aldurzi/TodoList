import './FeaturesSection.css';

const features = [
  {
    title: 'Tasks that stay in order',
    description:
      'Set a priority and a due date once. Every list sorts itself around what is next.',
    className: 'feature-card--large',
    preview: 'tasks',
  },
  {
    title: 'Notes next to your work',
    description:
      'Write ideas, add checklists, and attach files without leaving the project.',
    preview: 'notes',
  },
  {
    title: 'Every project at a glance',
    description:
      'See progress, status, and the next deadline on one screen.',
    preview: 'projects',
  },
  {
    title: 'Deadlines on a calendar',
    description:
      'Due dates and reminders sit in a month view you can scan in seconds.',
    preview: 'calendar',
  },
  {
    title: 'Know what is working',
    description:
      'Reports show your completion rate and your most focused days.',
    preview: 'reports',
  },
];

function FeaturePreview({ type }: { type: string }) {
  return (
    <div className={`feature-preview feature-preview--${type}`}>
      {type === 'tasks' && (
        <div className="feature-task-list">
          {['Design homepage UI', 'Create wireframes', 'Write API documentation'].map(
            (task, index) => (
              <div className="feature-task" key={task}>
                <span className={index === 0 ? 'checked' : ''}>
                  {index === 0 ? '✓' : ''}
                </span>
                <p>{task}</p>
              </div>
            )
          )}
        </div>
      )}

      {type === 'notes' && (
        <div className="feature-notes">
          <div className="feature-note">
            <strong>Project Ideas</strong>
            <span>Design inspiration and references</span>
          </div>

          <div className="feature-note">
            <strong>Meeting Notes</strong>
            <span>Important points and next steps</span>
          </div>
        </div>
      )}

      {type === 'projects' && (
        <div className="feature-projects">
          {[
            ['Redesign Mobile App', 75],
            ['Marketing Website', 40],
            ['E-commerce Platform', 60],
          ].map(([name, progress]) => (
            <div className="feature-project" key={name}>
              <div className="feature-project-info">
                <strong>{name}</strong>
                <span>{progress}%</span>
              </div>

              <div className="feature-project-track">
                <span style={{ width: `${progress}% `}} />
              </div>
            </div>
          ))}
        </div>
      )}

      {type === 'calendar' && (
        <div className="feature-calendar">
          {[
            ['M', 19],
            ['T', 20],
            ['W', 21],
            ['T', 22],
            ['F', 23],
            ['S', 24],
            ['S', 25],
          ].map(([day, date], index) => (
            <div
              className={index === 2 ? 'active' : ''}
              key={`${day}-${date}`}
            >
              <span>{day}</span>
              <strong>{date}</strong>
              <i />
            </div>
          ))}
        </div>
      )}

      {type === 'reports' && (
        <div className="feature-reports">
          <div className="feature-chart">
            {[30, 42, 38, 60, 55, 72, 84].map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="feature-report-summary">
            <strong>86%</strong>
            <span>completion rate</span>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({
  title,
  description,
  preview,
  className = '',
}: {
  title: string;
  description: string;
  preview: string;
  className?: string;
}) {
  return (
    <article className={`feature-card ${className}`}>
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <FeaturePreview type={preview} />
    </article>
  );
}

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2 className="features-title">
        Everything for your week, in one place
      </h2>

      <p className="features-description">
        Five tools that work together, so a deadline in your calendar
        is the same task in your list.
      </p>

      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.preview}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}