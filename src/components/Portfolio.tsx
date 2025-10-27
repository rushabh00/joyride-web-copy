import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";

const Portfolio = () => {
  const games = [
    {
      title: "Fitness Inc",
      description: "An idle arcade gym management game that challenges players to build, upgrade, and dominate the fitness industry.",
      image: game1,
      category: "Idle Arcade",
    },
    {
      title: "Idle Fast Food Factory Tycoon",
      description: "A fast-paced idle tycoon game where players create and expand their very own fast food empire.",
      image: game2,
      category: "Tycoon",
    },
    {
      title: "Dune and Dusted",
      description: "A desert survival idle arcade game that fuses strategy and simulation in a harsh, resource-driven world.",
      image: game3,
      category: "Idle Arcade",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground">
            Standout titles that keep players hooked for hours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={game.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {game.category}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{game.title}</h3>
                <p className="text-muted-foreground">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
