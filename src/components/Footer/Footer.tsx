import './Footer.css';

const footerGroups = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'What is new'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Help center'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy'],
  },
];

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="logo-icon">✓</span>
          TodoList
        </div>

        <p>
          Tasks, projects, and notes in one calm place.
        </p>
      </div>

      {footerGroups.map((group) => (
        <div className="footer-group" key={group.title}>
          <h3>{group.title}</h3>

          {group.links.map((link) => (
            <span key={link}>
              {link}
            </span>
          ))}
        </div>
      ))}

      <div className="footer-copyright">
        © 2024 TodoList. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;