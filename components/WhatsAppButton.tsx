"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/601113037963"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:scale-105"
      style={{ background: "#25D366" }}
    >
      WhatsApp
    </a>
  );
}