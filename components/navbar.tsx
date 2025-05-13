"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Code2, CircuitBoard, Shield, Paintbrush, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
// import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  // const { isSignedIn } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <CircuitBoard className="h-8 w-8 text-primary" />
          <span className="font-space-grotesk text-xl font-bold">FUTUREAL</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            ABOUT
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            CONTACT
          </Link>
          <Link href="/core-team" className="text-sm font-medium hover:text-primary transition-colors">
            CORE TEAM
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* {isSignedIn ? (
              <SignOutButton>
                <Button variant="ghost" size="sm">Sign Out</Button>
              </SignOutButton>
            ) : (
              <SignInButton mode="modal">
                <Button variant="default" size="sm">Sign In</Button>
              </SignInButton>
            )}
             */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 dark:hidden"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" 
                className="hidden h-5 w-5 dark:block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md flex flex-col z-50 p-6">
            <div className="flex flex-col space-y-6">
              <Link 
                href="/#about" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/#contact" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
              <Link 
                href="/core-team" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CORE TEAM
              </Link>
              
              <div className="pt-6 border-t border-border">
                {/* {isSignedIn ? (
                  <SignOutButton>
                    <Button className="w-full">Sign Out</Button>
                  </SignOutButton>
                ) : (
                  <SignInButton mode="modal">
                    <Button className="w-full">Sign In</Button>
                  </SignInButton>
                )} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;