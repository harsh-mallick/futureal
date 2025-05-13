import Link from 'next/link';
import { CircuitBoard, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="h-6 w-6 text-primary" />
              <span className="font-space-grotesk text-lg font-bold">FUTUREAL</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Empowering students to explore and build with code, design, AI, and cybersecurity. 
              Join our community of tech enthusiasts and innovators.
            </p>
          </div>
          
          <div>
            <h3 className="font-space-grotesk font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/core-team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Core Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-space-grotesk font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:info@futureal.tech" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/futureal-tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://instagram.com/futureal.tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Futureal Tech Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;