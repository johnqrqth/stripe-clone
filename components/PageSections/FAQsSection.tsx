import React from 'react';

const FAQsSection = () => {
  const faqs = [
    {
      question: "How fast will we see ROI?",
      answer: "Many firms cover the subscription within the first billing cycle; results vary by practice mix and data quality."
    },
    {
      question: "Does Sque replace our practice management system?",
      answer: "Sque is an OS that sits on top of your existing systems. We don’t replace your practice management system, we integrate with it."
    },
    {
      question: "What about data security?",
      answer: "Sque is SOC 2 Type II certified and we take data security very seriously. We use industry-standard encryption and security protocols to protect your data."
    },
    {
      question: "Do you integrate with QuickBooks/Xero?",
      answer: "Yes, we integrate with QuickBooks and Xero. We also offer a custom API for other integrations."
    },
    {
      question: "Can we try before committing?",
      answer: "Yes, we offer a 14-day free trial. No credit card required."
    }
  ];

  return (
    <div className="relative bg-[#0a2540] overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-white text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer">
                  {faq.question}
                  <span className="transform transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;