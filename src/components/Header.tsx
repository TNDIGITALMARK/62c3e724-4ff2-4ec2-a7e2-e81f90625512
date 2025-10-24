'use client';

import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">П</span>
          </div>
          <span className="text-xl font-semibold text-foreground">ПРОЕКТ.DEV</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            О НАС
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            УСЛУГИ
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            ПОРТФОЛИО
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            КОНТАКТЫ
          </a>
        </nav>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-lg">
          НАЧАТЬ РАБОТУ
        </Button>
      </div>
    </header>
  );
}
