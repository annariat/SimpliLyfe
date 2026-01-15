"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@simpli-lyfe.com",
    href: "mailto:support@simpli-lyfe.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ottawa, CA",
    href: null,
  },
];

const faqs = [
  {
    question: "When will TheFocusPath be publicly available?",
    answer: "We're currently in beta and plan to launch publicly in early 2026. Join the beta to get early access!",
  },
  {
    question: "Is TheFocusPath free?",
    answer: "During the beta period, TheFocusPath is completely free. Planning and tracking features will remain free for Beta users. Pricing model for new users and AI-driven services will be announced before the public launch.",
  },
  {
    question: "Are all features available in Beta?",
    answer: "Planning and tracking features are available during the beta phase. AI driven features will be rolled out in late Q1 and early Q2, 2026.",
  },
  {
    question: "What platforms is TheFocusPath available on?",
    answer: "Currently available as a web, iOS, and Android app.",
  },
  {
    question: "How do you protect my data?",
    answer: "We use industry-standard encryption and never sell your data. Your notes and study materials stay on your local drives and are never at risk.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      // Handle error
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              We&apos;d Love to{" "}
              <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions, feedback, or just want to say hi? We&apos;re here to help
              and always excited to connect with our community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Contact Form & Info */}
            <div className="space-y-6">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="text-secondary mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          rows={3}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground placeholder:text-muted-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                      </div>
                      <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? "Sending..." : "Send Message"}
                        <Send size={18} className="ml-2" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Contact Info
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - FAQ */}
            <Card className="h-fit">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
