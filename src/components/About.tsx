import { Gamepad2, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Gamepad2,
      title: "Idle Arcade Expertise",
      description: "Specialized in crafting addictive idle arcade and tycoon games that keep players engaged.",
    },
    {
      icon: Target,
      title: "Global Reach",
      description: "Thousands of games developed for top publishers and clients worldwide.",
    },
    {
      icon: Zap,
      title: "Speed & Scale",
      description: "Fast development cycles with smart execution that performs at scale.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At <span className="text-primary font-semibold">Simforge Games</span>, we don't just make mobile games — we build global hits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded-xl bg-card border border-border hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in">
          <p>
            As a leading <strong className="text-foreground">Game-Tech studio</strong>, we specialize in crafting 
            high-performance, highly addictive <strong className="text-foreground">idle arcade and tycoon games</strong> for 
            players around the world.
          </p>
          <p>
            With <strong className="text-foreground">thousands of games developed</strong> for top publishers and clients, 
            our name stands for <strong className="text-primary">speed, scale, and seamless execution</strong> in the gaming industry.
          </p>
          <p>
            We move fast, build smart, and launch games that perform at scale. We're not just keeping up with the mobile gaming world.
          </p>
          <p className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We're shaping it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
