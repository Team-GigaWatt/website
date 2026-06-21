"use client";

import React, { useState } from "react";
import Form, {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/smoothui/form/index";

type Errors = Record<string, string | undefined>;

const ContactForm = () => {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Errors = {};

    if (!data.get("name")) newErrors.name = "Full name is required.";
    if (!data.get("email")) newErrors.email = "Email address is required.";
    if (!data.get("subject")) newErrors.subject = "Subject is required.";
    if (!data.get("message")) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  };

  const inputClass =
    "w-full h-13 rounded-lg border border-slate-200 bg-slate-50 text-zinc-900 placeholder:text-slate-400 focus:outline-none focus:border-[#e30613] transition-all font-medium text-sm";

  return (
    <div
      className="rounded-2xl overflow-hidden mx-4 sm:mx-0"
      style={{
        background: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        padding: "2.5rem 2.5rem",
        maxWidth: "680px",
        width: "100%",
      }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-1">Send a Message</h2>
        <p className="text-slate-500 text-sm">We'll get back to you as soon as possible.</p>
      </div>

      <Form
        action="https://formsubmit.co/2b80bee75951857712e66af651a31faa"
        method="POST" 
        errors={errors}
        onFormSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />

        <FormField name="name">
          <FormLabel className="text-zinc-800 font-semibold text-sm">Name</FormLabel>
          <FormControl>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={inputClass}
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormField>

        <FormField name="email">
          <FormLabel className="text-zinc-800 font-semibold text-sm">Email</FormLabel>
          <FormControl>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={inputClass}
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormField>

        <FormField name="subject">
          <FormLabel className="text-zinc-800 font-semibold text-sm">Subject</FormLabel>
          <FormControl>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              className={inputClass}
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormField>

        <FormField name="message">
          <FormLabel className="text-zinc-800 font-semibold text-sm">Message</FormLabel>
          <FormControl>
            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 text-zinc-900 placeholder:text-slate-400 focus:outline-none focus:border-[#e30613] transition-all resize-none font-medium text-sm"
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormField>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-lg font-bold text-white text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #e30613, #ff2d3b)", height: "60px" }}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
