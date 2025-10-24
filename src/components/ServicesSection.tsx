'use client';

import { Smartphone, Monitor, Settings } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'МОБИЛЬНАЯ РАЗРАБОТКА',
      description: 'iOS и Android приложения',
    },
    {
      icon: Monitor,
      title: 'ВЕБ-РАЗРАБОТКА',
      description: 'Современные веб-приложения',
    },
    {
      icon: Settings,
      title: 'UI/UX ДИЗАЙН',
      description: 'Красивый и удобный интерфейс',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">НАШИ УСЛУГИ</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-card hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
