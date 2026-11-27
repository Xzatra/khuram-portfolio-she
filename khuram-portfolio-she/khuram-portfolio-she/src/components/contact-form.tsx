import { useState } from "react";
import { Mail, User } from "lucide-react";

/*
 * Contact form — shared by the homepage footer and the /contact page.
 *
 * The form is NOT connected to a real submission endpoint yet. The GHL form
 * ID hook below is a single obvious integration point: when supplied, wire
 * the submission to the matching GHL form. Until then the form never shows
 * a false success message.
 */

export const contactFormConfig = {
  email: "support@kdmgrowth.com",
  // GHL form integration hook — paste the GHL form ID / submission endpoint
  // here when supplied. Leave empty to keep the form local-only.
  ghlFormId: "",
  submitEndpoint: "",
};

export function ContactForm({ forceH1 = false }: { forceH1?: boolean } = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; email?: string } = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    if (!contactFormConfig.submitEndpoint) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setStatus("error");
      }, 400);
      return;
    }
    fetch(contactFormConfig.submitEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Submission failed");
        setName("");
        setEmail("");
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  const heading = "Let’s build a system that works.";
  const headingHead = heading.split("build")[0] + "build";
  const headingTail = heading.split("build")[1] ?? "";

  return (
    <div className="cf-form-panel">
      <div className="cf-form-content">
        {/* Heading — desktop line break after "build" */}
        {forceH1 ? (
          <h1 id="contact-heading" className="cf-heading">
            {headingHead}
            <br className="cf-br" />
            {headingTail}
          </h1>
        ) : (
          <h2 id="contact-heading" className="cf-heading">
            {headingHead}
            <br className="cf-br" />
            {headingTail}
          </h2>
        )}

        {/* 24px gap to subtitle */}
        <p className="cf-subtitle">
          Tell me what you need to improve in GoHighLevel, lead follow-up, funnels, or AI
          automation.
        </p>

        {/* 35px gap to form */}
        <form onSubmit={handleSubmit} noValidate className="cf-form">
          {/* Name field */}
          <div className="cf-field-wrap">
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <div className="cf-input-wrap">
              <input
                id="contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="cf-input"
              />
              <span aria-hidden="true" className="cf-input-icon">
                <User className="cf-glyph" />
              </span>
            </div>
            {errors.name && (
              <p id="contact-name-error" className="cf-error">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="cf-field-wrap">
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <div className="cf-input-wrap">
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your e-mail"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="cf-input"
              />
              <span aria-hidden="true" className="cf-input-icon">
                <Mail className="cf-glyph" />
              </span>
            </div>
            {errors.email && (
              <p id="contact-email-error" className="cf-error">
                {errors.email}
              </p>
            )}
          </div>

          {/* Submit button: full-width, 40px, #27272A */}
          <button type="submit" disabled={status === "submitting"} className="cf-submit">
            {status === "submitting" ? "Submitting…" : "Submit"}
          </button>

          {status === "success" && (
            <p className="cf-status cf-status-success" role="status">
              Thanks — your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="cf-status cf-status-error" role="status">
              This form isn’t connected to a submission endpoint yet. Please email{" "}
              <a href={`mailto:${contactFormConfig.email}`} className="cf-status-link">
                {contactFormConfig.email}
              </a>{" "}
              instead.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
