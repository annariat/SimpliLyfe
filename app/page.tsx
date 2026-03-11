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
    features: ["Calendar", "Focus Techniques", "Task Management", "Customizable Dashboards"],
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-3">
            <Image
              src="/logomark.png"
              alt="SimpliLyfe Icon"
              width={716}
              height={663}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>

          <h1>
            <Image
              src="/wordmark.png"
              alt="SimpliLyfe"
              width={1435}
              height={273}
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mx-auto"
              priority
            />
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building products that simplify your life
          </p>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            We create thoughtfully designed tools that help you focus on what matters most.
            No complexity. No clutter. Just solutions that work.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
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
      <section className="py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <Badge variant="primary" className="mb-3">
              Our Products
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="gradient-text">Simplify</span> Your Life
            </h2>
          </div>

          {/* Featured Product */}
          {products.map((product) => (
            <Card key={product.name} className="p-5 sm:p-6 lg:p-8 mb-6">
              <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <product.icon className="text-primary" size={22} />
                    </div>
                    <Badge variant="secondary" className="text-sm">{product.status}</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {product.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
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
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center p-5 lg:p-6">
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="p-3 lg:p-4 bg-card/80 rounded-xl border border-border text-center">
                        <Calendar className="text-primary mx-auto mb-1.5" size={28} />
                        <p className="text-xs sm:text-sm font-medium">Calendar</p>
                      </div>
                      <div className="p-3 lg:p-4 bg-card/80 rounded-xl border border-border text-center">
                        <Brain className="text-secondary mx-auto mb-1.5" size={28} />
                        <p className="text-xs sm:text-sm font-medium">Unlimited Practice</p>
                      </div>
                      <div className="p-3 lg:p-4 bg-card/80 rounded-xl border border-border text-center">
                        <Zap className="text-accent mx-auto mb-1.5" size={28} />
                        <p className="text-xs sm:text-sm font-medium">Focus Mode</p>
                      </div>
                      <div className="p-3 lg:p-4 bg-card/80 rounded-xl border border-border text-center">
                        <Sparkles className="text-primary mx-auto mb-1.5" size={28} />
                        <p className="text-xs sm:text-sm font-medium">Study Buddy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Coming Soon */}
          <div className="mt-6 lg:mt-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-center mb-4">
              Coming Soon
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {upcomingProducts.map((product) => (
                <Card key={product.name} className="text-center py-4 sm:py-6 opacity-75">
                  <CardContent className="p-3 sm:p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <product.icon className="text-muted-foreground" size={20} />
                    </div>
                    <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-1">
                      {product.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
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
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Why <span className="gradient-text">SimpliLyfe</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-primary to-primary-hover">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Simplify Your Life?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Start with TheFocusPath — our AI-powered study companion currently in beta.
            Join hundreds of students already transforming their study habits.
          </p>
          <div className="mt-8">
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
