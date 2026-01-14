import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Computer Science Major",
    content: "TheFocusPath completely changed how I manage my coursework. The AI quiz generator is a game-changer for exam prep!",
    avatar: "SM",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Pre-Med Student",
    content: "As a pre-med student, I have a lot on my plate. This app helps me stay organized and actually enjoy studying.",
    avatar: "JL",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Graduate Student",
    content: "The focus techniques built into the app have helped me write my thesis without burning out. Highly recommend!",
    avatar: "ER",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Beta Users" },
  { value: "10,000+", label: "Tasks Completed" },
  { value: "95%", label: "Would Recommend" },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Loved by <span className="gradient-text">Students</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of students who are already transforming their study habits.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center py-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
