import { contactInfo } from "@/data/content";

function buildMailto(subject: string) {
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}`;
}

export function getDiagnosticMailto() {
  return buildMailto(contactInfo.diagnosticEmailSubject);
}

export function getProposalMailto() {
  return buildMailto(contactInfo.proposalEmailSubject);
}

export function getReferenceMailto() {
  return buildMailto(contactInfo.referenceEmailSubject);
}

export function getWhatsappHref() {
  return `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`;
}

export function getPhoneHref() {
  return `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`;
}
