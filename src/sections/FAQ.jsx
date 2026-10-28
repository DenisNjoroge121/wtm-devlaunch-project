
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const faqs = [
  {
    question: "Who can join DevLaunch?",
    answer:
      "DevLaunch is designed for aspiring developers, students, and beginners who want to grow their technology skills.",
  },
  {
    question: "Do I need previous coding experience?",
    answer:
      "No. Beginners can start with the fundamentals and gradually work toward building projects.",
  },
  {
    question: "What will I learn?",
    answer:
      "The learning paths cover web development, backend development, practical projects, and career preparation.",
  },
  {
    question: "Is this a real mentorship service?",
    answer:
      "This is a demonstration landing page. The mentor profiles and testimonials are sample content.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-canvas px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Frequently asked questions"
          title="Got questions?"
          description="Here are some answers to help you get started."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-ink hover:text-brand-700"
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="px-5 pb-5 leading-7 text-muted"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
