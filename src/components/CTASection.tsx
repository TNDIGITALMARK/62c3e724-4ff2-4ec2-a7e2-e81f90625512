'use client';

import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">ГОТОВЫ НАЧАТЬ?</h2>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 rounded-lg"
        >
          СВЯЖИТЕСЬ С НАМИ
        </Button>
      </div>
    </section>
  );
}
