import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PropertyPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/property/${slug}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error('Failed to fetch property', err));
  }, [slug]);

  useEffect(() => {
    if (property) {
      window.__currentProperty = property;
    }
  }, [property]);

  if (!property) return <p className="p-6">Loading...</p>;

  return (
    <main className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-lg">{property.location}</p>
      <p className="text-green-600 font-semibold">{property.price}</p>
      <p>{property.description}</p>

      <div className="mt-4">
        <h2 className="font-semibold">Details:</h2>
        <ul className="list-disc list-inside">
          <li><strong>Type:</strong> {property.type}</li>
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Size:</strong> {property.sqft} sqft</li>
          <li><strong>Listed:</strong> {property.listedDate}</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Amenities:</h2>
        <ul className="list-disc list-inside">
          {property.amenities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Agent:</h2>
        <p>{property.agent.name}</p>
        <p>{property.agent.phone}</p>
        <p>{property.agent.email}</p>
      </div>

      {/* Fin-accessible JSON */}
      <script
        id="property-details"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(property),
        }}
      />
    </main>
  );
}
