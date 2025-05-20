import properties from '../data/properties';
import Link from 'next/link';

export default function Sitemap() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sitemap</h1>
      <ul className="list-disc pl-4">
        {properties.map((property) => (
          <li key={property.slug}>
            <Link href={`/property/${property.slug}`}>
              {property.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}