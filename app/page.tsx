import Link from "next/link";
import Image from "next/image";
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
    features: ["Smart Calendar", "Guided Preparation", "Focus Techniques", "Task Management"],
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
    title: "Built For You",
    description: "We build the custom experience for you that allows you to focus on what matters.",
  },
  {
    title: "Privacy First",
    description: "Your data belongs to you. We never sell it or use it for advertising. Period.",
  },
];

export default function Home() {
  return (
    <div className="snap-scroll">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <Image
              src="/icon-transparent.png"
              alt="SimpliLyfe Icon"
              width={88}
              height={88}
              className="w-22 h-22"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">Simpli</span>
            <span className="gradient-text">Lyfe</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Building products that simplify your life
          </p>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
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
      <section className="py-8 lg:py-12 flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="primary" className="mb-3">
              Our Products
            </Badge>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="gradient-text">Simplify</span> Your Life
            </h2>
          </div>

          {/* Featured Product */}
          {products.map((product) => (
            <Card key={product.name} className="p-6 sm:p-8 lg:p-10 mb-6">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <product.icon className="text-primary" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-sm">{product.status}</Badge>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    {product.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                    <Button size="lg" className="mt-2">
                      Explore {product.name}
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Product Visual */}
                <div className="relative hidden lg:block">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center p-6 lg:p-8">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="p-4 lg:p-6 bg-card/80 rounded-xl border border-border text-center">
                        <Calendar className="text-primary mx-auto mb-2" size={32} />
                        <p className="text-sm font-medium">Calendar</p>
                      </div>
                      <div className="p-4 lg:p-6 bg-card/80 rounded-xl border border-border text-center">
                        <Brain className="text-secondary mx-auto mb-2" size={32} />
                        <p className="text-sm font-medium">Unlimited Practice</p>
                      </div>
                      <div className="p-4 lg:p-6 bg-card/80 rounded-xl border border-border text-center">
                        <Zap className="text-accent mx-auto mb-2" size={32} />
                        <p className="text-sm font-medium">Focus Mode</p>
                      </div>
                      <div className="p-4 lg:p-6 bg-card/80 rounded-xl border border-border text-center">
                        <Sparkles className="text-primary mx-auto mb-2" size={32} />
                        <p className="text-sm font-medium">Study Buddy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Coming Soon */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-6">
              Coming Soon
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {upcomingProducts.map((product) => (
                <Card key={product.name} className="text-center py-6 sm:py-8 opacity-75 flex-1">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <product.icon className="text-muted-foreground" size={24} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
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
      <section className="py-20 lg:py-32 flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Why <span className="gradient-text">SimpliLyfe</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-hover flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
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

    </div>
  );
}
