const Clients = () => {
  const clients = [
    "SuperSonic Studios",
    "Voodoo",
    "Homa Games",
    "CrazyLabs",
    "SayGames",
    "Kwalee",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by over 20+ clients globally
          </p>
          <p className="text-muted-foreground mt-2">
            Repeat clients with positive testimonials is our specialty
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={client}
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg font-semibold text-center text-muted-foreground hover:text-primary transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
