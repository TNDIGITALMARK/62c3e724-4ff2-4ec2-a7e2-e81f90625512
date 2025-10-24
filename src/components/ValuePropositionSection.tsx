'use client';

import { Shield, MapPin, Sparkles } from 'lucide-react';

export function ValuePropositionSection() {
  const values = [
    {
      icon: Shield,
      title: 'НАДЁЖНОСТЬ',
      description: 'Гарантия качества',
    },
    {
      icon: MapPin,
      title: 'ИННОВАЦИИ',
      description: 'Современные технологии',
    },
    {
      icon: Sparkles,
      title: 'КЛИЕНТООРИЕНТИРОВАННОСТЬ',
      description: 'Индивидуальный подход',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
