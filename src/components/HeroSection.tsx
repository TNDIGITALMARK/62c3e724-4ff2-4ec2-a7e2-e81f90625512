'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            ВАШИ ИДЕИ, НАШЕ<br />ВОВЛОЩЕНИЕ.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            ПРОФЕССИОНАЛЬНАЯ РАЗРАБОТКА МОБИЛЬНЫХ И ВЕБ ПРИЛОЖЕНИЙ
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 rounded-lg"
          >
            УЗНАТЬ БОЛЬШЕ
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/generated/hero-devices.png"
            alt="Device mockups showing analytics dashboard"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
