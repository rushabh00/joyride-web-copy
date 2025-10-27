const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SIMFORGE GAMES
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Building Global Gaming Hits
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 Simforge Games. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <a href="mailto:simforgegames@gmail.com" className="hover:text-primary transition-colors">
                simforgegames@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
