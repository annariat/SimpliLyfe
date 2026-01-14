"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle, BookOpen, Sparkles } from "lucide-react";

export function Hero() {
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="p-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border shadow-sm">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="p-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border shadow-sm">
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
        </div>

        {/* Badge */}
        <Badge variant="primary" className="mb-6">
          Now in Beta
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="text-foreground">The</span>
          <span className="gradient-text">FocusPath</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered study companion for smarter learning
        </p>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Organize classes, manage tasks, generate quizzes, and master focus techniques — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" id="beta-signup">
          {isSubmitted ? (
            <div className="flex items-center gap-2 text-secondary bg-secondary/10 px-6 py-3 rounded-lg">
              <CheckCircle size={24} />
              <span className="font-medium">Thanks! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-w-[280px] bg-card/60 backdrop-blur-sm"
                />
                <Button type="submit" disabled={isLoading} size="lg">
                  {isLoading ? "Joining..." : "Join Beta"}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Secondary CTA */}
        <div className="mt-4">
          <Link href="/features">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Explore Features
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Trust text */}
        <p className="mt-8 text-sm text-muted-foreground">
          Join 500+ students already on the waitlist. No spam, ever.
        </p>
      </div>
    </section>
  );
}
