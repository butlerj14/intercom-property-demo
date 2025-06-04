import properties from '../../../data/properties';

export default function handler(req, res) {
  const { slug } = req.query;

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return res.status(404).json({ error: 'Property not found' });
  }

  return res.status(200).json(property);
}
