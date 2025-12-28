import { Header, ProductCarousel } from '@/components';
import { Product } from '@/types';

const products: Product[] = [
  {
    id: 1,
    name: "Fairy Godmother's Magic Wand",
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1614881495630-372c5c6d0b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMHdhbmQlMjBzcGFya2xlfGVufDF8fHx8MTc2Njk0OTc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Grant wishes with this enchanted wand',
  },
  {
    id: 2,
    name: "Aladdin's Magic Carpet",
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1671063269428-80f5625fe5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMGNhcnBldCUyMHBlcnNpYW58ZW58MXx8fHwxNzY2OTQ5Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Fly through the skies on this magical carpet',
  },
  {
    id: 3,
    name: 'Enchanted Rose',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1645626862465-251ecc5c1ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmNoYW50ZWQlMjByb3NlJTIwZ2xhc3N8ZW58MXx8fHwxNzY2OTQ5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: "Beauty and the Beast's eternal rose under glass",
  },
  {
    id: 4,
    name: "Genie's Magic Lamp",
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1762970783700-24c46af67eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMGxhbXAlMjBnb2xkZW58ZW58MXx8fHwxNzY2OTQ5Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: "Rub the lamp to summon the Genie's magic",
  },
  {
    id: 5,
    name: "Cinderella's Glass Slipper",
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1743448111530-3654e7b66f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHNsaXBwZXIlMjBjcnlzdGFsfGVufDF8fHx8MTc2Njk0OTgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The legendary crystal slipper from the ball',
  },
  {
    id: 6,
    name: "Evil Queen's Magic Mirror",
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1652406267886-429fed650354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMG1pcnJvciUyMG9ybmF0ZXxlbnwxfHx8fDE3NjY5NDk4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: "Mirror mirror on the wall, who's the fairest of them all",
  },
];

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to the Magic Store
          </h2>

          <p className="text-lg text-gray-600">
            Discover our exclusive collection of magical products.
          </p>
        </div>

        <ProductCarousel products={products} />
      </main>
    </div>
  );
};
