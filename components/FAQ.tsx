'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is RoyBot and how does it work?',
    answer: 'RoyBot is an AI-powered due diligence platform designed specifically for SMEs. It automates and streamlines the M&A process by analyzing financial, operational, and legal data to provide comprehensive insights and risk assessments.',
  },
  {
    question: 'What kind of data does RoyBot analyse?',
    answer: 'RoyBot analyzes various types of data including financial statements, operational metrics, legal documents, contracts, and market data to provide a comprehensive due diligence assessment.',
  },
  {
    question: 'How secure is RoyBot?',
    answer: 'RoyBot implements enterprise-grade security measures with advanced encryption and secure access controls to protect your confidential information throughout the due diligence process.',
  },
  {
    question: 'What is the cost of using RoyBot?',
    answer: 'RoyBot offers transparent, competitive pricing with no hidden fees. Contact us for a detailed pricing structure tailored to your specific needs.',
  },
];

export default function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Get answers to commonly asked questions about RoyBot
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}