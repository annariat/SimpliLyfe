import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight, Sparkles, Heart, Zap, BookOpen, Brain, Calendar } from "lucide-react";

const products = [
  {
    name: "TheFocusPath",
    tagline: "AI-Powered Study Companion",
    description: "Help students organize classes, manage tasks, generate quizzes, and master focus techniques with AI-driven tools.",
    href: "/focuspath",
    icon: BookOpen,
    features: ["Smart Calendar", "AI Quiz Generation", "Focus Techniques", "Task Management"],
    status: "Beta",
    color: "primary",
  },
];

const upcomingProducts = [
  {
    name: "SimpliMusic",
    description: "Music discovery simplified",
    icon: Zap,
  },
  {
    name: "SimpliFashion",
    description: "Style recommendations simplified",
    icon: Heart,
  },
  {
    name: "SimpliWork",
    description: "Productivity for professionals",
    icon: Brain,
  },
];

const values = [
  {
    title: "Simple by Design",
    description: "We believe powerful tools don't have to be complicated. Every product we build focuses on doing one thing exceptionally well.",
  },
  {
    title: "AI-Enhanced",
    description: "We leverage cutting-edge AI to create experiences that adapt to you, not the other way around.",
  },
  {
    title: "Privacy First",
    description: "Your data belongs to you. We never sell it or use it for advertising. Period.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="p-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border shadow-sm">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">Simpli</span>
            <span className="gradient-text">Lyfe</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Building products that simplify your life
          </p>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            We create thoughtfully designed tools that help you focus on what matters most.
            No complexity. No clutter. Just solutions that work.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/focuspath">
              <Button size="lg">
                Explore TheFocusPath
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-6">
              Our Products
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="gradient-text">Simplify</span> Your Life
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each SimpliLyfe product is designed with a clear purpose — to solve
              specific problems exceptionally well.
            </p>
          </div>

          {/* Featured Product */}
          {products.map((product) => (
            <Card key={product.name} className="p-8 mb-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <product.icon className="text-primary" size={24} />
                    </div>
                    <Badge variant="secondary">{product.status}</Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={product.href}>
                    <Button>
                      Explore {product.name}
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Product Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-4 p-8">
                        <div className="p-4 bg-card/80 rounded-xl border border-border">
                          <Calendar className="text-primary mx-auto mb-2" size={32} />
                          <p className="text-sm font-medium">Calendar</p>
                        </div>
                        <div className="p-4 bg-card/80 rounded-xl border border-border">
                          <Brain className="text-secondary mx-auto mb-2" size={32} />
                          <p className="text-sm font-medium">AI Quizzes</p>
                        </div>
                        <div className="p-4 bg-card/80 rounded-xl border border-border">
                          <Zap className="text-accent mx-auto mb-2" size={32} />
                          <p className="text-sm font-medium">Focus Mode</p>
                        </div>
                        <div className="p-4 bg-card/80 rounded-xl border border-border">
                          <Sparkles className="text-primary mx-auto mb-2" size={32} />
                          <p className="text-sm font-medium">AI Assistant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Coming Soon */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Coming Soon
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingProducts.map((product) => (
                <Card key={product.name} className="text-center py-8 opacity-75">
                  <CardContent>
                    <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <product.icon className="text-muted-foreground" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why <span className="gradient-text">SimpliLyfe</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Simplify Your Life?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Start with TheFocusPath — our AI-powered study companion currently in beta.
            Join hundreds of students already transforming their study habits.
          </p>
          <div className="mt-10">
            <Link href="/focuspath">
              <Button variant="secondary" size="lg">
                Get Started with TheFocusPath
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
