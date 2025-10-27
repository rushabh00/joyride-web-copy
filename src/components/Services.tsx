import { Code2, Palette, Rocket, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Game Development",
      description: "Full-cycle game development from concept to launch, specializing in idle arcade and tycoon genres.",
    },
    {
      icon: Palette,
      title: "Game Design",
      description: "Creative and engaging game design that keeps players coming back for more addictive gameplay.",
    },
    {
      icon: Rocket,
      title: "Publishing Support",
      description: "Complete publishing solutions including monetization, marketing, and global distribution strategies.",
    },
    {
      icon: Users,
      title: "Co-Development",
      description: "Partner with us to scale your game development with our expert team and proven processes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive game development solutions from ideation to global launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-card border border-border hover-scale animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
