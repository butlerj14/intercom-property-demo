import Link from 'next/link';
import properties from '../data/properties';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <Link key={property.slug} href={`/property/${property.slug}`}>
            <div className="border rounded p-4 hover:shadow">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p>{property.location}</p>
              <p className="text-green-700">{property.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
