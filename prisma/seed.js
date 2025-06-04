import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: '3-Bedroom Flat in London',
        slug: 'london-flat',
        location: 'London',
        price: '£850,000',
        description: 'Modern flat with great transport links and city views.',
        type: 'Flat',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1200,
        listedDate: '2025-05-01',
        amenities: ['Balcony', 'City View', 'Underground Parking'],
        agentName: 'Sophie Langford',
        agentPhone: '020 7946 0023',
        agentEmail: 'sophie@urbanhomes.co.uk'
      },
      {
        title: 'Countryside House in Devon',
        slug: 'devon-house',
        location: 'Devon',
        price: '£620,000',
        description: 'Spacious house surrounded by greenery and nature trails.',
        type: 'Detached House',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2500,
        listedDate: '2025-04-20',
        amenities: ['Large Garden', 'Garage', 'Fireplace'],
        agentName: 'Ben Carter',
        agentPhone: '01392 202011',
        agentEmail: 'ben@countrysideestates.co.uk'
      }
      // Add more properties here if needed
    ]
  });
}

main().finally(() => prisma.$disconnect());
