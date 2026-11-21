import './RemindersSection.css';

const reminders = [
  'Reminders one hour, one day, or one week before',
  'A short daily summary every morning',
  'Mentions and comments from your team in one inbox',
];

const notifications = [
  {
    title: 'Design homepage UI',
    description: 'Due tomorrow at 9:00 AM',
    time: '1h ago',
    type: 'reminder',
    icon: '◷',
  },
  {
    title: 'Fix navigation bug',
    description: 'Due tomorrow at 2:00 PM',
    time: '3h ago',
    type: 'reminder',
    icon: '◷',
  },
  {
    title: 'Client presentation',
    description: 'May 25 · 10:00 AM',
    time: '5h ago',
    type: 'upcoming',
    icon: '◷',
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function ReminderFeatures() {
  return (
    <div className="reminder-features">
      {reminders.map((reminder) => (
        <div className="reminder-feature" key={reminder}>
          <span className="reminder-check">
            <CheckIcon />
          </span>

          <p>{reminder}</p>
        </div>
      ))}
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="notifications-card">
      <div className="notifications-header">
        <strong>Notifications</strong>
        <button type="button">Mark all read</button>
      </div>

      <div className="notification-tabs">
        <span className="notification-tab notification-tab--active">
          All
        </span>
        <span className="notification-tab">Unread 3</span>
        <span className="notification-tab">Mentions</span>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <article
            className="notification-item"
            key={notification.title}
          >
            <span
              className={`notification-icon notification-icon--${notification.type}`}
              aria-hidden="true"
            >
              {notification.icon}
            </span>

            <div className="notification-content">
              <strong>{notification.title}</strong>
              <p>{notification.description}</p>
            </div>

            <span className="notification-time">
              {notification.time}
            </span>
          </article>
        ))}
      </div>

      <button className="notifications-footer" type="button">
        View all notifications
      </button>
    </div>
  );
}

export default function RemindersSection() {
  return (
    <section className="reminders-section">
      <div className="reminders-content">
        <h2>Never miss a due date</h2>

        <p className="reminders-description">
          TodoList nudges you at the right moment, then gets out of the way.
        </p>

        <ReminderFeatures />
      </div>

      <NotificationCard />
    </section>
  );
}