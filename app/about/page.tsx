import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { Heart, Target, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About - SimpliLyfe",
  description: "Learn about SimpliLyfe's mission to simplify lives through thoughtfully designed products. Discover the story behind TheFocusPath.",
};

const values = [
  {
    icon: Heart,
    title: "User-First",
    description: "Every feature we build starts with understanding real every day problems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge AI to create tools that were previously impossible.",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "Your data belongs to you. We never sell it or use it for advertising.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "Powerful tools don't have to be complicated. We obsess over making things simple.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Simplifying Lives,
              <br />
              <span className="gradient-text">One Product at a Time</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              SimpliLyfe is on a mission to create products that genuinely make
              people&apos;s lives simpler, starting with students and expanding to
              help everyone achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why We Built SimpliLyfe
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It all started with us. Simple products that we needed but could&apos;t find.
                  We built for ourselves, and then decided to share with the world.
                </p>
                <p>
                  We believe that the best tools are the ones you don&apos;t have to
                  think about. They just work, helping you focus on what matters
                  most.
                </p>
                <p>
                  Too many products are overcomplicated, trying to do everything and 
                  doing nothing well. We take a different approach.
                </p>
                <p>
                  Each SimpliLyfe product is designed with a clear purpose. It&apos;s built
                  to solve specific problems exceptionally well. No feature bloat, no learning curve, 
                  no unnecessary complexity.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <Card className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
                    <Heart className="text-primary" size={40} />
                  </div>
                  <div className="aspect-square bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="text-secondary" size={40} />
                  </div>
                  <div className="aspect-square bg-accent/10 rounded-xl flex items-center justify-center">
                    <Shield className="text-accent" size={40} />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="text-primary" size={40} />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at SimpliLyfe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} hover className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
