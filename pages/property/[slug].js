import properties from '../../data/properties';

export async function getStaticPaths() {
  const paths = properties.map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) return { notFound: true };

  return { props: { property } };
}

export default function PropertyPage({ property }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-lg">{property.location}</p>
      <p className="text-green-600 font-semibold">{property.price}</p>
      <p className="mt-4 text-gray-700">{property.description}</p>

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

      {property.agent && (
        <div className="mt-4">
          <h2 className="font-semibold">Agent:</h2>
          <p><strong>Name:</strong> {property.agent.name}</p>
          <p><strong>Phone:</strong> {property.agent.phone}</p>
          <p><strong>Email:</strong> {property.agent.email}</p>
        </div>
      )}

      {/* Intercom Fin JSON injection */}
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
