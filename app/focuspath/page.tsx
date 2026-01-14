import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "TheFocusPath - AI-Powered Study Companion | SimpliLyfe",
  description: "TheFocusPath is your AI-powered study companion. Organize classes, manage tasks, generate quizzes, and master focus techniques.",
};

export default function FocusPathPage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
