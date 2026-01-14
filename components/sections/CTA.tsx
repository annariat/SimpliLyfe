"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle, ArrowRight } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "beta_signup" }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch {
      // Handle error silently
    }

    setIsLoading(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-hover">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Ready to Transform Your Studies?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Join the beta and be among the first to experience the future of
          student productivity. Limited spots available.
        </p>

        {/* Signup Form */}
        <div className="mt-10 max-w-md mx-auto">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle size={24} />
              <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white"
              />
              <Button
                type="submit"
                disabled={isLoading}
                variant="secondary"
                className="px-8 py-3 text-base whitespace-nowrap"
              >
                {isLoading ? "Joining..." : "Join Beta"}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </form>
          )}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <CheckCircle size={16} />
            Free during beta
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
