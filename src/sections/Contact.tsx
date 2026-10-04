import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect."
        description="The contact details below are from the resume. The form is intentionally front-end only until an email/backend service is configured."
      />
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="card p-7 sm:p-9">
          <div className="grid gap-6">
            <a className="contact-row" href={`mailto:${portfolioData.contact.email}`}>
              <span className="icon-box"><Mail size={18} /></span>
              <span><small>Email</small>{portfolioData.contact.email}</span>
            </a>
            <a className="contact-row" href={`tel:${portfolioData.contact.phone}`}>
              <span className="icon-box"><Phone size={18} /></span>
              <span><small>Phone</small>{portfolioData.contact.phone}</span>
            </a>
            <div className="contact-row">
              <span className="icon-box"><MapPin size={18} /></span>
              <span><small>Location</small>{portfolioData.contact.location}</span>
            </div>
          </div>
        </div>

        <form className="card p-7 sm:p-9" onSubmit={submit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">Name<input required name="name" placeholder="Your name" /></label>
            <label className="field">Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          </div>
          <label className="field mt-5">Message<textarea required name="message" rows={6} placeholder="Tell me how I can help..." /></label>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button className="btn-primary" type="submit"><Send size={17} /> Send message</button>
            {sent && <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Demo submitted — connect a backend/email service to send it.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
