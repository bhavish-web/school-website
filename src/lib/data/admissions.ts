import { AdmissionStep, FaqItem } from "@/lib/types";

export const admissionSteps: AdmissionStep[] = [
  { step: 1, title: "Enquiry", description: "[Describe how a parent begins an enquiry.]" },
  { step: 2, title: "Campus Visit", description: "[Describe the campus visit / tour process.]" },
  { step: 3, title: "Application", description: "[Describe how to submit an application.]" },
  { step: 4, title: "Interaction / Assessment", description: "[Describe the interaction or assessment process.]" },
  { step: 5, title: "Admission Confirmation", description: "[Describe how admission is confirmed and next steps.]" },
];

export const admissionEligibility: string[] = [
  "[Eligibility criteria — e.g. age requirement by grade.]",
  "[Eligibility criteria.]",
];

export const admissionDocuments: string[] = [
  "[Required document, e.g. Birth Certificate]",
  "[Required document, e.g. Previous school records]",
  "[Required document, e.g. Address proof]",
];

export const admissionDates: { label: string; date: string }[] = [
  { label: "Admissions Open", date: "[Date]" },
  { label: "Last Date to Apply", date: "[Date]" },
  { label: "Academic Year Begins", date: "[Date]" },
];

export const admissionFaqs: FaqItem[] = [
  { question: "[Frequently asked admissions question]", answer: "[Answer]" },
  { question: "[Frequently asked admissions question]", answer: "[Answer]" },
  { question: "[Frequently asked admissions question]", answer: "[Answer]" },
];
