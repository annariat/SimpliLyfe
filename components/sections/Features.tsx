import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  CheckSquare,
  Brain,
  Timer,
  BookOpen,
  ArrowRight,
  LayoutDashboard
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Custom Dashboard",
    description: "Create custom dashboards to focus on what is important to you.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calendar,
    title: "Calendar",
    description: "Sync your class schedule, set reminders, and never miss a deadline. AI suggests optimal study times based on your patterns.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Break down assignments into manageable tasks. Track progress, set priorities, and celebrate your wins.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "Guided Excellence",
    description: "Upload your notes and let us create study plans, flash cards, and quizzes to guide you to excellent results.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Timer,
    title: "Focus Techniques",
    description: "Built-in Pomodoro timer, deep work modes, and distraction blockers to help you stay in the zone.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: BookOpen,
    title: "Progress Tracking",
    description: "Visualize your study habits, track time spent per subject, and see your improvement over time.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            TheFocusPath delivers powerful study tools to help you achieve your academic goals. We handle the AI complexities, so you can focus on what matters. Here&apos;s what makes it special.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} hover>
              <CardHeader>
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={feature.color} size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#beta-signup">
            <Button variant="outline" size="lg">
              Join the Beta
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
