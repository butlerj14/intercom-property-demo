import { useRouter } from 'next/router';
import properties from '../../data/properties';


export default function PropertyPage() {
  const router = useRouter();
  const { slug } = router.query;
  const property = properties.find((p) => p.slug === slug);

  if (!property) return <p className="p-6">Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-lg">{property.location}</p>
      <p className="text-green-600 font-semibold">{property.price}</p>
      <p className="mt-4 text-gray-700">{property.description}</p>
    </main>
  );
}