import { useState } from 'react';
import './FAQSection.css';

const questions = [
  {
    question: 'Is TodoList free to use?',
    answer:
      'Yes. The Free plan includes unlimited tasks and notes and up to 3 active projects.',
  },
  {
    question: 'Does it work on my phone?',
    answer:
      'TodoList is rebuilt for phones, tablets, and desktop, so every screen fits the device you use.',
  },
  {
    question: 'Can I share a project?',
    answer:
      'On Pro you can invite teammates by email and assign tasks to them.',
  },
  {
    question: 'Can I export or delete my data?',
    answer:
      'Reports can be exported at any time, and you can delete your account from Settings.',
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`faq-chevron ${isOpen ? 'open' : ''}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleQuestion(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <section className="faq-section">
      <h2 className="faq-title">Questions, answered</h2>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div className="faq-item" key={item.question}>
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isOpen}
              >
                {item.question}

                <ChevronIcon isOpen={isOpen} />
              </button>

              {isOpen && (
                <p className="faq-answer">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;