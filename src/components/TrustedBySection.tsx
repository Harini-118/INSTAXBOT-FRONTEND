import React from 'react';

interface Company {
  id: number;
  name: string;
  logo: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: "Nike",
    logo: "/api/placeholder/120/60"
  },
  {
    id: 2,
    name: "Benefit",
    logo: "/api/placeholder/120/60"
  },
  {
    id: 3,
    name: "Mindvalley",
    logo: "/api/placeholder/120/60"
  },
  {
    id: 4,
    name: "Hotmart",
    logo: "/api/placeholder/120/60"
  },
  {
    id: 5,
    name: "Jenna Kutcher",
    logo: "/api/placeholder/120/60"
  },
  {
    id: 6,
    name: "Sugarbearhair",
    logo: "/api/placeholder/120/60"
  }
];

const TrustedBySection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trusted by 1M+ Businesses
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-full flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-w-[120px] h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;